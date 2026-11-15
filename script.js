
"use strict";

const form = document.querySelector("#report-form");
const menuToggle = document.querySelector("#menu-toggle");
const sidebar = document.querySelector("#sidebar");
const overlay = document.querySelector("#page-overlay");
const typeInputs = document.querySelectorAll('input[name="reportType"]');
const dateInput = document.querySelector("#event-date");
const descriptionInput = document.querySelector("#description");
const photoInput = document.querySelector("#item-photo");
const preview = document.querySelector("#file-preview");
const dialog = document.querySelector("#success-dialog");

let previewUrl = null;
let toastTimeout;

const fieldIds = [
  "item-name",
  "category",
  "location",
  "event-date",
  "description"
];

const getField = (id) => document.getElementById(id);

function showToast(message) {
  const toast = getField("toast");

  window.clearTimeout(toastTimeout);

  toast.textContent = message;
  toast.hidden = false;

  toastTimeout = window.setTimeout(() => {
    toast.hidden = true;
  }, 4500);
}

function toggleMenu(forceOpen) {
  const open = typeof forceOpen === "boolean"
    ? forceOpen
    : !sidebar.classList.contains("open");

  sidebar.classList.toggle("open", open);
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.setAttribute(
    "aria-label",
    open ? "Tutup menu navigasi" : "Buka menu navigasi"
  );

  overlay.hidden = !open;
}

menuToggle.addEventListener("click", () => toggleMenu());

overlay.addEventListener("click", () => toggleMenu(false));

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && sidebar.classList.contains("open")) {
    toggleMenu(false);
  }
});

sidebar.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => toggleMenu(false));
});

document.querySelectorAll("[data-unavailable]").forEach((button) => {
  button.addEventListener("click", () => {
    toggleMenu(false);

    showToast(
      `Halaman ${button.dataset.unavailable} belum diimplementasikan. Tugas ini berfokus pada halaman Buat Laporan.`
    );
  });
});

document.getElementById("quick-search").addEventListener("submit", (event) => {
  event.preventDefault();

  showToast(
    "Fitur pencarian tersedia pada rancangan Figma; implementasi tugas ini hanya halaman Buat Laporan."
  );
});

function setReportType() {
  const type = form.elements.reportType.value;

  const locationLabel = document.getElementById("location-label");
  const labelText = type === "temuan"
    ? "Lokasi barang ditemukan "
    : "Lokasi terakhir terlihat ";

  locationLabel.replaceChildren(document.createTextNode(labelText));

  const requiredMark = document.createElement("span");
  requiredMark.className = "required";
  requiredMark.setAttribute("aria-hidden", "true");
  requiredMark.textContent = "*";

  locationLabel.append(requiredMark);

  getField("location").placeholder = type === "temuan"
    ? "Contoh: Meja perpustakaan"
    : "Contoh: Gedung A lantai 2";
}

typeInputs.forEach((input) => {
  input.addEventListener("change", setReportType);
});

setReportType();

const today = new Date();

const localToday = [
  today.getFullYear(),
  String(today.getMonth() + 1).padStart(2, "0"),
  String(today.getDate()).padStart(2, "0")
].join("-");

dateInput.max = localToday;

function setError(id, message) {
  const field = getField(id);
  const error = getField(`${id}-error`);

  if (error) {
    error.textContent = message;
  }

  if (message) {
    field.setAttribute("aria-invalid", "true");
  } else {
    field.removeAttribute("aria-invalid");
  }
}

function setConsentError(message) {
  const field = getField("privacy-agreement");

  getField("privacy-agreement-error").textContent = message;

  if (message) {
    field.setAttribute("aria-invalid", "true");
  } else {
    field.removeAttribute("aria-invalid");
  }
}

function containsSensitiveInfo(value) {
  return /\b(?:\+62|62|08)[\s.\-]?(?:\d[\s.\-]?){8,13}\b|\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b|\b(?:NIM|NPM)\s*[:#-]?\s*\d{6,}\b/i.test(value);
}

function validateField(id) {
  const field = getField(id);
  const value = field.value.trim();

  let message = "";

  if (!value) {
    message = "Kolom ini wajib diisi.";
  } else if (id === "item-name" && value.length < 3) {
    message = "Nama barang minimal 3 karakter.";
  } else if (id === "location" && value.length < 3) {
    message = "Lokasi minimal 3 karakter.";
  } else if (id === "description" && value.length < 15) {
    message = "Deskripsi minimal 15 karakter.";
  } else if (id === "event-date" && value > localToday) {
    message = "Tanggal tidak boleh melebihi hari ini.";
  } else if (
    (id === "description" || id === "location") &&
    containsSensitiveInfo(value)
  ) {
    message = "Hapus nomor telepon, email, atau NIM dari informasi publik.";
  }

  setError(id, message);

  return !message;
}

function clearPhoto() {
  if (previewUrl) {
    URL.revokeObjectURL(previewUrl);
  }

  previewUrl = null;
  photoInput.value = "";

  getField("photo-preview").removeAttribute("src");

  preview.hidden = true;

  getField("photo-error").textContent = "";
  photoInput.removeAttribute("aria-invalid");

  updateCompletion();
}

function validatePhoto() {
  const file = photoInput.files[0];

  if (!file) {
    clearPhoto();
    return true;
  }

  let message = "";

  const allowedTypes = [
    "image/png",
    "image/jpeg",
    "image/webp"
  ];

  if (!allowedTypes.includes(file.type)) {
    message = "Gunakan format PNG, JPG, atau WebP.";
  } else if (file.size > 3 * 1024 * 1024) {
    message = "Ukuran foto maksimal 3 MB.";
  }

  if (message) {
    clearPhoto();

    getField("photo-error").textContent = message;
    photoInput.setAttribute("aria-invalid", "true");

    return false;
  }

  if (previewUrl) {
    URL.revokeObjectURL(previewUrl);
  }

  previewUrl = URL.createObjectURL(file);

  getField("photo-preview").src = previewUrl;
  getField("file-name").textContent = file.name;

  getField("file-size").textContent =
    `${(file.size / 1024).toFixed(1)} KB · hanya pratinjau lokal`;

  preview.hidden = false;

  getField("photo-error").textContent = "";
  photoInput.removeAttribute("aria-invalid");

  updateCompletion();

  return true;
}

photoInput.addEventListener("change", validatePhoto);

getField("remove-photo").addEventListener("click", clearPhoto);

function updateCompletion() {
  const completed =
    fieldIds.filter((id) => Boolean(getField(id).value.trim())).length +
    (getField("privacy-agreement").checked ? 1 : 0);

  const percentage = Math.round((completed / 6) * 100);

  getField("completion-meter").value = percentage;
  getField("completion-text").textContent = `${percentage}%`;
  getField("completion-meter").textContent = `${percentage}%`;
}

fieldIds.forEach((id) => {
  const field = getField(id);

  field.addEventListener("input", () => {
    if (field.hasAttribute("aria-invalid")) {
      validateField(id);
    }

    updateCompletion();
  });

  field.addEventListener("change", () => {
    if (field.hasAttribute("aria-invalid")) {
      validateField(id);
    }

    updateCompletion();
  });
});

getField("privacy-agreement").addEventListener("change", () => {
  setConsentError("");
  updateCompletion();
});

descriptionInput.addEventListener("input", () => {
  getField("char-count").textContent =
    String(descriptionInput.value.length);
});

function submitReport(event) {
  event.preventDefault();

  let isValid = true;
  let firstInvalid = null;

  fieldIds.forEach((id) => {
    if (!validateField(id)) {
      isValid = false;

      if (!firstInvalid) {
        firstInvalid = getField(id);
      }
    }
  });

  if (!getField("privacy-agreement").checked) {
    setConsentError("Konfirmasi keamanan informasi diperlukan.");

    if (!firstInvalid) {
      firstInvalid = getField("privacy-agreement");
    }

    isValid = false;
  } else {
    setConsentError("");
  }

  if (photoInput.files.length && !validatePhoto()) {
    if (!firstInvalid) {
      firstInvalid = photoInput;
    }

    isValid = false;
  }

  if (!isValid) {
    firstInvalid?.focus();

    showToast(
      "Periksa kembali kolom yang ditandai sebelum mengirim laporan."
    );

    return;
  }

  const rows = [
    [
      "Jenis laporan",
      form.elements.reportType.value === "hilang"
        ? "Barang Hilang"
        : "Barang Temuan"
    ],
    [
      "Nama barang",
      getField("item-name").value.trim()
    ],
    [
      "Kategori",
      getField("category").value
    ],
    [
      "Lokasi",
      getField("location").value.trim()
    ],
    [
      "Tanggal",
      getField("event-date").value
    ]
  ];

  const resultList = getField("report-result");

  resultList.replaceChildren();

  rows.forEach(([label, value]) => {
    const item = document.createElement("div");
    const term = document.createElement("dt");
    const description = document.createElement("dd");

    term.textContent = label;
    description.textContent = value;

    item.append(term, description);
    resultList.append(item);
  });

  dialog.showModal();
}

form.addEventListener("submit", submitReport);

getField("close-dialog").addEventListener("click", () => {
  dialog.close();
});

form.addEventListener("reset", () => {
  window.setTimeout(() => {
    clearPhoto();

    fieldIds.forEach((id) => {
      setError(id, "");
    });

    setConsentError("");

    getField("char-count").textContent = "0";

    setReportType();
    updateCompletion();
  }, 0);
});

window.addEventListener("pagehide", () => {
  if (previewUrl) {
    URL.revokeObjectURL(previewUrl);
  }
});

updateCompletion();

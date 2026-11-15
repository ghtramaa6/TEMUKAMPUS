# TemuKampus — Report Submission Page Implementation

A frontend project developed for the **Wireframe Implementation Assignment** of **TemuKampus**, a web-based platform designed to help students report lost and found items within the campus environment.

## Technologies and Project Structure

```text
TemuKampus_Tugas_Implementasi/
├── index.html                 # Root document: Semantic HTML5
├── styles.css                 # Styling, CSS custom properties, and responsive design
├── script.js                  # Form validation, report types, menu, photo upload, dialog, and progress
├── README.md                  # Project description and instructions
├── assets/
│   └── favicon.svg           # Local application icon
└── reference/
    └── wireframe-buat-laporan.png  # Wireframe reference from Assignment 1, not an active UI element
```

## Getting Started

1. Download or clone the repository.
2. Open `index.html` directly in your web browser, or start a local development server using Python:

   ```bash
   python -m http.server 8000
   ```

3. Open `http://localhost:8000` in your browser.
4. Test the application by selecting **Lost Item** or **Found Item**, completing the report form, uploading a photo, and clicking **Submit Report**.

## Semantic HTML Components (Minimum of 5)

| Component | File / Selector | Functionality |
|---|---|---|
| Sidebar Navigation | `index.html #sidebar`, `#primary-nav` | Responsive sidebar controlled by `script.js: toggleMenu()` |
| Header and Quick Search | `index.html .topbar`, `#quick-search` | Displays a notification indicating that the search page has not yet been implemented |
| Report Type Selection | `index.html #report-kind` | Radio button group; `script.js: setReportType()` dynamically updates the location field label |
| Report Submission Form | `index.html #report-form` | Validates required fields, description length, dates, and potentially sensitive personal information through `submitReport()` |
| Photo Upload and Preview | `index.html #image-upload` | Supports PNG, JPG, and WebP files up to 3 MB; includes `validatePhoto()` and `clearPhoto()` |
| Safe Reporting Tips | `index.html #tips` | Displays privacy and security guidelines that remain visible to users |
| Confirmation Dialog | `index.html #success-dialog` | Displays a summary of the submitted report and confirms simulation status without storing any data |

## CSS Custom Properties

The application uses CSS custom properties defined within `:root` to maintain visual consistency and simplify future styling updates.

The main color variables include:

- `--primary`
- `--teal-bright`
- `--accent`
- `--bg`
- `--text`

Spacing is managed using predefined design tokens, ranging from `--spacing-1` to `--spacing-5`, with values of **8, 16, 24, 32, and 48 pixels**.

The layout combines **CSS Grid and Flexbox** to create a structured and flexible interface. Media queries are implemented to ensure that the sidebar, form columns, and other interface components adapt properly to smaller screens.

## Manual Testing

The following manual tests were conducted to verify the functionality and responsiveness of the application.

1. **Required Field Validation:** Click **Submit Report** with all fields empty. Validation messages should appear for every required field.
2. **Successful Form Submission:** Enter valid information, select the consent checkbox, and submit the form. A confirmation dialog should display a summary of the simulated submission.
3. **Dynamic Report Type Selection:** Switch the report type to **Found Item**. The location field label should automatically change to **Location Where the Item Was Found**.
4. **Photo Upload and Preview:** Upload a supported image file smaller than or equal to 3 MB. The image preview should appear, and clicking **Remove** should clear the selected image.
5. **Date and Privacy Validation:** Enter a future date or include a phone number in the description. The validation system should reject the input.
6. **Responsive Navigation:** Open
   


# TemuKampus - Lost and Found Reporting Website

## Project Overview

TemuKampus is a web-based prototype designed to help students report lost and found items on campus.

This project implements the **Create Report (Buat Laporan)** page based on a previously designed desktop wireframe.

The website is developed using HTML, CSS, and JavaScript, focusing on responsive design, form validation, user interaction, and data privacy awareness.

## Features

- **Responsive Sidebar Navigation:** Provides access to the main navigation menu and adapts to smaller screens.
- **Report Type Selection:** Allows users to choose between Lost Item and Found Item reports.
- **Report Form:** Collects item names, categories, locations, incident dates, and general descriptions.
- **Form Validation:** Checks required fields, input lengths, dates, and common patterns of sensitive information.
- **Image Upload and Preview:** Supports PNG, JPG, and WebP images with a maximum file size of 3 MB.
- **Form Completion Indicator:** Displays the percentage of required information completed.
- **Submission Confirmation:** Shows a report summary after successful validation.
- **Notification Messages:** Provides feedback for unavailable pages and incomplete form fields.

## Technologies Used

| Technology | Purpose |
|------------|---------|
| HTML5 | Semantic structure and form elements |
| CSS3 | Styling, layout, and responsive design |
| JavaScript | Form validation and interactive features |
| GitHub | Source code management |
| GitHub Pages | Static website hosting |

## Project Structure

```text
TEMUKAMPUS/
├── index.html
├── styles.css
├── script.js
├── README.md
├── TESTING.md
├── preview-desktop.png
└── preview-mobile.png
```

### File Descriptions

- `index.html` — Contains the main page structure, navigation, report form, and confirmation dialog.
- `styles.css` — Defines colors, typography, spacing, layout, and responsive breakpoints.
- `script.js` — Handles form validation, sidebar navigation, image previews, and submission interactions.
- `README.md` — Provides project documentation and setup instructions.
- `TESTING.md` — Contains testing notes and validation scenarios.
- `preview-desktop.png` — Shows the desktop interface preview.
- `preview-mobile.png` — Shows the mobile interface preview.

An optional `assets/` directory can be used to store additional website resources, such as a favicon.

## How to Run the Project

### Option 1: Run Locally

1. Open the GitHub repository:

   https://github.com/ghtramaa6/TEMUKAMPUS

2. Click **Code** and select **Download ZIP**.

3. Extract the ZIP file to a folder on your computer.

4. Open the extracted project folder.

5. Make sure `index.html`, `styles.css`, and `script.js` are located in the same directory.

6. Double-click `index.html` to open the website in a browser.

Supported browsers include Google Chrome, Microsoft Edge, and Mozilla Firefox.

### Option 2: Run Using Visual Studio Code

1. Open Visual Studio Code.
2. Select **File > Open Folder**.
3. Choose the TemuKampus project folder.
4. Install the **Live Server** extension if it is not already installed.
5. Right-click `index.html`.
6. Select **Open with Live Server**.

The website will open in your default browser.

### Option 3: Access GitHub Pages

The website can also be accessed through GitHub Pages after deployment has been enabled.

**Live Demo:**

https://ghtramaa6.github.io/TEMUKAMPUS/

## Testing

The following scenarios can be used to verify the website functionality.

| Test Case | Expected Result |
|-----------|-----------------|
| Submit an empty form | Required field validation messages appear |
| Select Found Item | The location label changes accordingly |
| Enter a future date | The form displays a date validation error |
| Enter a description shorter than 15 characters | A validation message appears |
| Upload a supported image | The selected image preview is displayed |
| Upload an image larger than 3 MB | The file is rejected |
| Remove an uploaded image | The image preview is cleared |
| Submit a valid form | A confirmation dialog displays the report summary |
| Open the website on a mobile device | The layout adapts and the sidebar can be toggled |

## Design Considerations

The interface follows several UI/UX design principles:

- **Visual Hierarchy:** Important information and primary actions are clearly emphasized.
- **Consistency:** Reusable colors, spacing, and typography improve readability.
- **Responsive Design:** CSS Grid, Flexbox, and media queries allow the layout to adapt to different screen sizes.
- **User Feedback:** Validation messages and notifications help users understand the results of their actions.
- **Accessibility:** Semantic HTML elements, labels, and ARIA attributes improve usability.
- **Privacy Awareness:** Users are reminded not to publish personal information or confidential ownership details.

## Project Limitations

This project is a frontend prototype developed for academic purposes.

The report submission process is simulated using JavaScript. No backend server, database, or permanent data storage is implemented.

Uploaded images are previewed locally in the browser and are not uploaded to a server.

The sensitive information detection feature uses basic pattern matching and does not guarantee complete protection against accidental disclosure.

Other navigation pages are not yet implemented.

## Repository

**GitHub Repository:**

https://github.com/ghtramaa6/TEMUKAMPUS

**GitHub Pages:**

https://ghtramaa6.github.io/TEMUKAMPUS/

## Academic Purpose

This project was developed as part of a UI/UX wireframe implementation assignment in 2026.

The main objective is to translate a desktop wireframe into a functional, responsive webpage using semantic HTML, external CSS, and JavaScript.

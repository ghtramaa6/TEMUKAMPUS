
# TemuKampus - Lost and Found Reporting Website

## Project Overview

TemuKampus is a web-based prototype designed to help students report lost and found items within the campus environment.

This project was developed as part of a **Front-End Programming** course assignment. It focuses on implementing the **Create Report (Buat Laporan)** page based on a previously designed desktop wireframe.

The website is built using HTML5, CSS3, and JavaScript, with an emphasis on semantic structure, responsive layouts, form validation, interactive components, and user privacy awareness.

## Features

The Create Report page provides the following features:

- **Responsive Sidebar Navigation:** Displays the main navigation menu and adapts to smaller screen sizes.
- **Report Type Selection:** Allows users to choose between Lost Item and Found Item reports.
- **Report Form:** Collects item names, categories, locations, incident dates, and descriptions.
- **Form Validation:** Checks required fields, minimum input lengths, dates, and common patterns of sensitive information.
- **Image Upload and Preview:** Supports PNG, JPG, and WebP images with a maximum file size of 3 MB.
- **Form Completion Indicator:** Displays the percentage of required information completed.
- **Submission Confirmation:** Displays a summary of the report after successful validation.
- **Interactive Notifications:** Provides feedback when users access unavailable features or submit incomplete information.

## Technologies Used

| Technology | Purpose |
|------------|---------|
| HTML5 | Creates the semantic structure and form elements |
| CSS3 | Handles styling, layouts, and responsive design |
| JavaScript | Provides form validation and interactive functionality |
| GitHub | Stores and manages the project source code |
| GitHub Pages | Hosts the static website when deployment is enabled |

## Project Structure

The project is organized using the following file structure:

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

| File | Description |
|------|-------------|
| `index.html` | Contains the main page structure, navigation, report form, and confirmation dialog |
| `styles.css` | Defines colors, typography, spacing, layouts, and responsive breakpoints |
| `script.js` | Handles form validation, sidebar navigation, image previews, and submission interactions |
| `README.md` | Provides project information, setup instructions, and technical documentation |
| `TESTING.md` | Contains testing scenarios and implementation notes |
| `preview-desktop.png` | Shows a preview of the desktop interface |
| `preview-mobile.png` | Shows a preview of the mobile interface |

An optional `assets/` directory can be used to store additional resources, such as icons and images.

## How to Run the Project

This project uses standard HTML, CSS, and JavaScript.

No framework, package manager, backend server, or database is required to run the frontend prototype.

### Option 1: Run Locally

1. Open the GitHub repository:

   https://github.com/ghtramaa6/TEMUKAMPUS

2. Click the **Code** button and select **Download ZIP**.

3. Extract the downloaded ZIP file.

4. Open the extracted project directory.

5. Make sure `index.html`, `styles.css`, and `script.js` are located in the same directory.

6. Double-click `index.html` to open the website in a browser.

The website can be opened using Google Chrome, Microsoft Edge, or Mozilla Firefox.

### Option 2: Run Using Visual Studio Code

1. Open Visual Studio Code.
2. Select **File > Open Folder**.
3. Choose the TemuKampus project directory.
4. Install the **Live Server** extension if necessary.
5. Right-click `index.html`.
6. Select **Open with Live Server**.

The website will open in your default browser.

### Option 3: Clone the Repository Using Git

Open a terminal and run:

```bash
git clone https://github.com/ghtramaa6/TEMUKAMPUS.git
```

Navigate to the project directory:

```bash
cd TEMUKAMPUS
```

Open `index.html` in your browser or run the project using Live Server.

### Option 4: Access GitHub Pages

The website can be accessed through GitHub Pages after deployment has been enabled successfully.

**Live Demo:**

https://ghtramaa6.github.io/TEMUKAMPUS/

## Main HTML Components

The Create Report page contains several components implemented using semantic HTML and JavaScript.

| Component | File / Selector | Functionality |
|-----------|-----------------|---------------|
| Sidebar Navigation | `index.html` - `#sidebar`, `#primary-nav` | Provides responsive navigation controlled by `toggleMenu()` |
| Header and Quick Search | `index.html` - `.topbar`, `#quick-search` | Displays page information and notifies users when search is unavailable |
| Report Type Selection | `index.html` - `#report-kind` | Allows users to choose a report type and updates the location label using `setReportType()` |
| Report Form | `index.html` - `#report-form` | Collects item information and validates user input using `validateField()` and `submitReport()` |
| Image Upload and Preview | `index.html` - `#image-upload` | Validates image files and displays a preview using `validatePhoto()` and `clearPhoto()` |
| Safe Reporting Tips | `index.html` - `#tips` | Displays privacy recommendations and reporting guidelines |
| Confirmation Dialog | `index.html` - `#success-dialog` | Displays a report summary after successful form validation |

## JavaScript Functionality

JavaScript is used to manage user interactions and provide feedback throughout the reporting process.

### Form Validation

The validation system checks:

- Required input fields.
- Minimum character lengths.
- Incident dates that must not exceed the current date.
- Common patterns of personal information in public text.
- Privacy agreement confirmation.
- Uploaded image format and file size.

When invalid information is detected, the corresponding field displays an error message.

### Report Type Selection

Users can select either **Barang Hilang** (Lost Item) or **Barang Temuan** (Found Item).

The location label and placeholder automatically change based on the selected report type.

### Image Upload

The upload feature accepts the following image formats:

- PNG
- JPG / JPEG
- WebP

The maximum file size is **3 MB**.

The selected image is displayed as a local preview, and users can remove it before submitting the form.

### Form Completion Indicator

The completion indicator calculates progress based on five required fields and the privacy agreement checkbox.

It updates automatically as users complete the form.

### Submission Confirmation

When all required information is valid, JavaScript displays a confirmation dialog containing the report summary.

The submission process is simulated and does not transmit information to a server.

## CSS Implementation

The website uses an external stylesheet named `styles.css`.

### CSS Custom Properties

CSS variables are defined within the `:root` selector to maintain consistency across the interface.

Examples include:

- `--primary`: Main interface color.
- `--primary-hover`: Hover state color.
- `--teal-bright`: Secondary teal color.
- `--accent`: Accent color.
- `--bg`: Main background color.
- `--text`: Primary text color.
- `--border`: Border color.

### Spacing System

The project uses reusable spacing values:

| Variable | Value |
|----------|-------|
| `--spacing-1` | 8px |
| `--spacing-2` | 16px |
| `--spacing-3` | 24px |
| `--spacing-4` | 32px |
| `--spacing-5` | 48px |

### Responsive Design

The layout combines CSS Grid, Flexbox, and media queries.

Responsive breakpoints are implemented for screen widths of:

- 1200px
- 980px
- 750px
- 540px

These adjustments allow the navigation, report form, and supporting information cards to adapt to smaller screens.

## Testing

The following scenarios can be used to verify the website functionality.

| Test Case | Expected Result |
|-----------|-----------------|
| Submit an empty form | Required field validation messages appear |
| Select Barang Temuan | The location label changes to the found-item location |
| Enter a future date | A date validation error appears |
| Enter a description shorter than 15 characters | A description validation error appears |
| Enter common personal information patterns | A privacy-related validation message appears |
| Upload a supported image | The selected image preview is displayed |
| Upload an image larger than 3 MB | The image is rejected |
| Remove an uploaded image | The image preview is cleared |
| Submit a valid form | A confirmation dialog displays the report summary |
| Open the website on a mobile device | The layout adapts and the sidebar can be toggled |

Additional testing notes are documented in `TESTING.md`.

## Front-End Development Considerations

Several front-end development principles are applied throughout the project.

### Semantic HTML

Semantic elements such as `header`, `nav`, `main`, `section`, `aside`, and `form` are used to organize the page structure.

### Responsive Layout

CSS Grid and Flexbox are used to create flexible layouts that adapt to different screen sizes.

### User Interaction

JavaScript handles form validation, navigation, notifications, image previews, and confirmation dialogs.

### Accessibility

The interface uses input labels, ARIA attributes, keyboard interactions, and visible validation messages to improve accessibility.

### Privacy Awareness

Users are reminded not to include personal information or confidential ownership details in public reports.

Basic pattern matching is implemented to identify some potentially sensitive information.

## Project Limitations

This project is a frontend prototype developed for academic purposes.

The following limitations apply:

- Report submission is simulated using JavaScript.
- No backend server or database is implemented.
- Submitted information is not stored permanently.
- Uploaded images are previewed locally and are not sent to a server.
- Personal information detection uses basic pattern matching and cannot guarantee complete protection.
- Other navigation pages have not yet been implemented.

The current implementation focuses on demonstrating the frontend functionality of the Create Report page.

## Repository and Live Demo

**GitHub Repository:**

https://github.com/ghtramaa6/TEMUKAMPUS

**GitHub Pages:**

https://ghtramaa6.github.io/TEMUKAMPUS/

## Academic Purpose

This project was developed in 2026 as part of a **Front-End Programming** course assignment.

The main objective is to implement a previously designed wireframe into a functional and responsive webpage using HTML5, CSS3, and JavaScript.

Through TemuKampus, front-end programming concepts are applied to a practical campus lost-and-found reporting interface.

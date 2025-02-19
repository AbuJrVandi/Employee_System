# 📚 Employee Management System

A simple **Employee Management System** built with **React, HTML, and CSS** that displays student information in a table format. The data is pulled from a **JSON file server**, making it easy to update and manage employee records dynamically.

## 🚀 Features

- ✅ Displays employee details in a table.
- ✅ Fetches data from a JSON file server.
- ✅ Uses **React Components** for a modular structure.
- ✅ Styled with **CSS** for a clean and responsive UI.
- ✅ Easily extendable with additional features like  edit,remove and detail.

## 📂 Project Structure

EMPLOYEES_DATA/               # Root directory
│── student/                  # Main project folder
│   │── node_modules/         # Dependencies (auto-generated)
│   │── public/               # Public assets
│   │   ├── favicon.ico       # Favicon for the app
│   │   ├── index.html        # Main HTML file
│   │   ├── logo192.png       # Logo asset
│   │   ├── logo512.png       # Larger logo
│   │   ├── manifest.json     # Web app manifest
│   │   ├── robots.txt        # Robots.txt for SEO
│   │── src/                  # Source code
│   │   ├── components/       # React components
│   │   │   ├── EmpCreate.js  # Employee creation form
│   │   │   ├── EmpDetail.js  # Employee details view
│   │   │   ├── EmpEdit.js    # Employee edit functionality
│   │   │   ├── EmpListing.js # Employee listing page
│   │   ├── App.css           # Global styles
│   │   ├── App.js            # Main app component
│   │   ├── App.test.js       # Unit tests
│   │   ├── index.css         # Additional styles
│   │   ├── index.js          # App entry point
│   │   ├── logo.svg          # React logo
│   │   ├── reportWebVitals.js # Performance reporting
│   │   ├── setupTests.js     # Testing setup
│   │── .gitignore            # Git ignore file
│   │── db.json               # Employee data (JSON format)
│   │── package-lock.json     # Lock file for dependencies
│   │── package.json          # Project metadata & dependencies
│   │── README.md             # Project documentation


## 🛠 How It Works
Routing & Navigation:

The app has components like EmpListing.js, EmpDetail.js, EmpCreate.js, and EmpEdit.js to handle listing, viewing, creating, and editing employees.
Fetching Data:

Employee data is stored in db.json, which acts as a mock database.
The app likely fetches data from this JSON file using fetch or an HTTP client like Axios.
Component Structure:

EmpListing.js → Displays all employees in a table.
EmpDetail.js → Shows details of a specific employee.
EmpCreate.js → Provides a form to add a new employee.
EmpEdit.js → Allows editing employee details.
State Management:

The app likely uses React Hooks (useState, useEffect) to manage state.
Performance & Testing:

reportWebVitals.js is used for performance monitoring.
setupTests.js and App.test.js are included for unit testing (if configured).

## 🎨 Styling
Global Styles:

App.css and index.css handle global styling.
Basic CSS rules for layout, buttons, form styling, and table formatting.
Component-Specific Styling:

Each component might have inline styles or class names that refer to styles in App.css.
Customization:

You can modify App.css to change the color scheme, fonts, spacing, and responsiveness.

## 🤝 Contributing
Contributions are welcome! Fork the repo, create a branch, and submit a pull request.

## 📜 License
This project is open-source under the MIT License.

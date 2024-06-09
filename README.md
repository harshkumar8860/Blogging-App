# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


* Install All dependencies first
- npm i @reduxjs/toolkit react-redux react-router-dom appwrite @tinymce/tinymce-react html-react-parser react-hook-form
- and install Tailwind CSS

* Setup Environment Variables
- VITE_APPWRITE_URL="test environment"
- VITE_APPWRITE_PROJECT-ID=""
- VITE_APPWRITE_DATABASE-ID=""
- VITE_APPWRITE_COLLECTION-ID=""
- VITE_APPWRITE_BUCKET-ID=""

* Setup to access environment vairables in conf

* Setup services keeping verdor lock-in in mind(keeping code such that we can change our backend whenever we want), for auth(account creation service) and config(database and storage service)

* Setup Redux-toolkit, store and reducers of AuthSlice, assignment PostSlice

* Create Components, App.jsx, main.jsx

* Creating RTE(Real Time Editor)

* Creating Forms and handling Slug

* Building Pages

* Routing

* Debugging and Deployment

- What we've learned?
- Signup, login, logout redux/context, routing, CRUD, file handling, Auth, Database, file management

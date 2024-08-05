# React + Vite

-----------------------------------------------------------------------------------------------------
Step 1: build a react router to guide the app that will be build
    - dependency: react-router-dom@6.4
    - create 2 folders inside src: layouts and pages
        - In folder layouts: create RootLayout.jsx as a navigation
        - In folder pages: create the content Home.jsx and About.jsx
    - if modified, add navigation and content

-----------------------------------------------------------------------------------------------------
Step 2: create firebase connection from react to database
    - src/config/firebase.js
    - .env to hide information in config file firebase.js when putting to github
        - environment variable started with VITE_
        - config file firebase.js using .env = import.meta.env (process is not defined)
-----------------------------------------------------------------------------------------------------
Step 3: read and write to Firestore
    - initialize db and select the collection of Firestore
    - db, getDocs then filteredData, map each element of the array, <div> require key
    - db, addDoc to write data to Firestore, create new document everytime writing

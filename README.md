# Food Ordering Application

- Create a folder and opened in VS code - Added index.html and App.js
- Create a new repository in git - Configured the same in vs code - git init command and below commands
  ( git init
  git add README.md
  git commit -m "first commit"
  git branch -M main
  git remote add origin https://github.com/Adarsha-React/FoodOrderApp.git
  git push -u origin main )
SSL issue:
Use this command to resolve SSL issue: git config --global http.sslbackend schannel
then try git push -u origin main

git config --global user.email "adarshareact2023@gmail.com"
git config --global user.name "Adarsha-React"

- Configured npm init (package.json file was added from it)
- Installed below packages - npm install react - npm install react-dom - npm install -D parcel (this is using dev dependency)

- Index.html:
  Added root-
    <div id="root"> Not Rendered </div>
    Added script tag with type="module" and src="App.js"

- App.js -
  import React from "react";
  import ReactDOM from "react-dom/client";

        const Header = () => {

  return (

    <div>
    <h1>Header component</h1>
    </div>);
    };

  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<Header />);

Added .gitignore file - Added /node_modules - /dist - .parcel-cache

finally - npm parcel index.html to run the app on localhost

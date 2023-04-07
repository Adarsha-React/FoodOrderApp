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

SSL issue:
try this and re-try to push

git config --global http.sslbackend schannel

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

# finally - npm parcel index.html to run the app on localhost

Tailwind :
https://tailwindcss.com/docs/guides/parcel
npm install -D tailwindcss postcss
npx tailwindcss init

created .postcssrc
create index.css and three lines
added index.css in index.html file using <link> tag
=============
Deleted all files like node_modules, dist, and parcel-cache
we can re-create.
if node_module is deleted mean, all install packages are also delete from the app, so we have run the below command to add all required packages to our project

- npm install

this is how we do on production system as well, we will not node_modules into "dist" folder during the production build.

--added script tags

- "start": "parcel index.html" ==> we can use npm run start/ npm start
- "build": "parcel build index.html" - for production build (check/remove main in package.json)

- configured, .babelrc file to remove colose.log statements
  npm install babel-plugin-transform-remove-console --save-dev
  =============================================

  Header, login, restarant cards created

- useState hook used to check login and logout status
- Logo added from image folder
- Login - Logout function added at high level with conditional rendering
- # Object create with restaurant and used the same object to pull the data in restaurant card.

  Added lot of features so far-

  - You can check my food Ordering Application.
    http://localhost:1234/

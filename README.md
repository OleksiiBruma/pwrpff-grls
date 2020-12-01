# TV SHOW APP 

# ABOUT APP
App consists of two routes: 

1: `/show/:id` - show description (name, summary, image) and list of the episodes (name, airtime, season number)\

You can navigate to the second route by clicking one of the episodes from the list

2: `/episode/:id` - episode description (name, summary, image)

# API 
http://www.tvmaze.com/api#https

Base url : `http://api.tvmaze.com`

GET Episode by id  :  `/episodes/:id`\
GET Episodes by show id : `/shows/:id/episodes`\
GET Show by id : `/shows/:id\`

# Additional things that were not required but were implemented\added

1. Loader during requests
2. Show more button on `show page`
3. Toast message in case of error
4. JSS with theme instead of CSS (sass/scss) to add more performance advantages. [Find more about jss](`https://cssinjs.org/performance/?v=v10.5.0`)
5. PropTypes for typing components
6. Eslint for maintaining clean code
7. And also favicons :smile:

# Tools that were used:

####[Creat react app](`https://create-react-app.dev/`)
####[Axios](`https://github.com/axios/axios`)
####[react testing library](`https://testing-library.com/docs/react-testing-library/intro/`)
####[React router](`https://reactrouter.com/`)
####[React-jss](`https://cssinjs.org/`)
####[Redux ](`https://redux.js.org/`)
####[React-Redux ](`https://react-redux.js.org/`)
####[Redux-Saga ](`https://redux-saga.js.org/`)
####[react-toastify ](`https://github.com/fkhadra/react-toastify`)
####[PropTypes](`https://reactjs.org/docs/typechecking-with-proptypes.html`)
####[Eslint](`https://eslint.org/`)



## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.


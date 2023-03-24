# Rooster Ridge

## Preqs

yarn
node
nvm https://github.com/nvm-sh/nvm#installing-and-updating 

run `nvm use`

## Env Vars for Github Actions
`CHAT_GPT_API_KEY` and `CHAT_GPT_ORG` needs to be set in github env for social media automation.
Email automation requires `MAIL_PASSWORD` and `MAIL_USERNAME` to be setup also in github

## To compress image
Images are automatically compressed when the website is built. Any images in /public/images are compressed automatically once maintaining quality and once minifying quality. Quality images are loaded in background and a blurred low quality version shows up until they are downloaded in the browser.
## calendar-invite-and-social-post.js
```sh
# Instal ncc
npm i -g @vercel/ncc

# Update the compiled version of calendar-invite-and-social-post.js so we don't have to check in node modules
ncc build calendar-invite-and-social-post.js --license licenses.txt --out dist/calendar-invite-and-social-post

# Which creates or updates dist/index.js (used in action.yml)
```

## monthly-update.js
```sh
# Instal ncc
npm i -g @vercel/ncc

# Update the compiled version of monthly-update.js so we don't have to check in node modules
ncc build monthly-update.js --license licenses.txt --out dist/monthly-update

# Which creates or updates dist/index.js (used in action.yml)
```


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

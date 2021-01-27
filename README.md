# Discount Posting Demo

This is a UI coding challenge that pulls data from a GraphQL endpoint, displays it in a popup and allows for simple editing before posting.

Below are some instructions for installing and running the application, as well as some ToDos if more time/complexity were required

## Installation

1. Checkout this repository
```bash
git clone https://github.com/kieranongh/ec-discount-demo
```

2. Navigate to directory
```bash
cd ec-discount-demo
```

3. Install node depencies
```bash
npm install
```

## ToDos

A few aspects I would look at next if building out this application more:

### Eject from Create React App (CRA).
CRA does a lot of boiler plate and set up for you when creating an application. It also keeps dependencies to a minimum, making a good case to avoid ejecting (More detail on Ejecting further on, from CRA).

However, ejecting would allow certain Webpack and ESLint changes, crucial in a larger application: 
- Using aliases for modules. Ie. replace `../../components/MyComponent` with `components/MyComponent`
- Import Sass variables into the Material UI theme, for one source of truth
- Customise ESLint config to be stricter, more opinionated for a cleaner, more consistent codebase

### Collate constants into a directory
Using constants instead of magic numbers reduces errors but even better than that is using one source of truth for constants - enter, the `constants` directory!

### Tests and CI/CD Pipeline
Cos that's what gives you confidence to push, great tests written to break when the application doesn't work and pass for cosmetic, irrelevant changes (ie. avoid using snapshots)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

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

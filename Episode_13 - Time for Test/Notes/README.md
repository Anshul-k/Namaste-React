# Types of testing (Developer)
- Manual Testing - Makes Changes in the Application and check manually if the feature is working.
- Unit Testing - Testing 1 unit/Component in Isolation 
- Integration Testing - Testing two or more components which are interdependant on each other
- End to End Testing / e2e Testing - Testing the whole flow of the Application from when user lands on the page, till they leaves.


# Setting up testing in our App:
- Install React Testing Library(RTL)
- Install Jest
- Installed Babel Dependencies
- Configure Babel (.babel.config.js)
- Configure Parcel Config file to disable default babel transpilation (.parcelrc)
- Jest Config - npx jest --init
- Install JSDOM library
- Install @babel/preset-react ---> To make JSX work in test cases
- Include @babel/preset-react inside my babel config
- Install @testing-library/jest-dom
- For images to test we need to Install --> npm install --save-dev identity-obj-proxy jest-transform-stub
    --You'll need identity-obj-proxy to mock CSS modules and jest-transform-stub to mock asset files like images.
- Configure the jest.config.js file: -
    -- By adding:
        moduleNameMapper: {
        "\\.(css|scss)$": "identity-obj-proxy",
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)$": "jest-transform-stub",
        },

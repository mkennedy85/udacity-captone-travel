## Getting started

To begin using and developing this Travel Planner app you must first clone this repo.

`cd` into your new folder and run:
- `npm install`

## Setting up the APIs

The APIs require key in whicch you must register for to begin using this project.

### Step 1: Signup for API keys
To begin developing with this project you will need to register and retrieve API keys for:
- Geoname
- Pixabay
- Weatherbits

### Step 2: Environment Variables
Next we need to declare our API keys, as well as choose a port to run the app on. This project is using `dotenv`, which means it will be looking for a `.env` file at the root of the project that will look like:
```
PORT=8080
GEONAME_USER=geoname_username
PIXABAY_API_KEY=asdfasdfasdf
WEATHERBITS_API_KEY=asdfasdfasdf
```

### Step 3: Running the app

We're ready to go! To start the server you may do the following:

```
# To run in development mode with webpack-dev-server
npm run build-dev

# To build production dist you may run
npm run build-prod

# To start the app you may run
npm run start
```

## Deployed

This app has been deployed to Heroku and can be found [here](https://arcane-beach-15568.herokuapp.com).

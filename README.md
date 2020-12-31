## Getting started

To begin using and developing this NLP app you must first clone this repo.

`cd` into your new folder and run:
- `npm install`

## Setting up the API

The Meaning Cloud API requires an API key in whicch you must register for to begin using this project.

### Step 1: Signup for an API key
You can find the API [here](https://www.meaningcloud.com/developer/sentiment-analysis). Once you create an account with MeaningCloud, you will be given a license key to start using the API. This API does not require an SDK, so you can skip ahead to step 4 in the instructions.

### Step 2: Environment Variables
Next we need to declare our API keys, as well as choose a port to run the app on. This project is using `dotenv`, which means it will be looking for a `.env` file at the root of the project that will look like:
```
PORT=8080
API_KEY="Your API key"
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

This app has been deployed to Heroku and can be found [here](https://mighty-dusk-28999.herokuapp.com).

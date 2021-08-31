# Weather Journal App Project

## Table of Contents

* [Usage](#Usage)
* [How it works](#how-it-works)

## Usage
[(Back to top)](#table-of-contents)

- Enter your zip code (US only).
- Write down a note about your feelings.
- Click on the "Generate" button to get date, temperature and your note printed in the "Most Recent Entry" section.

## How it works
[(Back to top)](#table-of-contents)

##### Whenever the "Generate" button is clicked, an event listener is triggered to do the following:

1. Creates a new date instance that stores the current date in a constant.

2. Sends a GET request to the **OpenWeatherMap** -API including the entered zip code and the API key- to get the temperature and store it in a constant. 

3. Sends a POST request to the server including the obtained data.

4. Uses the response data we get from the server to update the UI by displaying the data under the "Most Recent Entry" div.
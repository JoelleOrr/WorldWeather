## Wyn-Weather APP

This app was boostrapped with Create React App. We added react-router-dom, and configured a BrowserRouter in App.js that has two Routes: CitySearch and SingleCity.

The rest is up to you, but you will want to use the API we built for you.

Try `https://wyn-weather-api.herokuapp.com/cities?query=lo`

Or `https://wyn-weather-api.herokuapp.com/cities/44418`

## Getting Started

- Clone this repo and `cd` into it
- `yarn install && yarn start`

## Objective

See how far you can get in building something like this: https://wyn-weather-app.herokuapp.com/

## Details

Using `https://wyn-weather-api.herokuapp.com/cities?query=ma`, try to populate a list of cities like this:

<img width="398" alt="screen shot 2019-02-24 at 9 50 46 pm" src="https://user-images.githubusercontent.com/8116130/53311330-7ca91000-387e-11e9-99a6-00dcdb063c34.png">

And using `https://wyn-weather-api.herokuapp.com/cities/766273`, try to display the city's name and a set of upcoming daily forecasts.

<img width="400" alt="screen shot 2019-02-24 at 9 51 04 pm" src="https://user-images.githubusercontent.com/8116130/53311391-bd088e00-387e-11e9-92e4-1d58abe80447.png">

## Instructions

- Clone this repo, cd into it, yarn install and yarn start
- Make an issue, check out a branch that has your name in it and references your issue number
- Check out App.js -- you already have BrowserRouter and 2 Routes that point to existing components--you will be building the App in the two components :D
- In CitySearch, create a list of `cities` with the useState hook, which should default to an empty array.
- Create a function called handleSearch that will call your API and set the list of cities with state.
- You will need to render the results in this component--try doing this with an input that will trigger handleSearch on submit and map through the results as a list.
- The list items should have links that point to the SingleCity route / component.
- Inside of the component SingleCity, you will need to set a default city inside of state. The default city might -- for example -- have default values for its `name` and `forecasts`. Name would be a string and forecasts an array so try setting this state to an empty object.
- Make an API call via UseEffect that will update the value of the city with state.
- You should then render the results to display the upcoming daily forecasts.
- You should place a link of this page to go back to all cities.

## Submitting

- No matter how far you get, commit your work, push it up, and submit a pull request before the 60 minute time limit expires.

## Bonus

Bonus points for formatting the dates nicely (hint: moment.js), or for allowing the user to change the temps from C to F and back (hint: F = 1.8 \* C + 32).

All of this is just a starting point. Keep working on this throughout the week for additional React practice!

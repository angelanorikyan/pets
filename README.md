# Pets Front 

## Quick start

1.  This mini-project is using React Hooks as starting seed.
2.  Make sure that you have Node v8 or above installed.
3.  From the terminal `cd pets-app`.
3.  Run `npm run setup` in order to install dependencies and clean the git repo.
4.  Run `npm start` to see the example app at `http://localhost:3000`.

Now you're ready to rumble!

## Structure

The [`public`] folder contains the main HTML, CSS and the react icon.
In the [`src/`] folder you can find the entire application code, including JavaScript,
CSS and JSON files.

## Solution

This application uses responsive design which adopts in different screens such as laptops, tablets, mobiles.
I decided to make a reusable layout because the components' styles were repeated. 

The [`container/Global`] is the main dashboard that contains the functionality, the toggle buttons and the boxes that are imported from the[`components/Box`] and [`components/Button`].
Firstly I had in my mind to store the data in the localStorage or sessionStorage and interact with them while clicking on the buttons and removing the boxes then I changed my mind and made it easier. 

[`Button`]s' functionality uses the type of the pet to filter the array and show the same specie. Every time you click on button you will get the full length of data. (I did it on purpose).

[`Box`]s' uses a logic where I remove the previous boxes which specific box is being clicked Here there are filtered by the index. The boxes are alphabetically sorted.





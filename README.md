
# Pokedex

![shocked_pikachu](https://imgur.com/oxGPnND.png)

Your mission is to be the very best... 🎵 like no one ever was 🎵....at making a Pokémon manager (a *Pokédex* if you will).

## Learning Objectives

- Make a Full CRUD App

## Prerequisites

- JavaScript
- Node / Express
- HTML / CSS
- MongoDB / Mongoose

---

## Getting Started

All you are given is a `pokemon.js` file that has all the raw data for 151 Pokémon (it's over 50,000 lines of code). 
	- **TIP:** You can render this as JSON in your browser. 
	- If you decide to check it out in your code editor, don't click on or open this file unless you are prepared to wait for it to load. It is a **HUGE** file.

It is up to you how you want to build your app: 
	- What order you want to use to do things.
	- What kind of design flow your app will have.
	- Where you put your delete button.
	- What parts of the Pokémon data your pages will display.


## MVP Requirements

To reach MVP (Minimum Viable Product), your app needs to have:

1. An index page that displays a bunch of Pokémon images	
1. Separate show pages for each Pokémon
1. The ability to add a new Pokémon
1. The ability to edit existing Pokémon
1. The ability to delete Pokémon
1. Some nice styling


## Setting Up

1. All work should be done inside the given `pokedex` folder inside `student_labs`

1. Your app should follow the MVC format - Models, Views and *Controllers*
	- Controllers are your routes for now so you won't actually need a `controllers` folder as all your routes will be in the `server.js`

## Routes

Your app should use RESTful routes:

- Index
  - GET `/pokemon`<br>
- New
  - GET `/pokemon/new`<br>
- Show
  - GET `/pokemon/:id`<br>
- Edit
  - GET `/pokemon/:id/edit`<br>
- Create
  - POST `/pokemon`<br>
- Update
  - PUT `/pokemon/:id`<br>
- Destroy
  - DELETE `/pokemon/:id`<br>


### ✨ Need a Jumpstart? ✨ 

<details><summary><strong>CLICK HERE for server.js starter code</strong></summary>

```js
const express = require('express');
const app = express();

const Pokemon = require('../models/pokemon.js');

// INDEX
app.get('/', (req, res) => {
	res.render('index.ejs', { data: Pokemon });
});

// SHOW
app.get('/:id', (req, res) => {
    res.render('show.ejs', { data: Pokemon[req.params.id] });
});
```

</details>

<br>

## Data - How to Use It & What to Display

The `pokemon.js` file is massive and there is a ton of data to parse through. You need not display **all of it** on your pages. 

On your Index page, you can just render the images.

On your Show page, here are some suggestions for what to display:

- The pokemon's name
- The image of the pokemon
- An unordered list of the Pokemon's types (eg. water, poison, etc).
- The pokemon's stats for HP, ATTACK, and DEFENSE.



## Style Your App

Try and make your app look and respond wel with static assets
	- Set up a public folder and add some css, js)-- consider using some jQuery!


### Need some style inspiration?
These are screenshots from what other students have done to their Pokedex:

<details>
<summary>Example 1</summary>

![](https://imgur.com/MZ361IP.png)

![](https://imgur.com/65HTgw1.png)
</details>

<details>
<summary>Example 2</summary>

![](https://imgur.com/XsaaJ2x.png)

![](https://imgur.com/zppz3ev.png)
</details>

<details>
<summary>Example 3</summary>

![](https://imgur.com/ZRFfwgR.png)

![](https://imgur.com/gEOi0KX.png)
</details>


## Commits

- The order of your commits this time does not matter, but refer back to the MVP to make sure that you're meeting all of the requirements. 

- Make your commits **as you complete the work**, not all at once in the end! 

Here are some Sample Commits for inspiration/guidance:

<details><summary><strong>Click to see Commits:</strong>:</summary>

<hr>
✍️ "Server is working and displays a plain index page"
<hr>


<hr>
✍️ "Displays a bunch of Pokémon images on the index".
<hr>

<hr>
✍️ "Has separate show pages for each Pokémon".
<hr>

<hr>
✍️ "Has the ability to add a new Pokémon".
<hr>

<hr>
✍️ "Has the ability to edit existing Pokémon".
<hr>

<hr>
✍️ "Has the ability to delete Pokémon".
<hr>

<hr>
✍️ "The app uses RESTful routing, all seven RESTful routes".
<hr>

<hr>
✍️ "View templates are complete".
<hr>

<hr>
✍️ "Static assets included (CSS) and styled app".
<hr>

</details>

<hr>

## Deliverables

- A Pokedex app that meets all the MVP requirements outlined at the beginning of this markdown.

## Technical Requirements

- Your app MUST run without syntax errors. If there are errors you can't solve, comment them out and leave a comment above explaining what is wrong

## Submission Guidelines

- Need a reminder on how to submit homework? Take a look at the [wiki guide](https://git.generalassemb.ly/seraficaj/SEIR-Renaissance/wiki/Homework-Submission)
- Make sure you push all your work up and submit to Google Classroom!

---

*Copyright 2019, General Assembly Space. Licensed under [CC-BY-NC-SA, 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)*

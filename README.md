<div id='top'>

<h1 align="center">🍺 Beer Collection</a></h1>
<p align="center">A web application that can track customers' beer collection.</p>

![Application screen](https://raw.githubusercontent.com/dropecosta/beer-collection/41ab05eba52df19b538cb417008ae3a2575fd5f9/public/home.png)
<br /><br />
![Detailed view screen](https://raw.githubusercontent.com/dropecosta/beer-collection/41ab05eba52df19b538cb417008ae3a2575fd5f9/public/details.png)
<br /><br />
![Add new beer screen](https://raw.githubusercontent.com/dropecosta/beer-collection/master/public/addbeer.png)

### Build with

![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)

### Features (Requirements)

- [x] An overview of bottles in the collection (flexbox or grid layout);
- [x] Detailed view;
- [x] Possibility to add new bottles;
- [x] You can use a remote API (https://punkapi.com/documentation/v2 or similar) to fill in additional data;
- [x] Sorting in list view (Sort by name, type, year, etc.);
- [x] Filtering in list view (filter on type, year, etc.);
- [x] Add the user's comment / notes / rating;
- [x] Save entries on the device.


### Component Description

BeerList component:
- Fetch the data from Punk API;
- Contains logic to filter results;
- Display 'loading' message while data is not yet available;

BeerCard component:
- Display information about the beers;
- Title and subtitle formatting (truncate) according to available space;
- Opens item details modal when clicking on the button that appears with the mouseHover event;

BeerDetails component: 
- Gather detailed information about the item;
- Contains logic to handle comments and rating;

CommentsSection component:  
- Add the functionality to rate the beer select the amount of stars/rating and write a comment;
- Saves information on the user's device through the localStorage API

BeerInfo component: 
- Gathers detailed information components and comments about the item;
- Contains logic to handle comments and rating;

Navbar component:
- Header with application title, search bar;
- Contains logic to search items by name;
- Button and logic for adding a new item to the list;
- Button and logic for ascending/descending sorting;
- Buttons for filtering by alcoholic graduation and by bitterness level;

FilterList component
- Displays the UI for filtering items;

Searchbar component
- Displays the UI for search items by name;

Footer component:
- Displays the UI with signature of author and API information;


### Available Scripts

In the project directory, you can run:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Runs the test watcher in an interactive mode:

```bash
npm test
```
All components come with the unit test file passing successfully.
![unit tests](https://github.com/dropecosta/beer-collection/assets/13908414/cfe6ebaa-9c0d-4d3b-bdac-159c03276f49)


All components have their unit test file successfully passing in the respective component folder.
<br /><br />
<a href='#top'>🔼 Back to top</a>

---

Developed with 🧡 by Pedro Reis | dropecosta@gmail.com

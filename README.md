<div id='top'>

<h1 align="center">🍺 Beer Collection</a></h1>
<p align="center">A web application that can track customers' beer collection. This application is part of a challenge proposed by IMPACT Commerce.</p>

![Application screen](https://github.com/dropecosta/beer-collection/assets/13908414/66eeb5da-d0d3-4b0d-9206-849de833f959)
<br /><br />
![Detailed view screen](https://github.com/dropecosta/beer-collection/assets/13908414/9b752c56-bd32-40a8-8dd4-c85a0258fb55)
<br /><br />
![Add new beer screen](https://github.com/dropecosta/beer-collection/assets/13908414/6496d0be-3d2a-460b-bb94-259f91520500)

### Build with

![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)

### Features (Requirements)

- [x] An overview of bottles in the collection (flexbox or grid layout)
- [x] Detailed view
- [x] Possibility to add new bottles
- [x] You can use a remote API (https://punkapi.com/documentation/v2 or similar) to fill in
additional data

Inspiration for functionality if you have time:
- [x] Sorting in list view (Sort by name, type, year, etc.).
- [x] Filtering in list view (filter on type, year, etc.).
- [x] Add the user's comment / notes / rating.
- [x] Save entries on the device.

Your solution will be evaluated on the following:
• Code quality
• Code architecture and organization
• Does the solution work?
• Does the layout work on both phone and desktop?
• Implementing your own creative ideas

Rules:
• Use NextJS to build the web-app.
• You are free to spend as much time as you want.
• It must be clearly noted if there are parts of the code you have not written yourself.
• You may want to use a build-setup - this setup is not included in the assessment.
Please supply documentation for how to run the app (a CLI command like “npm start”
or similar is fine).
• Your solution must be handed in as a git repository (if private on github, please reach
out to us, for who to add to the repo).
• Add a readme file to the root of the project, explaining your architecture
considerations, your priorities and whatever else you think could be important for us to
know or pay attention to.
• Feel free to substitute the “Beer collection” and API with something else

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


All components come with the unit test file passing successfully.
<br /><br />
<a href='#top'>🔼 Back to top</a>

---

Developed with 🧡 by Pedro Reis | dropecosta@gmail.com

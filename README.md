# React Fitness

A small fitness community site built with React. Users log workouts, post updates to a community feed, and compete on a leaderboard ranked by calories and minutes.

## Features

- Create, edit, and delete workouts and community posts
- Search posts
- Leaderboards by calories burned and minutes trained
- Client-side routing with React Router, global state with Easy Peasy

## Stack

React 18, React Router 6, Easy Peasy, Axios, date-fns. Data is served from `data/db.json` by [json-server](https://github.com/typicode/json-server), which stands in for a backend.

## Run it

```bash
npm install
npx json-server -p 3500 -w data/db.json   # mock API on port 3500
npm start                                 # app on http://localhost:3000
```

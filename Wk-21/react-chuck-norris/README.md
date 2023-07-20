# Chuck Norris Jokes

### Getting Started

1. Fork this repo and `git clone` it down to your computer
1. Install dependences with `npm i`
1. Start the `vite` server with `npm run dev`

---

### Technical Requirements

- When the app mounts, it should fetch and render joke categories from the [Chuck Norris API](https://api.chucknorris.io).
- When a category is clicked, your app should visually show the active category and fetch and render a random joke from that category.
- The user should be able to click a button to load another joke from the same category.

### API

This Chuck Norris API is free and open so you won't need an account or an api key.

The two API endpoints you need are:

- https://api.chucknorris.io/jokes/categories
  To get a list of all categories
- https://api.chucknorris.io/jokes/random?category=CATEGORY
  To get a random joke in a category

---

### Hints

One way to implement this involves an event handler and two `useEffect`s.

- One `useEffect` runs on mount and loads the categories
- Another `useEffect` runs on mount and loads a random joke from the active category

Follow the [_Thinking in React_](https://react.dev/learn/thinking-in-react) steps and break things down into small components. 

This app's usage of `useState`s and `useEffects` will be easier to reason about if you split things up into small, (relatively) isolated components.

---

### Extensions

- Check your app to see if you have a bug similar to the gif below where multiple clicks in quick succession fires off a lot of fetch requests which all try to load their jokes when they resolve. How would you fix it?
  ![](https://i.imgur.com/rAEqJkF.gif)

- Add a loading spinner or text while the user waits for the categories and the random joke to appear.

---

### Preview

https://sei-react-norris.netlify.app

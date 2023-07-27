# react-testing

## Set up

1. Fork this repo and `git clone` it down to your computer
2. Install dependences with `npm i`
3. Add [Vitest](https://vitest.dev/) and [React Testing Library](https://testing-library.com/)

## Part 1

Add tests for the [`Forecast`](./src/components/Forecast) component, e.g.

- Day, conditions and emojis correctly shown
- Units correctly shown for temperature and wind
- Heatwave warning correctly shown
- Strong wind warning correctly shown

## Part 2

1. Add tests for the [`Product`](./src/components/Product) component, e.g.
   - Product name, description, image correctly displayed
   - Buy now button
   - Price shown with dollar sign
   - On sale products have badge and show sale price
   - Not on sale products don't have badge and show normal price
2. Add tests for the [`Dog`](./src/components/Dog) component, e.g.
   - Dog name and image correctly displayed
   - Average height and weight correctly calculated
   - Height and weight have units shown

## Part 3

Add tests for the [`TodoItem`](./src/components/TodoItem) and the [`TodoList`](./src/components/TodoList) components:

- Todo items correctly shown
- Adding todo item (mock the `POST` request)
- Deleting todo item (mock the `DELETE` request)
- Marking todo item as done (mock the `PATCH` request)

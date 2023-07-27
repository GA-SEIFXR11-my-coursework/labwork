// https://testing-library.com/docs/queries/about
// https://github.com/testing-library/jest-dom
// https://testing-library.com/docs/react-testing-library/api
// https://jestjs.io/docs/tutorial-react
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom'
import MyComponent from './MyComponent';

// 'test' and 'it' are interchangeable
test('says "hello"', () => {
  render(<MyComponent />);
  expect(screen.getByText('hello')).toBeInTheDocument();
})

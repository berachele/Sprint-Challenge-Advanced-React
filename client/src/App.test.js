import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render } from '@testing-library/react'
import "@testing-library/jest-dom/extend-expect"

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test("If header Women's World Cup: Google Searches is on document", async() => {
  const {findByTestId} = render(<App/>);
  const showHeader = await findByTestId(/header/i);
  // console.log(showHeader)
  expect(showHeader).toBeInTheDocument();
})

// test("we can click dark mode button", () => {
//   const {getByTestId} = render(<App/>);
//   const button = getByTestId(/button/i)
//   fireEvent.click(button)
//   expect().toBe();
// })

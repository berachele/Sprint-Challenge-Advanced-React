import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {render, fireEvent} from "@testing-library/react"

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test("If header 'Women's World Cup: Google Searches' is on document", () => {
  const {getByText} = render(<App/>);
  const showHeader = getByText(/Women's World Cup: Google Searches/i);
  console.log(showHeader)
  expect(showHeader).toBeVisible();
})


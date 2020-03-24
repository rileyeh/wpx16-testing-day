import React from  'react'
import { render, fireEvent } from '@testing-library/react'
import App from '../App'
import toTwoDecimals from '../utils/toTwoDecimals' //this is just a plain js function that i wrote

//just a super simple example for syntax
test('renders', () => {
    render(<App />)
})

//////boilerplate test
test('renders submit button', () => {
    //getByText will look at the text between two jsx tags
    const { getByText } = render(<App />);
    const button = getByText('submit');
    expect(button).toBeInTheDocument();
  });
///////////

test('input works', () => {
    //getByPlaceholderText will look at the placeholder set on inputs in the jsx of your component
    const { getByPlaceholderText } = render(<App />)
    const input = getByPlaceholderText('color')
    fireEvent.change(input, { target: { value: 'riley' } })
    expect(input.value).toBe('riley')
})

test('two decimals works', () => {
    //this is the plain js function, just expecting an output from the given input
    expect(toTwoDecimals(1.111111)).toBe(1.11)
})
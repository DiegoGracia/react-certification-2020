import React from 'react';
import {screen, render} from '@testing-library/react'
import NavBar from './index.jsx'

test('parametro que recibe mi navbar',() => {
    render(<NavBar/>) 
    let response = screen.getByPlaceholderText(/Wizeline/i)
    expect(response).toBeInTheDocument()
})

test('render nav bar', () => {
    render(<NavBar/>);

    const result = screen.getByRole('navigation')
    expect(result).toBeInTheDocument()
    expect(result).toHaveClass("flex justify-between bg-blue-500 pb-4")
    expect(result).toBeVisible()
})
import {fireEvent, render,screen} from '@testing-library/react'
import ColorButton from './ColorButton'

beforeEach(() =>{
    render(<ColorButton/>)
})

test('button is rendered', () => {
    //render(<ColorButton/>)

    //find an element with role of button (tag)
    const colorButton = screen.getByRole("button")
    expect(colorButton).toBeInTheDocument()
})

test('button has text as Change Color', () => {
    //render(<ColorButton/>)
    const textOnButton = screen.getByRole("button")
    expect(textOnButton.textContent).toBe("Change Color to blue");
})

test('button has backgroundColor as red', () => {
    //render(<ColorButton/>)
    const colorOfButton = screen.getByRole("button")
    expect(colorOfButton).toHaveStyle({backgroundColor : 'red'})
})

test('button is clicked and color changed to blue', () => {
    //render(<ColorButton/>)
    const newColorButton = screen.getByRole("button")
    fireEvent.click(newColorButton)
    expect(newColorButton).toHaveStyle({backgroundColor : 'blue'})
})

//test case for toggle

test('checkbox is rendered', () => {
    const checkbox = screen.getByRole("checkbox")
    expect(checkbox).toBeInTheDocument()
})

// test('checkbox has label as Disable Button', () => {
//     const checkboxText = screen.getByTitle("lable1")
//     expect(checkboxText).toBe("Disable Button");
// })

test('checkbox is initially unchecked', () => {
    const checkboxChecked = screen.getByRole("checkbox")
    expect(checkboxChecked).not.toBeChecked()
})    

test('checkbox disabled button on first click & enables on second click', () => {
    const checkbox = screen.getByRole("checkbox")
    const button = screen.getByRole("button")

    fireEvent.click(checkbox)
    expect(button).toBeDisabled()

    fireEvent.click(checkbox)
    expect(button).toBeEnabled()
})
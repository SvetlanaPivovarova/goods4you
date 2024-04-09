import {render, screen, fireEvent} from "@testing-library/react";

import Button from "../components/UI/atoms/button";

const buttonName = 'Say Hello!';
const buttonColor = 'primary';
const buttonSize = 'large';

const clickButton = jest.fn()
describe('Button component', () => {
    test('Button has the name', () => {
        render(<Button color={buttonColor} size={buttonSize} name={buttonName} />);
        expect(screen.getByText('Say Hello!')).toBeInTheDocument()
    });
    test('Button onClick works', () => {
        render(<Button color={buttonColor} size={buttonSize} name={buttonName} onClick={clickButton} />);
        fireEvent.click(screen.getByText('Say Hello!'))
        expect(clickButton).toHaveBeenCalled()
    });
})
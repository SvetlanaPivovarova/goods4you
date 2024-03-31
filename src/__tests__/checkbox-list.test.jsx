import {render, screen} from "@testing-library/react";
import {describe, expect, test} from '@jest/globals';
import CheckboxList from "../components/UI/molecules/checkbox-list";

const data = ['category1', 'category2'];

const setData = jest.fn()

describe('List component', () => {
    test('Checkbox list renders', () => {
        render(<CheckboxList items={data} setList={setData} />)
        expect(screen.getByRole('list')).toBeInTheDocument()
        expect(screen.getByText('category1')).toBeInTheDocument()
    });
    test('Checkbox list renders without data', () => {
        render(<CheckboxList setList={setData} />)
        expect(screen.queryByRole('list')).toBeInTheDocument();
    });
    test('Checkbox snapshot', () => {
        const list = render(<CheckboxList items={data} setList={setData} />);
        expect(list).toMatchSnapshot();
    })
})
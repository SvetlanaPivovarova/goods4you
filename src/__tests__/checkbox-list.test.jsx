import {render, screen} from "@testing-library/react";
import {describe, expect, test} from '@jest/globals';
import CheckboxList from "../components/UI/molecules/checkbox-list";

const data = ['category1', 'category2'];

describe('List component', () => {
    test('Checkbox list renders', () => {
        render(<CheckboxList items={data} />)
        expect(screen.getByRole('list')).toBeInTheDocument()
        expect(screen.getByText('category1')).toBeInTheDocument()
    });
    test('Checkbox list renders without data', () => {
        render(<CheckboxList />)
        expect(screen.queryByRole('list')).toBeInTheDocument();
    })
})
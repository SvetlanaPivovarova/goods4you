import {render, screen, fireEvent} from "@testing-library/react";

import SearchForm from "../components/UI/molecules/search-form";

const setSearch = jest.fn()

describe('Search form', () => {
    test('Renders Search form', () => {
        render(<SearchForm setProductSearch={setSearch} />);
        expect(screen.getByPlaceholderText('Search by title')).toBeInTheDocument();
    });
    test('setSearch works', () => {
        render(<SearchForm setProductSearch={setSearch} />);
        fireEvent.submit(screen.getByRole('button'));
        expect(setSearch).toBeTruthy();
    })
})
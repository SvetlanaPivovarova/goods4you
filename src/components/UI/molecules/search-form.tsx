import Button from "../atoms/button";
import React, {useState} from "react";

type SearchForm = {
    setProductSearch: (search: string) => void
}

function SearchForm({setProductSearch}: SearchForm) {
    const [search, setSearch] = useState('')
    function handleSearch(event:  React.SyntheticEvent) {
        event.preventDefault();
        setProductSearch(search)
    }

    function handleChange(event:  React.SyntheticEvent) {
        setSearch(event.target.value.trim())
    }

    return (
        <>
            <form className="search-form">
                <input
                    className="text-input"
                    type={"text"}
                    placeholder={"Search by title"}
                    onChange={handleChange}
                />
                <Button color={"primary"} size={"s"} name={"Search"} onClick={handleSearch} isVisible={true} />
            </form>
        </>
    )
}

export default SearchForm
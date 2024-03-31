import Button from "../atoms/button";
import {useState} from "react";

function SearchForm({setProductSearch}) {
    const [search, setSearch] = useState('')
    function handleSearch(event) {
        event.preventDefault();
        setProductSearch(search)
    }

    function handleChange(event) {
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
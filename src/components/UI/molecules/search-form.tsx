import Button from "../atoms/button";

function SearchForm() {
    return (
        <>
            <form className="search-form">
                <input
                    className="text-input"
                    type={"text"}
                    placeholder={"Search by title"}
                />
                <Button color={"primary"} size={"s"} name={"Search"} />
            </form>
        </>
    )
}

export default SearchForm
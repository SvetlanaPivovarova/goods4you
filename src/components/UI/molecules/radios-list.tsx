import Radiobutton from "../atoms/radiobutton";

function RadiosList(props: object) {
    const { categories } = props

    const listItems = categories.map(item =>
        <li key={item.id}>
            <Radiobutton name={item.name} />
        </li>
    )
    return <ul className="radios-list">{listItems}</ul>;
}

export default RadiosList
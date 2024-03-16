import Checkbox from "./UI/atoms/checkbox";

function CheckboxList(props: object[]) {
    const { categories } = props

    const listItems = categories.map(item =>
        <li key={item.id}>
            <Checkbox name={item.name} />
        </li>
    )
    return <ul className="checkbox-list">{listItems}</ul>;
}

export default CheckboxList
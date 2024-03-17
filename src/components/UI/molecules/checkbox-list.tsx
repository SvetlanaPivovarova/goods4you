import Checkbox from "../atoms/checkbox";

function CheckboxList(props: object[]) {
    const { items } = props

    const listItems = items.map(item =>
        <li key={item.id}>
            <Checkbox name={item.name} />
        </li>
    )
    return <ul className="checkbox-list">{listItems}</ul>;
}

export default CheckboxList
import Checkbox from "../atoms/checkbox";

function CheckboxList(props: string[]) {
    const { items } = props

    const listItems = items.map(item =>
        <li key={item.id}>
            <Checkbox name={item} />
        </li>
    )
    return <ul className="checkbox-list">{listItems}</ul>;
}

export default CheckboxList
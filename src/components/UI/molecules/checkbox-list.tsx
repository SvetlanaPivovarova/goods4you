import Checkbox from "../atoms/checkbox";

type CheckboxListProps = {
    items:
        string[]
}

function CheckboxList(props: CheckboxListProps) {
    const { items } = props

    const listItems = items.map(item =>
        <li key={item}>
            <Checkbox name={item} />
        </li>
    )
    return <ul className="checkbox-list">{listItems}</ul>;
}

export default CheckboxList
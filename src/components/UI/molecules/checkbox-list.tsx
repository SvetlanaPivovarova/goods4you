//import Checkbox from "../atoms/checkbox";
import {useState} from "react";

type CheckboxListProps = {
    items: string[],
    setList: () => void
}

function CheckboxList(props: CheckboxListProps) {
    const { items, setList } = props

    const [checkedState, setCheckedState] = useState(
        new Array(items.length).fill(false)
    );

    const handleOnChange = (position: number) => {
        const updatedCheckedState = checkedState.map((item, i) =>
            i === position ? !item : item
        );

        setCheckedState(updatedCheckedState);

        function totalArray(): string[] {
            const res: string[] = []
            updatedCheckedState.forEach((item, index: number) => {
                if (item === true) {
                    res.push(items[index])
                }
            })
            return res
        }

        const list = totalArray()

        setList(list)
    };

    const listItems = items.map((item, index: number) =>
        <li key={index}>
            <label className="checkbox-default">
                {item}
                <input
                    id={`checkbox-${index}`}
                       type="checkbox"
                    value={item}
                    checked={checkedState[index]}
                    name={item}
                    onChange={() => handleOnChange(index)} />
                <span className="checkbox-default__label"></span>
            </label>
        </li>
    )
    return <ul className="checkbox-list">{listItems}</ul>;
}

export default CheckboxList
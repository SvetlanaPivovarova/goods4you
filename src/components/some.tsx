import { useSelector, useDispatch } from "../services/types/types-store";
import { RootState } from "../services/store";
import { increment, decrement } from "../services/slices/counter-slice";

export function Counter() {
    const count = useSelector((state: RootState) => state.counter.value)
    const dispatch = useDispatch()

    return (
        <div>
            <div>
                <button
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}
                    >
                    Increment
                </button>
                <span>{count}</span>
                <button
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement())}
                    >
                    Decrement
                </button>
            </div>
        </div>
    )
}
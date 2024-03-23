import {useAppDispatch} from "../hooks/redux";
import {useEffect} from "react";
import {fetchUsers} from "../store/reducers/ActionCreators";
import Posts from "./UI/posts";
export function Counter() {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchUsers())
    }, [ ])
    return (
        <>
            <Posts />
        </>

    )
}
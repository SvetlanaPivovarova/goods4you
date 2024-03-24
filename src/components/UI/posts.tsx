import {categoriesAPI} from "../../services/CategoriesService";


const Posts = () => {

    const {data: posts, isLoading, error} = categoriesAPI.useFetchAllCategoriesQuery('')
    return (
        <div>
            {isLoading && <p>Loading...</p>}
            {error && <p>Error</p>}
            {posts && posts.map(post =>
                <p key={post}>{post}</p>
            )}
        </div>
    )
}

export default Posts
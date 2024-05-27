import NewPost from "./NewPost"
import Post from "./Post"
import SearchPost from "./SearchPost"
import { useEffect } from 'react';
import { useStoreActions, useStoreState } from 'easy-peasy';

const Community = () => {

    const posts = useStoreState((state) => state.posts);
    const search = useStoreState((state) => state.search);
    const setSearch = useStoreActions((actions) => actions.setSearch);
    const setSearchResults = useStoreActions((actions) => actions.setSearchResults);
    const searchResults = useStoreState((state) => state.searchResults);

    useEffect(() => {
        const filteredResults = posts.filter(post => (
            (post.body).toLowerCase().includes(search.toLowerCase()) || 
            (post.title).toLowerCase().includes(search.toLowerCase())
        ))
    
        setSearchResults(filteredResults.reverse());
    }, [posts, search, setSearchResults])

    return (
        <div className="Home">

            <SearchPost
                search={search}
                setSearch={setSearch}
            />

            <br />
            
            <NewPost/>

            <br />

            {searchResults.map((post) => (
                <Post post={post} key={post.id} />
            ))}

        </div>
    )
}

export default Community
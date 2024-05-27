const SearchPost = ({search, setSearch}) => {
    return (
        <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="search">Search Posts</label>
            <input 
                id="search"
                type="text"
                placeholder="Search Posts"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
        </form>
    )
}

export default SearchPost
import React from 'react'

const SearchBar = ({ setSearch }: { setSearch: React.Dispatch<React.SetStateAction<string>> }) => {
    return (
        <>
        <input type="search" placeholder="Search Games" className="" onChange={(event) => setSearch(event.target.value)} />
        </>
    )
}


export default SearchBar;
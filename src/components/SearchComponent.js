import {useState} from 'react'

const SearchComponent = ({onSubmit}) => {
    const [searchQuery, setSearchQuery] = useState()
    const [searchDate, setDate] = useState()

    const handleSubmit = (e) => {
        e.preventDefault()
        onSubmit(searchDate, searchQuery)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type='text' value=searchQuery onChange={(e) =>setSearchQuery(e.target.value)}/>
            <input type='date' value=searchDate onChange={(e) => setDate(e.target.value)}/>
            <button type='submit'>Search</button>
        </form>
    )
}

export default SearchComponent;
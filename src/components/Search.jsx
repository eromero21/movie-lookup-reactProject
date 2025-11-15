import { useState } from 'react';

function Search({ onSearch }) {
    const [query, setQuery] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!query.trim()) {
            return;
        }
        onSearch(query.trim());
    }

    return (
        <form className="search-bar" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Search for a movie.."
                value={query}
                onChange={e => setQuery(e.target.value)}
            />
            <button type="submit">Search</button>
        </form>
    );

}
export default Search;
import React, { useContext, useRef } from 'react';
import { Link } from 'react-router-dom';
import commonContext from '../../contexts/common/commonContext';
import Data from '../../data/data';
import useOutsideClose from '../../hooks/useOutsideClose';
import useScrollDisable from '../../hooks/useScrollDisable';

const SearchBar = () => {

    const { isSearchOpen, toggleSearch, searchResults, setSearchResults } = useContext(commonContext);

    const searchRef = useRef();

    // closing the SearchBar
    const closeSearch = () => {
        toggleSearch(false);
        setSearchResults([]);
    };

    useOutsideClose(searchRef, closeSearch);

    useScrollDisable(isSearchOpen);


    // handling Search
    const handleSearching = (e) => {
        const searchedTerm = e.target.value.toLowerCase().trim();

        const updatedSearchResults = Data.filter(item => ((item.title)+(item.Document)).toLowerCase().includes(searchedTerm));

        searchedTerm === '' ? setSearchResults([]) : setSearchResults(updatedSearchResults);
    };


    return (
        <>
            {
                isSearchOpen && (
                    <div id="searchbar" className="backdrop">
                        <div className="searchbar_content" ref={searchRef}>
                            <div className="search_box">
                                <input
                                    type="search"
                                    className="input_field"
                                    placeholder="Search for Doctor..."
                                    onChange={handleSearching}
                                />
                               
                            </div>

                            {
                                searchResults.length !== 0 && (
                                    <div className="search_results">
                                        {
                                            searchResults.map(item => {
                                                const { id, title,Document, images } = item;
                                                return (
                                                    <Link
                                                        to={`${"/Doctor-detail/"}${id}`}
                                                        onClick={closeSearch}
                                                        key={id}
                                                    >
                                                        <img src={images} alt='dr_img' />
                                                        <strong className='doctor-title'>{title} :</strong> {Document}
                                                    </Link>
                                                );
                                            })
                                        }
                                    </div>
                                )
                            }
                        </div>
                    </div>
                )
            }
        </>
    );
};

export default SearchBar;

import React, {useEffect, useState} from "react";
import TopBar from "../../defaultDiv/js/TopBar";
import SearchResult from "./SearchResult";
import '../css/SearchResult.css';
import SearchService from "../../services/SearchService";
function SearchResultRouter({match}) {
    const [searchResults, setResults]  = useState(match.params.searchKeyword);

    let [selectedAllergy, setSelectedAllergy] = useState([]);

    // useEffect(() => {
    //     setResults(props);
    //     console.log(searchResults.searchResults);
    // }, [props]);

    useEffect(() => {
        const searchProduct = match.params.searchKeyword;
        setResults(searchProduct);
        console.log(searchProduct);
    });

    return (
        <div className="searchResultRouter">
            <TopBar searchResults = {searchResults}/>
            <SearchResult searchResults = {searchResults}/>
        </div>

    );
}

export default SearchResultRouter;
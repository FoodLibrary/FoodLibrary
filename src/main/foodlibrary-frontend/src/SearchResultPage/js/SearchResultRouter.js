
import React, {useEffect, useState} from "react";
import TopBar from "../../defaultDiv/js/TopBar";
import SearchResult from "./SearchResult";
import '../css/SearchResult.css';

function SearchResultRouter(props) {
    const [searchResults, setResults]  = useState(props);

    useEffect(() => {
        setResults(props);
        console.log(searchResults.searchResults);
    }, [props]);


    return (
        <div className="searchResultRouter">
            <TopBar/>

        </div>

    );
}

export default SearchResultRouter;
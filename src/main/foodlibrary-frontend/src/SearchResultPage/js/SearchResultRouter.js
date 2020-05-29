import React, {useEffect, useState} from "react";
import TopBar from "../../defaultDiv/js/TopBar";
import SearchResult from "./SearchResult";
import '../css/SearchResult.css';
import SearchService from "../../services/SearchService";

function SearchResultRouter({match}) {
    const [searchResults, setResults] = useState(match.params.searchKeyword);
    const [selectedAllergy, setSelectedAllergy] = useState(match.params.allergyInfo);

    // useEffect(() => {
    //     setResults(props);
    //     console.log(searchResults.searchResults);
    // }, [props]);

    useEffect(() => {
        const searchProduct = match.params.searchKeyword;
        setResults(searchProduct);
        const selectedAllergy = match.params.allergyInfo;
        setSelectedAllergy(selectedAllergy);

        console.log(searchProduct);
    });

    return (
        <div className="searchResultRouter">
            <TopBar searchResults={searchResults} selectedAllergy={selectedAllergy}/>
            <SearchResult searchResults={searchResults} selectedAllergy={selectedAllergy}/>
        </div>

    );
}

export default SearchResultRouter;
import React, {useEffect, useState} from "react";
import TopBar from "../../defaultDiv/js/TopBar";
import SearchResult from "./SearchResult";
import '../css/SearchResult.css';
import SearchService from "../../services/SearchService";

function SearchResultRouter({match}) {
    const [searchResults, setResults] = useState(match.params.searchKeyword);
    const [selectedAllergy, setSelectedAllergy] = useState(match.params.allergyInfo);
    const [selectedDisease, setSelectedDisease] = useState(match.params.diseaseInfo);
    const [selectedCategory, setSelectedCategory] = useState(match.params.categoryInfo);

    useEffect(() => {
        const searchProduct = match.params.searchKeyword;
        setResults(searchProduct);

        const selectedAllergy = match.params.allergyInfo;
        setSelectedAllergy(selectedAllergy);
        const selectedDisease = match.params.diseaseInfo;
        setSelectedDisease(selectedDisease);

        const selectedCategory = match.params.categoryInfo;
        setSelectedCategory(selectedCategory);

    });

    return (
        <div className="searchResultRouter">
            <TopBar searchResults={searchResults} selectedAllergy={selectedAllergy} selectedDisease={selectedDisease} selectedCategory={selectedCategory}/>
            <SearchResult searchResults={searchResults} selectedAllergy={selectedAllergy} selectedDisease={selectedDisease} selectedCategory={selectedCategory}/>
        </div>

    );
}

export default SearchResultRouter;
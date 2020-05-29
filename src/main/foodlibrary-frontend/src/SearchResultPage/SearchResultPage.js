import React, {Component} from 'react';
import Topbar from "../defaultDiv/js/TopBar";
import ResultFiltering from "./js/ResultFiltering";
import SearchResult from "./js/SearchResult";


class SearchResultPage extends Component {
    render() {
        return (
            <div>
                <Topbar />
                <ResultFiltering />
                <SearchResult />
            </div>
        );
    }
}

export default SearchResultPage;

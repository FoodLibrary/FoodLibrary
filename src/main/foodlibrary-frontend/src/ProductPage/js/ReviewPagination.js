import React, {useEffect, useState} from 'react';
import {Pagination, PaginationItem, PaginationLink, Row} from "reactstrap";

class ReviewPagination extends React.Component {
    constructor(props) {
        super(props);
        this.state = {pager: {}};
    }

    componentWillMount() {
        if (this.props.items && this.props.items.length) {
            this.setPage(this.props.initial);
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.items !== prevProps.items) {
            this.setPage(this.props.initial);
        }
    }

    setPage(page) {
        var items = this.props.items;
        var pager = this.state.pager;
        if (page < 1 || page > pager.totalPages) {
            return;
        }
        pager = this.getPager(items.length, page, 3);
        var pageOfItems = items.slice(pager.startIndex, pager.endIndex + 1);
        this.setState({pager: pager});
        this.props.onChangePage(pageOfItems);
    }

    getPager(totalItems, currentPage, pageSize) {
        currentPage = currentPage || 1;
        pageSize = pageSize || 10;
        var totalPages = Math.ceil(totalItems / pageSize);
        var startPage, endPage;
        if (totalPages <= 10) {
            startPage = 1;
            endPage = totalPages;
        } else {
            if (currentPage <= 6) {
                startPage = 1;
                endPage = 10;
            } else if (currentPage + 4 >= totalPages) {
                startPage = totalPages - 9;
                endPage = totalPages;
            } else {
                startPage = currentPage - 5;
                endPage = currentPage + 4;
            }
        }

        var startIndex = (currentPage - 1) * pageSize;
        var endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
        var pages = [...Array((endPage + 1) - startPage).keys()].map(i => startPage + i);
        return {
            totalItems: totalItems,
            currentPage: currentPage,
            pageSize: pageSize,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage,
            startIndex: startIndex,
            endIndex: endIndex,
            pages: pages
        };
    }

    render() {
        return (
            <Pagination className="pagination" aria-label="Page navigation example">
                <PaginationItem className={this.state.pager.currentPage === 1 ? 'disabled' : ''}>
                    <PaginationLink first onClick={() => this.setPage(1)} href="#"/>
                </PaginationItem>
                <PaginationItem className={this.state.pager.currentPage === 1 ? 'disabled' : ''}>
                    <PaginationLink previous onClick={() => this.setPage(this.state.pager.currentPage - 1)} href="#"/>
                </PaginationItem>
                {this.state.pager.pages.map((page, index) =>
                    <PaginationItem>
                        <PaginationLink key={index} className={this.state.pager.currentPage === page ? 'active' : ''}
                                        href="#">
                            <a onClick={() => this.setPage(page)}>{page}</a>
                        </PaginationLink>
                    </PaginationItem>
                )}
                <PaginationItem
                    className={this.state.pager.currentPage === this.state.pager.totalPages ? 'disabled' : ''}>
                    <PaginationLink next onClick={() => this.setPage(this.state.pager.currentPage + 1)} href="#"/>
                </PaginationItem>
                <PaginationItem
                    className={this.state.pager.currentPage === this.state.pager.totalPages ? 'disabled' : ''}>
                    <PaginationLink last onClick={() => this.setPage(this.state.pager.totalPages)} href="#"/>
                </PaginationItem>
            </Pagination>
        );
    }
}

export default ReviewPagination;



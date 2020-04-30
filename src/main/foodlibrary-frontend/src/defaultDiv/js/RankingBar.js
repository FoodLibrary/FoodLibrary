import React from 'react';
import {
    ButtonDropdown,
    ButtonGroup,
} from 'reactstrap';
import Button from "react-bootstrap/Button";
import DropdownToggle from "react-bootstrap/DropdownToggle";
import DropdownMenu from "react-bootstrap/DropdownMenu";
import DropdownItem from "react-bootstrap/DropdownItem";
import '../css/RankingBarStyle.css';

export default class RankingBar extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: false
        };
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    render() {
        return (
            <ButtonGroup className={"rankingToggleMenu"}>
                <Button className={"rankingButton"}> 랭킹 </Button>
                <ButtonDropdown addonType="append" isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                    <DropdownToggle caret className={"rankingToggle"}>
                        실시간 검색어 순위
                    </DropdownToggle>
                    <DropdownMenu className={"rankingMenu"}>
                            <DropdownItem> 1. A </DropdownItem>
                            <DropdownItem> 2. B </DropdownItem>
                            <DropdownItem> 3. C </DropdownItem>
                            <DropdownItem> 4. D </DropdownItem>
                            <DropdownItem> 5. E </DropdownItem>
                            <DropdownItem> 6. F </DropdownItem>
                            <DropdownItem> 7. G </DropdownItem>
                            <DropdownItem> 8. H </DropdownItem>
                            <DropdownItem> 9. I </DropdownItem>
                            <DropdownItem> 10. J </DropdownItem>
                    </DropdownMenu>
                </ButtonDropdown>
            </ButtonGroup>
        );
    }
}
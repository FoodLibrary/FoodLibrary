
import React, {useState} from "react";

import TopBar from "../defaultDiv/js/TopBar";
import SignUp from "./SignUp";

function SignUpRouter() {
    const [selectedAllergy, setSelectedAllergy] = useState(["알러지없음"]);
    const [searchResults, setSearchResults] = useState("");
    return (
        <div className="signUpRouter">
            <TopBar searchResults={searchResults} selectedAllergy={selectedAllergy}/>
            <SignUp/>
        </div>

    );
}

export default SignUpRouter;
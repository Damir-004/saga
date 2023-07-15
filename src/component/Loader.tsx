import * as React from "react";
import {CSSProperties} from 'react';
import {BeatLoader} from "react-spinners";

const override: CSSProperties = {
    display: "block",
    borderColor: "red",
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: "1301"

};

function Loader() {
    return (
        <div className="loader">
            <BeatLoader
                color={"#ff084e"}
                loading={true}
                cssOverride={override}
                size={20}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </div>
    );
}

export default Loader;
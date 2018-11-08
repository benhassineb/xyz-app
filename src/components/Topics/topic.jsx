import React from "react";

export const Topic = ({ match }) => {
    if (match && match.params && match.params.id) {
        return <h3>Requested Param: {match.params.id}</h3>
    }
    return <h3>Please select a topic.</h3>;
};



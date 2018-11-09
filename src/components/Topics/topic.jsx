import React from "react";
import Counter from './counter'



export const Components = () => <h3>Requested Param: Components</h3>;
export const PropsVState = () => <h3>Requested Param: Props v. State</h3>;
export const menu = {
    'components': <Components />,
    'props-v-state': <PropsVState />,
    'counter': <Counter />

}
export const Topic = ({ match }) => {
    if (match && match.params && match.params.id) {
        return menu[match.params.id]
    }
    return <h3>Please select a topic.</h3>;
};
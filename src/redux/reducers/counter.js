const counter = (state, action) => {
    switch (action.type) {
        case 'INCREMENT_COUNT':
            return { count: state.count + 1 };
        case 'DECREMENT_COUNT':
            return {  count: state.count - 1 };
        default:
            // The following line guarantees that every action in the KnownAction union has been covered by a case above
            const exhaustiveCheck = action;
    }

    // For unrecognized actions (or in cases where actions have no effect), must return the existing state
    //  (or default initial state if none was supplied)
    return state || {count: 0};
};
export default counter;
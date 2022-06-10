export default (state = [], action) => {

    let newState = state;

    switch (String(action.type).toUpperCase().trim()) {
        case 'ADD':
            newState = [...state, action.newItem];
            break;
        case 'CLEAR':
            newState = [];
            break;
		default:
		    break;   // default returns current state because of "let newState = state"
    }

    return newState;
};

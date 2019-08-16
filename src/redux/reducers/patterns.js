const globalState = {

    pattern: [],
    isLoading: false,
    isFulfilled: false,
    isRejected: false

};


const patterns = (state = globalState, action) => {



    switch (action.type) {
        case 'GET_PATTERN_PENDING':
            return {
                ...state,
                isLoading: true,
                isFulfilled: false,
                isRejected: false,
            };
        case 'GET_PATTERN_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true,
            };
        case 'GET_PATTERN_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFulfilled: true,
                pattern: action.payload.data.result
            };
        case 'DELETE_PATTERN_PENDING':
            return {
                ...state,
                isLoading: true,
                isFulfilled: false,
                isRejected: false,
            };
        case 'DELETE_PATTERN_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true,
            };
        case 'DELETE_PATTERN_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFulfilled: true,
            };
        case 'ADD_PATTERN_PENDING':
            return {
                ...state,
                isLoading: true,
                isFulfilled: false,
                isRejected: false,
            };
        case 'ADD_PATTERN_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true,
            };
        case 'ADD_PATTERN_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFulfilled: true,
            };

        default:
            return state;
    }

}

export default patterns;
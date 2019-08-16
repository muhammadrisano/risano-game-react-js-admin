const globalState = {
    leaderboard: null,
    isLoading: false,
    isFulfilled: false,
    isRejected: false

};


const leaderboards = (state = globalState, action) => {



    switch (action.type) {
        case 'GET_LEADERBOARD_PENDING':
            return {
                ...state,
                isLoading: true,
                isFulfilled: false,
                isRejected: false,
            };
        case 'GET_LEADERBOARD_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true,
            };
        case 'GET_LEADERBOARD_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFulfilled: true,
                leaderboard: action.payload.data.result
            };

        default:
            return state;
    }

}

export default leaderboards;
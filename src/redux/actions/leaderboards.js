import axios from 'axios';
export const getleaderboard = () => {
    return {
        type: 'GET_LEADERBOARD',
        payload: axios.get('http://titaktitak.muhammadrisano.online/leaderboard', {
            headers: { "authorization": "jangan-coba-coba" },
        }),
    };
};
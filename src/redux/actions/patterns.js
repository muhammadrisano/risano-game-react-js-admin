import axios from 'axios';
export const getpattern = () => {
    return {

        type: 'GET_PATTERN',
        payload: axios.get('http://titaktitak.muhammadrisano.online/pattern', {
            headers: { "authorization": "jangan-coba-coba" },
        }),
    };
};
export const deletepattern = (id_pattern) => {
    return {

        type: 'DELETE_PATTERN',
        payload: axios.delete('http://titaktitak.muhammadrisano.online/pattern/' + id_pattern, {
            headers: { "authorization": "jangan-coba-coba" },
        }),
    };
};

export const addpattern = (data) => {
    return {

        type: 'ADD_PATTERN',
        payload: axios.post('http://titaktitak.muhammadrisano.online/pattern', data, {
            headers: { "authorization": "jangan-coba-coba" },
        }),
    };
};
import * as httpRequest from '~/until/httpRequest';

const path = 'users';
export const GetUser = async (username) => {
    try {
        const res = await httpRequest.get(path + username);

        return res.data;
    } catch (error) {
        console.log(error);
    }
};

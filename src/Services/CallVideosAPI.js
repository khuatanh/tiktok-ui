import * as httpRequest from '~/until/httpRequest';

export const CallVideosAPI = async (page = 1, type = 'for-you') => {
    try {
        const res = await httpRequest.get('videos', {
            params: {
                page,
                type,
            },
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};

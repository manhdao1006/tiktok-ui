import * as httpRequest from '~/utils/httpRequest';

export const search = async (q, type = 'less') => {
    // encodeURIComponent mã hóa key user enter để tránh fail

    // XMLHttpRequest
    // Fetch

    try {
        const res = await httpRequest.get('users/search', {
            params: {
                q,
                type,
            },
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};

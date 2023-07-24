import * as request from '~/utils/request';

export const search = async (q, type = 'less') => {
    // encodeURIComponent mã hóa key user enter để tránh fail

    // XMLHttpRequest
    // Fetch

    try {
        const res = await request.get('users/search', {
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

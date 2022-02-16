import { instance } from './api';

export const fetchTags = async (): Promise<string[]> => {
    const result = await instance.get('/tags');
    return result.data.tags;
};

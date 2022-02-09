import { fetchTags } from 'lib/api/tag';
import { selector } from 'recoil';

export const $tags = selector({
    key: 'tags',
    get: () => fetchTags(),
});

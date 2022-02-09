import { atom } from 'recoil';
import { User } from 'types';

export const $user = atom<null | User>({
    key: 'user',
    default: null,
});

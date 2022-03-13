import { createUser, createUserRequest } from 'lib/api/user';
import { atom, selector, selectorFamily } from 'recoil';
import { User } from 'types';

export const $user = atom<null | User>({
    key: 'user',
    default: null,
});

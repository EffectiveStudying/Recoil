import { atom } from "recoil";

export const $currentPageNumState = atom({
    key: 'currentPageNum',
    default: 0
});

export const $currentAuthorState = atom({
    key: 'currentAuthor',
    default: null
});

export const $currentFavoritedState = atom({
    key: 'currentFavorite',
    default: null
});

export const $limitState = atom({
    key: 'limit',
    default: 10
});

export const $currentTagState = atom({
    key: 'currentTag',
    default: null
});

export const $currentMenuState = atom({
    key: 'currentMenu',
    default: 'GlobalFeed'
});
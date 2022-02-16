export type User = {
    email: string;
    token: string;
    username: string;
    bio?: string;
    image?: string;
};

export type Author = {
    username: string;
    bio?: string;
    image?: string
    following: boolean;
}

export type Article = {
    slug: string;
    title: string;
    description: string;
    body: string;
    tagList: string[];
    createdAt: Date;
    updatedAt: Date;
    favorited: boolean;
    favoritesCount: number;
    author: Author;
}
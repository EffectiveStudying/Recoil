export type UserType = {
    username: string,
    bio: string,
    image: string,
    following: boolean
};

export type ArticlesType = {
    articles: ArticleType[],
    articlesCount: number
}

export type ArticleType = {
    slug: string,
    title: string,
    description: string,
    body: string,
    tagList: string[],
    createdAt: string,
    updatedAt: string,
    favorited: boolean,
    favoritesCount: number,
    author: UserType
};

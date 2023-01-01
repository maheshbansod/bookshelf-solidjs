import { BookItem } from "../../types";

type ResultItem = {
    title: string,
    author_name?: string[],
}

export async function searchBooks(query: string) {
    const response = await fetch(
        `https://openlibrary.org/search.json?q=${encodeURI(query)}&fields=title,author_name,first_publish_year&limit=5`
    ).then(r => r.json());
    const result = response.docs as ResultItem[];
    const books: BookItem[] = result.map(({ title, author_name }) => ({
        name: title,
        author: author_name ? author_name.join(', ') : ""
    }));
    return books;
}

import { Accessor, createContext, createEffect, createSignal, JSXElement } from "solid-js"
import { BookItem } from "../../types";
import { getFromLocalStorage, StorageKeys, storeToLocalStorage } from "./localStorage";

type BookContextProps = {
    books: Accessor<BookItem[]>,
    has: (book: BookItem) => boolean,
    add: (book: BookItem) => void,
    remove: (book: BookItem) => void,
}

type BookProviderProps = {
    books?: BookItem[],
    children: JSXElement
}

export const BookContext = createContext<BookContextProps>();

export function BookProvider(props: BookProviderProps) {
    const [books, setBooks] = createSignal(props.books || loadBooks());

    createEffect(() => {
        storeToLocalStorage(StorageKeys.BookList, books());
    });

    const provider: BookContextProps = {
        books,
        has: (book: BookItem) => {
            return !!books().find(bookInShelf => bookInShelf.name === book.name);
        },
        add: (book) => {
            setBooks((books) => {
                return [...books, book];
            })
        },
        remove: (book) => {
            setBooks((books) => {
                return books.filter(b => b !== book);
            })
        }
    };

    return <BookContext.Provider value={provider}>
        {props.children}
    </BookContext.Provider>
}

function loadBooks() {
    return getFromLocalStorage(StorageKeys.BookList) || [];
}
import { Show, useContext } from "solid-js";
import { BookItem } from "../../types";
import { BookContext } from "../utils/BookContext";
import styles from "./BookCard.module.css";

type BookCardProps = {
    book: BookItem
}

export function BookCard(props: BookCardProps) {
    const bookShelf = useContext(BookContext);
    const book = props.book;
    return <div class={styles.BookCard}>
        <div>
            <div class={styles.BookName}>{book.name}</div>
            <div class={styles.BookAuthor}>{book.author}</div>
        </div>
        <div>
            <Show when={!bookShelf?.has(book)} fallback={
                <button type="button" class={`${styles.IconButton} ${styles.RemoveButton}`} onClick={() => bookShelf?.remove(book)}>–</button>
            }>
                <button type="button" class={`${styles.IconButton} ${styles.AddButton}`} onClick={() => bookShelf?.add(book)}>+</button>
            </Show>
        </div>
    </div>
}
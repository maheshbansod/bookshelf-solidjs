import { For } from "solid-js";
import { BookItem } from "../../types";
import { BookCard } from "./BookCard";

type BookListProps = {
    list: BookItem[]
};

export function BookList(props: BookListProps) {
    return <>
        <For each={props.list}>
            {(book) => <div class="my-1">
                <BookCard book={book} />
            </div>}
        </For>
    </>
} 
import { createSignal, Show, useContext } from "solid-js";
import { BookContext, BookProvider } from "./utils/BookContext";
import { AddBooks } from "./AddBooks";
import { BookList } from "./components/BookList";

enum ShelfPage {
    List,
    Add
};

export function BookShelf() {
    const [page, setPage] = createSignal(ShelfPage.List)

    return <BookProvider>
        <header style="display:flex;justify-content: space-between">
            <div>
                <Show when={page() === ShelfPage.List}>
                    Books
                </Show>
                <Show when={page() === ShelfPage.Add}>
                    Add books
                </Show>
            </div>
            <div>
                <Show when={page() !== ShelfPage.Add}>
                    <button type="button" onClick={(_e) => {
                        setPage(ShelfPage.Add);
                    }}>Add books</button>
                </Show>
                <Show when={page() !== ShelfPage.List}>
                    <button type="button" onClick={(_e) => {
                        setPage(ShelfPage.List);
                    }}>Book list</button>
                </Show>
            </div>
        </header>
        <Show when={page() === ShelfPage.List}>
            <BookListPage />
        </Show>
        <Show when={page() === ShelfPage.Add}>
            <AddBooks />
        </Show>
    </BookProvider>
}

function BookListPage() {
    const bookShelf = useContext(BookContext);
    return <BookList list={bookShelf?.books() || []} />;
}
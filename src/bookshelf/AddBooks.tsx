import { createResource, createSignal, For, Show } from "solid-js"
import { SearchBar } from "../components/SearchBar";
import { BookItem } from "../types"
import { BookList } from "./components/BookList";
import { searchBooks } from "./utils/searchBooks";

export function AddBooks() {
    const [searchQuery, setSearchQuery] = createSignal("");

    const [data] = createResource(searchQuery, searchBooks);

    return <>
        <SearchBar onSearch={(query) => setSearchQuery(query)} />
        <div>
            <Show when={!data.loading} fallback={<>Searching...</>} >
                <BookList list={data() || []} />
            </Show>
        </div>
    </>
}
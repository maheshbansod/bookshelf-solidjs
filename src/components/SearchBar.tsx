import { createSignal } from "solid-js"
import styles from './SearchBar.module.css';

type SearchBarProps = {
    onSearch?: (query: string) => any
}

export function SearchBar(props: SearchBarProps) {
    const [input, setInput] = createSignal("");

    return <form class={styles.SearchForm}>
        <input
            type="search"
            value={input()}
            class={styles.SearchBox}
            onInput={e => setInput(e.currentTarget.value)}
        />
        <button type="submit" onClick={(e) => {
            e.preventDefault();
            props.onSearch?.(input())
        }}>Search</button>
    </form>
}
import { BookItem } from "../../types";

export enum StorageKeys {
    BookList = "BookLIst"
}

type StorageSchema = {
    [StorageKeys.BookList]: BookItem[]
}

export function getFromLocalStorage(key: StorageKeys) {
    const raw = localStorage.getItem(key);
    if (raw)
        return JSON.parse(raw) as StorageSchema[typeof key];
}

export function storeToLocalStorage<T extends StorageKeys>(key: T, value: StorageSchema[T]) {
    localStorage.setItem(key, JSON.stringify(value));
}
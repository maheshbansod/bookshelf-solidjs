import type { Component } from 'solid-js';

import styles from './App.module.css';
import { BookShelf } from './bookshelf/BookShelf';

const App: Component = () => {
  return (
    <div class={styles.App}>
      <BookShelf />
    </div>);
};

export default App;

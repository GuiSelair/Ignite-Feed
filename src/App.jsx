
import { Header } from "./components/Header";

import styles from "./App.module.css";
import Post from "./components/Post";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="App">
      <Header/>

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Guilherme Selair"
            content="Salve Salve! Começando mais um post por aqui!"
          />
        </main>
      </div>
    </div>
  )
}

export default App

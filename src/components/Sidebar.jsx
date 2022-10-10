import { PencilLine } from "phosphor-react";

import styles from "./Sidebar.module.css";

export default function Sidebar() {
  return (
    <aside className={styles.aside}>
      <img className={styles.cover} src="https://images.unsplash.com/photo-1604964432806-254d07c11f32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZGV2ZWxvcGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=50" />
    
      <div className={styles.profile}>
        <img className={styles.avatar} src="https://github.com/guiselair.png"/>

        <strong>Guilherme Selair</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20}/>
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}

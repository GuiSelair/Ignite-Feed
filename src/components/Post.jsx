import styles from "./Post.module.css";

export default function Post() {
  return (
    <article className={styles.post}>
      <header>
        <img
          className={styles.avatar}
          src="https://www.github.com/guiselair.png"
        />
        <div className={styles.authorInfo}>
          <strong>Guilherme Selair</strong>
          <span>Web Developer</span>
        </div>

        <time title="11 de Maio às 08:13h" dateTime="2022-05-11 08:13:30">
          Publicado há 1h
        </time>
      </header>
      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
        <p>👉 <a href="#">jane.design/doctorcare</a></p>
        <p><a href="#">#novoprojeto #nlw #rocketseat</a></p>

      </div>
    </article>
  );
}
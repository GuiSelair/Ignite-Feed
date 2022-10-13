import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';

export default function Comment() {
  return (
    <div className={styles.comment}>
        <img src="https://github.com/guiselair.png" alt="" />

        <div className={styles.commentBox}>
            <div className={styles.commentContent}>
                <header>
                    <div className={styles.authorAndTime}>
                        <strong>Guilherme Selair</strong>
                        <time title="11 de Maio às 08:13h" dateTime="2022-05-11 08:13:30">
                        Publicado há 1h
                        </time>
                    </div>
                    <button title="Deletar comentário">
                        <Trash size={20} />
                    </button>
                </header>

                <p>Muito bom Devon, parabéns!! 👏👏</p>
            </div>

            <footer>
                <button>
                    <ThumbsUp/>
                </button>
                Aplaudir <span>20</span>
            </footer>
        </div>
    </div>
  )
}

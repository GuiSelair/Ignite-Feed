import { useState } from 'react';
import { ThumbsUp, Trash } from 'phosphor-react';
import Avatar from './Avatar';
import styles from './Comment.module.css';

export default function Comment({ content, onDelete }) {
	const [likeCount, setLikeCount] = useState(0);

	const handleLikeComment = () => {
		setLikeCount(old => old + 1);
	}

  return (
    <div className={styles.comment}>
        <Avatar avatarUrl="https://github.com/guiselair.png" hasBorder={false} />

        <div className={styles.commentBox}>
            <div className={styles.commentContent}>
                <header>
                    <div className={styles.authorAndTime}>
                        <strong>Guilherme Selair</strong>
                        <time title="11 de Maio às 08:13h" dateTime="2022-05-11 08:13:30">
                        Publicado há 1h
                        </time>
                    </div>
                    <button onClick={() => onDelete(content)} title="Deletar comentário">
                        <Trash size={24} />
                    </button>
                </header>

                <p>{content}</p>
            </div>

            <footer>
                <button title="Excluir comentário" onClick={handleLikeComment}>
                    <ThumbsUp/>
                Aplaudir <span>{likeCount}</span>
                </button>
            </footer>
        </div>
    </div>
  )
}

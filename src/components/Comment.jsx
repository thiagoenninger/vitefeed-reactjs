import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://github.com/thiagoenninger.png" alt="" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Thiago Enninger</strong>
              <time tittle="18 de Julho ás 16:20" dateTime="2022-06-18 16:19:55">Publicado a 1h atrás</time>
            </div>
            <button tittle="Deletar comentário">
              <Trash size={24}/>
            </button>
          </header>
          <p>Muito bom Thiago, parabéns!</p>
        </div>
        <footer>
          <button>
            <ThumbsUp size={15}/>
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
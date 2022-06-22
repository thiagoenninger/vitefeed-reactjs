import styles from "./Post.module.css";	

export function Post(){
  return(
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src="https://github.com/thiagoenninger.png"/>
          <div className={styles.authorInfo}>
            <strong>Thiago Enninger</strong>
            <span>Web Developer</span>
          </div>
        </div>
        <time tittle="18 de Julho ás 16:20" dateTime="2022-06-18 16:19:55">Publicado há 1h</time>
      </header>

      <div className={styles.content}>
        <p>
          <p>Fala galeraa 👋</p>

          <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

          <p><a href="#">jane.design/doctorcare</a></p>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          placeholder="Deixe um comentário"/>
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

    </article>
  )
}
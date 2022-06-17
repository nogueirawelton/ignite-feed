import { format, formatDistanceToNow } from 'date-fns'
import {  ptBR  } from 'date-fns/locale'
import { ChangeEvent, FormEvent, useState } from 'react'

import { Avatar } from '../Avatar'
import { Comment } from '../Comment'

import styles from './Post.module.scss'

interface Author {
  name: string;
  avatarUrl: string;
  role: string;
}

interface Content {
  type: string;
  content: string;
}

interface Post {
  id: number;
  author: Author;
  content: Content[];
  tags: string[];
  publishedAt: Date;
}



interface PostProps {
  post: Post;
}

export const Post = ({ post: { author, content, tags, publishedAt} }: PostProps) => {
  const [comments, setComments] = useState<string[]>([])
  const [newComment, setNewComment] = useState('')

  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'ás' HH:mm'h'", {
    locale: ptBR
  })

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  })

  const handleCreateNewComment = (event: FormEvent) => {
    event.preventDefault();
    setComments([...comments, newComment])

    setNewComment('');
  }

  const handleCommentChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setNewComment(event.target.value)
  }
  
  const deleteComment = (content: string) => {
    const commentsWithoutDeletedOne = comments.filter(comment => comment != content)
    setComments(commentsWithoutDeletedOne)
  }

  const isNewCommentEmpy = newComment.length === 0;

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar hasBorder src={author.avatarUrl}/> 
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>{publishedDateRelativeToNow}</time>
      </header>

      <div className={styles.content}>
          {content.map((line, index) => {
            if (line.type === 'paragraph') {
              return (
                <p key={index}>{line.content}</p>
              )
            } else if (line.type === 'link') {
              return (
                <p key={index}><a href="#">{line.content}</a></p>
              )
            }
          })}
        <p className={styles.tags}>
          {tags.map((tag, index) => {
            return (
              <a key={index} href="#">{tag}</a>
            )
          })}
        </p>
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Deixe um comentário" value={newComment} name="comment" onChange={handleCommentChange} required/>
        <footer>
          <button type="submit" disabled={isNewCommentEmpy}>Publicar</button>
        </footer>
      </form>
      <div className={styles.commentList}>
          {comments.map((comment, index) => {
            console.log(comment)
            return (
              <Comment key={index} content={comment} onDeleteComment={deleteComment}/>
            )
          })}
      </div>
    </article>
  )
}

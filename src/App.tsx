import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Post } from './components/Post';

import './global.scss'
import styles from './App.module.scss'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'http://github.com/nogueirawelton.png',
      name: 'Welton Nogueira',
      role: 'Desenvolvedor Web'
    },
    content: [   
      {
        type: 'paragraph',
        content: 'Fala galeraa 👋'
      },
      {
        type: 'paragraph',
        content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'
      },
      {
        type: 'link',
        content: '👉weltinho.design/doctorcare'
      }
    ],
    tags: [
      '#novoprojeto',
      '#nlw',
      '#rocketseat'
    ],
    publishedAt: new Date('2022-05-03 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'http://github.com/Nathan-Barbosa.png',
      name: 'Nathan Barbosa',
      role: 'Desenvolvedor Backend'
    },
    content: [   
      {
        type: 'paragraph',
        content: 'Fala galeraa 👋'
      },
      {
        type: 'paragraph',
        content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no Ignite, da Rocketseat. O nome do projeto é Rentalx 🚀'
      },
      {
        type: 'link',
        content: '👉nathan.design/rentalx'
      }
    ],
    tags: [
      '#novoprojeto',
      '#node',
      '#express',
      '#rocketseat'
    ],
    publishedAt: new Date('2022-05-10 15:00:00')
  },
]

export const App = () => {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return <Post key={post.id} post={post} />
          })}
        </main>
      </div>
    </>
  )
}


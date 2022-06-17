import styles from './Header.module.scss'
import igniteLogo from '../../assets/ignite-logo.svg'

export const Header = () => {
  return (
    <header className={styles.header}>
      <img src={igniteLogo} alt="Logotipo do Ignite" />
    </header>
  )
}

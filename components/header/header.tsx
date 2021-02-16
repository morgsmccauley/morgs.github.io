import styles from '../../styles/Home.module.css'

const Header = () => (
  <header className={styles.header}>
    <h1>
      <a href="/">morgs.dev</a>
    </h1>
    <a href="https://github.com/morgsmccauley">
      <img src="/github-32px.png" alt="Github" width={32} height={32} />
    </a>
  </header>
);

export default Header;

import Head from 'next/head';
import { NavBar } from '../Navbar';
import styles from './MainLayout.module.css';

export const MainLayout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Layout</title>
        <meta name="description" content="Layout Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />

      <main className={styles.main}>{children}</main>
    </div>
  );
};

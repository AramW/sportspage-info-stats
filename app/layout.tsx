import './global.scss';
import Link from 'next/link';
import styles from './layout.module.scss';

export const metadata = {
  title: {
    default: 'animals4everyone',
    template: '%s | animals4everyone',
  },
  icons: {
    shortcut: '/favicon.ico',
  },
};

type Props = {
  children: React.ReactNode;
};

export const dynamic = 'force-dynamic';

export default function RootLayout(props: Props) {
  const randomNumber = Math.floor(Math.random() * 10);

  return (
    <html lang="en">
      <head />
      <body>
        <header className={styles.header}>
          <nav>
            <div>
              <Link href="/">Home</Link>
              <Link href="/register">Register</Link>
            </div>
            <div>{randomNumber}</div>
          </nav>
        </header>
        {props.children}
        <footer className={styles.footer}>
          something something copyright 2023
        </footer>
      </body>
    </html>
  );
}

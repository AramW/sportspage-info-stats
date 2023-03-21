import './global.scss';
import { cookies } from 'next/headers';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { getUserBySessionToken } from '../database/users';
import styles from './layout.module.scss';

export const metadata = {
  title: {
    default: 'LiveScores and Roster Updates',
    template: '%s | LiveScores and Roster Updates',
  },
  icons: {
    shortcut: '/favicon.ico',
  },
};

type Props = {
  children: React.ReactNode;
};

export const dynamic = 'force-dynamic';

export default async function RootLayout(props: Props) {
  // 1. get the session token from the cookie
  const cookieStore = cookies();
  const token = cookieStore.get('sessionToken');

  // 2. validate the session

  // 3. get the user profile matching the session
  const user = token && (await getUserBySessionToken(token.value));

  const randomNumber = Math.floor(Math.random() * 10);

  return (
    <html lang="en">
      <head />
      <body>
        <header className={styles.header}>
          <nav>
            <div>
              <Link href="/">Home</Link>
              <Link href="/livescore">LiveScore</Link>
              {user && <Link href="/teamroster">TeamRoster</Link>}
              {user && <Link href="/players">Players</Link>}
              <Link href="/support">Support</Link>
              {!user && <Link href="/register">Register</Link>}
              {!user && <Link href="/login">Login</Link>}
              {/* we want to disable prefetch for logout link */}
              {user && (
                <Link href="/logout" prefetch={false}>
                  Logout
                </Link>
              )}
              {user && user.username}
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

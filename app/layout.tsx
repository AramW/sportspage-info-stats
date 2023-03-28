import './global.scss';
import { cookies } from 'next/headers';
import Link from 'next/link';
// import { useRouter } from 'next/navigation';
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
          <h2>
            <Link href="/" className={`${styles.glitch} no-hover-color`}>
              <span aria-hidden="true">LSaI</span>
              LiveSports
              <span aria-hidden="true">LSaI</span>
            </Link>
          </h2>
          <nav>
            <div>
              <Link href="/" className={styles.link}>
                Home
              </Link>
              <Link href="/livescore" className={styles.link}>
                LiveScore
              </Link>
              {user && (
                <Link href="/teamroster" className={styles.link}>
                  TeamRoster
                </Link>
              )}
              {user && (
                <Link href="/players" className={styles.link}>
                  Players
                </Link>
              )}
              <Link href="/support" className={styles.link}>
                Support
              </Link>
            </div>
            <div>{randomNumber}</div>
            {!user && (
              <Link href="/register" className={styles.link}>
                Register |
              </Link>
            )}
            {!user && (
              <Link href="/login" className={styles.link}>
                Login |
              </Link>
            )}
            {/* we want to disable prefetch for logout link */}
            {/* {user && <span className={styles.link}>{user.username} |</span>} */}
            {user && (
              <Link href={`/profile/${user.username}`} className={styles.link}>
                {user.username} |
              </Link>
            )}
            {user && (
              <Link href="/logout" prefetch={false} className={styles.link}>
                Logout
              </Link>
            )}
            <button id="dark-mode-toggle">Dark Mode</button>
          </nav>
        </header>
        {props.children}
        <footer className={`${styles.footer} ${styles.link}`}>
          <div>
            <p>&copy; 2023 TopLivescore. All rights reserved.</p>
            <p>
              1234 Sports Avenue, Suite 100 <br />
              Anytown, AA 12345
            </p>
            <p>
              Phone: +1 (123) 456-7890 <br />
              Email: info@toplivescore.com
            </p>
          </div>
          <div>
            <ul>
              <li>
                <a href="/about">About Us</a>
              </li>
              <li>
                <a href="/contact">Contact Us</a>
              </li>
              <li>
                <a href="/privacy-policy">Privacy Policy</a>
              </li>
              <li>
                <a href="/terms-of-service">Terms of Service</a>
              </li>
            </ul>
          </div>
          <div>
            {/* <p>Follow us on social media:</p> */}
            <ul>
              <li>
                <a href="https://www.facebook.com/toplivescore">Facebook</a>
              </li>
              <li>
                <a href="https://www.twitter.com/toplivescore">Twitter</a>
              </li>
              <li>
                <a href="https://www.instagram.com/toplivescore">Instagram</a>
              </li>
            </ul>
          </div>
        </footer>
      </body>
    </html>
  );
}

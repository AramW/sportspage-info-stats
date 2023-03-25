'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import styles from '../../(auth)/login/LoginForm.module.scss';
import { RegisterResponseBody } from '../../api/(auth)/register/route';

export default function LoginForm(props: { returnTo?: string | string[] }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{ message: string }[]>([]);
  const router = useRouter();

  return (
    <div className={styles.container}>
      <form
        onSubmit={async (event) => {
          event.preventDefault();

          const response = await fetch('/api/login', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
          });

          const data: RegisterResponseBody = await response.json();

          if ('errors' in data) {
            setErrors(data.errors);
            return;
          }

          if (
            props.returnTo &&
            !Array.isArray(props.returnTo) &&
            // This is checking that the return to is a valid path in your application and not going to a different domain
            /^\/[a-zA-Z0-9-?=/]*$/.test(props.returnTo)
          ) {
            router.push(props.returnTo);
            return;
          }

          router.replace(`/profile/${data.user.username}`);
          router.refresh();
        }}
        className={styles.form}
      >
        {errors.map((error) => (
          <div key={`error-${error.message}`} className={styles.error}>
            Error: {error.message}
          </div>
        ))}
        <h1 className={styles.title}>Login</h1>
        <label>
          <p>Username:</p>
          <input
            className={styles.input}
            value={username}
            onChange={(event) => setUsername(event.currentTarget.value)}
          />
        </label>
        <label>
          <p>Password:</p>
          <input
            type="password"
            className={styles.input}
            value={password}
            onChange={(event) => setPassword(event.currentTarget.value)}
          />
        </label>
        <button className={styles.button}>Login</button>
      </form>
    </div>
  );
}

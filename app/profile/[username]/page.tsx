import { notFound } from 'next/navigation';
import { getUserByUsername } from '../../../database/users';
import styles from '../../UserProfile.module.scss';

type Props = { params: { username: string } };

export default async function UserProfile({ params }: Props) {
  const user = await getUserByUsername(params.username);

  if (!user) {
    notFound();
  }

  return (
    <div className={styles.userProfile}>
      <h1>Profile picture</h1>
      <h1>Username:{user.username}</h1>
      <p> Myid: {user.id}</p>
    </div>
  );
}

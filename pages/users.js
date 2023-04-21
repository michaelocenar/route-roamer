import routes from '../routes';
import db from '../db';

export default function Users({ users }) {
  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

export async function getServerSideProps() {
  const { rows } = await db.query('SELECT * FROM users');
  return { props: { users: rows } };
}

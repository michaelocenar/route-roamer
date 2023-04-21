// import routes from '../routes';
// import db from '../db';

// export default function ItineraryActivities({ itineraryActivities }) {
//   return (
//     <ul>
//       {itineraryActivities.map(activity => (
//         <li key={activity.id}>
//         </li>
//       ))}
//     </ul>
//   );
// }

// export async function getServerSideProps() {
//   const { rows } = await db.query('SELECT * FROM itinerary_activities');
//   return { props: { itineraryActivities: rows } };
// }

import routes from '../routes';
import db from '../db';

export default function Itinerary({ activities }) {
  return (
    <ul>
      {activities.map(activity => (
        <li key={activity.id}>
          <h2>{activity.label}</h2>
          <p>{activity.date}</p>
          <p>{activity.activity}</p>
          <p>{activity.time}</p>
          <p>{activity.lat}</p>
          <p>{activity.lng}</p>
          <p>{activity.description}</p>
        </li>
      ))}
    </ul>
  );
}

export async function getServerSideProps() {
  const { rows } = await db.query('SELECT * FROM itinerary_activities');
  return { props: { activities: rows } };
}

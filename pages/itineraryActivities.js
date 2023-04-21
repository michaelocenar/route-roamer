import activityRoutes from '../activityRoutes';
import db from '../db';

export default function Itinerary({ activities }) {
  return (
    <ul>
      {activities.map(activity => (
        <li key={activity.id}>
          <h2>{activity.label}</h2>
          <h2>{activity.location}</h2>
          {/* <p>{new Date(activity.date).toJSON()}</p> */}
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
  const { rows } = await db.query('SELECT itinerary_id, label, activity, time, lat, lng, description, location FROM itinerary_activities');
  return { props: { activities: rows } };
}




// export default function Itinerary({ activities }) {
//   return (
//     <ul>
//       {activities.map(activity => (
//         <li key={activity.id}>
//           <h2>{activity.label}</h2>
//           <p>{new Date(activity.date).toISOString()}</p>   or <p>{new Date(activity.date).toJSON()}</p>
//           <p>{activity.activity}</p>
//           <p>{activity.time}</p>
//           <p>{activity.lat}</p>
//           <p>{activity.lng}</p>
//           <p>{activity.description}</p>
//         </li>
//       ))}
//     </ul>
//   );
// }

// export async function getServerSideProps() {
//   const { rows } = await db.query('SELECT * FROM itinerary_activities');

//   // convert date to JSON serializable string
//   const activities = rows.map(row => ({
//     ...row,
//     date: new Date(row.date), // convert to Date object
//   }));

//   return { props: { activities } };
// }

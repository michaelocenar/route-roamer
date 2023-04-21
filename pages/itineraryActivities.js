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


export async function getServerSideProps(context) {
  const { location } = context.query; // Get the location from the query parameter
  const { rows } = await db.query('SELECT itinerary_id, label, activity, time, lat, lng, description, location FROM itinerary_activities WHERE location = $1', [location]);
  // const { rows } = await db.query('SELECT itinerary_id, label, activity, time, lat, lng, description, location FROM itinerary_activities');
  return { props: { activities: rows } };
}


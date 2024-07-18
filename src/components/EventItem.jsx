// src/components/EventItem.js
import { Link } from 'react-router-dom';

const EventItem = ({ event }) => {
    const calculateDaysLeft = (targetDate) => {
        const diff = new Date(targetDate) - new Date();
        return Math.ceil(diff / (1000 * 60 * 60 * 24));
    };

    return (
        <li className="event-item">
            <Link to={`/event/${event.id}`}>
                <h2>{event.title}</h2>
                <p>{calculateDaysLeft(event.date)} days left</p>
            </Link>
        </li>
    );
};

export default EventItem;

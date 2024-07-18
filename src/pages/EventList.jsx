// src/pages/EventList.js
import { useEffect, useState } from 'react';
import { fetchEvent } from '../services/api';
import EventItem from '../components/EventItem';
import { Link } from 'react-router-dom';

const EventList = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const loadEvents = async () => {
            const events = await fetchEvent();
            setEvents(events);
        };
        loadEvents();
    }, []);

    return (
        <div className="event-list">
            <h1>Your Events</h1>
            <Link to="/new" className="add-event-button">+ Add Event</Link>
            <ul>
                {events.map(event => (
                    <EventItem key={event.id} event={event} />
                ))}
            </ul>
        </div>
    );
};

export default EventList;

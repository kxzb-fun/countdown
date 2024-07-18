// src/pages/EventDetails.js
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchEvent, deleteEvent } from '../services/api';

const EventDetails = () => {
    const { id } = useParams();
    const history = useNavigate();
    const [event, setEvent] = useState(null);

    useEffect(() => {
        const loadEvent = async () => {
            const event = await fetchEvent(id);
            setEvent(event);
        };
        loadEvent();
    }, [id]);

    const handleDelete = async () => {
        await deleteEvent(id);
        history.push('/');
    };

    if (!event) return <div>Loading...</div>;

    return (
        <div className="event-details">
            <h1>{event.title}</h1>
            <p>{new Date(event.date).toLocaleDateString()}</p>
            <p>{event.notes}</p>
            <button onClick={() => history.push(`/edit/${id}`)}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
};

export default EventDetails;

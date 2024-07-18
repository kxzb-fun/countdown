// src/pages/EventForm.js
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { createEvent, updateEvent, fetchEvent } from '../services/api';

const EventForm = () => {
    const { id } = useParams();
    const history = useNavigate();
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [notes, setNotes] = useState('');

    useEffect(() => {
        if (id) {
            const loadEvent = async () => {
                const event = await fetchEvent(id);
                setTitle(event.title);
                setDate(event.date);
                setNotes(event.notes);
            };
            loadEvent();
        }
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const eventData = { title, date, notes };
        if (id) {
            await updateEvent(id, eventData);
        } else {
            await createEvent(eventData);
        }
        history.push('/');
    };

    return (
        <div className="event-form">
            <h1>{id ? 'Edit Event' : 'Create Event'}</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />
                <textarea
                    placeholder="Notes"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                />
                <button type="submit">Save</button>
            </form>
        </div>
    );
};

export default EventForm;

import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import EventList from './pages/EventList';
import EventDetails from './pages/EventDetails';
import EventForm from './pages/EventForm';
import Login from './pages/Login';
import Register from './pages/Register';

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<EventList />} />
        <Route path="/event/:id" element={<EventDetails />} />
        <Route path="/new" element={<EventForm />} />
        <Route path="/edit/:id" element={<EventForm />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
};

export default App;

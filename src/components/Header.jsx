import { useEffect, useState } from 'react';
import { supabase } from '../supabaseConfig';

const Header = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            const { data: user, error } = await supabase.auth.getUser();
            if (error) {
                console.error('Error fetching user:', error);
            } else {
                setUser(user);
            }
        };
        fetchUser();
    }, []);

    return (
        <header>
            <h1>Days Matter</h1>
            {user ? (
                <div>
                    <span>Welcome, {user.email}</span>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            ) : (
                <div>
                    <a href="/login">Login</a>
                    <a href="/register">Register</a>
                </div>
            )}
        </header>
    );

    async function handleLogout() {
        const { error } = await supabase.auth.signOut();
        if (error) {
            console.error('Error logging out:', error);
        } else {
            setUser(null);
        }
    }
};

export default Header;

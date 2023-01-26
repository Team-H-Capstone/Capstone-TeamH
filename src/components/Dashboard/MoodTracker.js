import React, { useState } from 'react';
import { useFirebase } from 'react-redux-firebase';

const MoodTracker = () => {
    const [mood, setMood] = useState('');
    const firebase = useFirebase();

    const handleMoodChange = (event) => {
        setMood(event.target.value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await firebase.firestore().collection('moods').add({ mood });
            setMood('');
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <h2>How are you feeling today?</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    <input type="radio" value="happy" onChange={handleMoodChange} /> Happy
                </label>
                <br />
                <label>
                    <input type="radio" value="neutral" onChange={handleMoodChange} /> Neutral
                </label>
                <br />
                <label>
                    <input type="radio" value="sad" onChange={handleMoodChange} /> Sad
                </label>
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default MoodTracker;

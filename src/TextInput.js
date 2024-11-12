import React, { useState } from 'react';
import axios from 'axios';

function TextInput() {
    const [text, setText] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:5000/save-text', { text });
            alert(response.data.message);
        } catch (error) {
            console.error("There was an error saving the text!", error);
        }
    };

    return (
        <div>
            <h1>Text Saver</h1>
            <form onSubmit={handleSubmit}>
                <textarea
                    rows="10"
                    cols="30"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Enter some text here..."
                />
                <br />
                <button type="submit">Save Text</button>
            </form>
        </div>
    );
}

export default TextInput;

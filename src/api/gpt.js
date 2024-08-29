export const CallGPT = async ({ prompt }) => {
    try {
        const response = await fetch('http://localhost:5001/api/generate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ prompt }), // Send the prompt to your backend
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }

        const data = await response.json();
        return data; // This will be the content returned by the backend
    } catch (error) {
        console.error('There was an error with the API call:', error);
        return null;
    }
};

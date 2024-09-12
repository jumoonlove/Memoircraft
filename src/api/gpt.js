export const CallGPT = async ({ prompt }) => {
    try {
        const response = await fetch('https://memoircraft-back-4f3b04d8a73c.herokuapp.com/api/generate', { 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ prompt }),
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('There was an error with the API call:', error);
        return null;
    }
};

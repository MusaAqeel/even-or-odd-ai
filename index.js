const axios = require('axios');
require('dotenv').config();

// Function to check if a number is odd using OpenAI ChatGPT
async function isOdd(number) {
    if (typeof number !== 'number') {
        throw new TypeError('Input must be a number');
    }

    try {
        const requestData = {
            model: "gpt-4o",
            messages: [{ 
                role: "user", 
                content: `Is the number ${number} odd or even? Reply with just the word 'odd' or 'even'.` 
            }],
            temperature: 0.3
        };

        const response = await axios.post('https://api.openai.com/v1/chat/completions', requestData, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
            }
        });

        const answer = response.data.choices[0].message.content.trim().toLowerCase();
        return answer.includes('odd');
    } catch (error) {
        console.error('Error querying OpenAI:', error);
        throw error;
    }
}

module.exports = isOdd; 
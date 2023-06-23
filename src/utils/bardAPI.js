import axios from 'axios';

const API_KEY =  process.env.API_KEY;

async function generateComment(input) {
    console.log(input, '<<<<<input>>>>>')
  try {
    const response = await axios.post(
      'https://api.bardlabs.com/v1/completions',
      {
        prompt: input,
        max_tokens: 50,
        temperature: 0.5,
        api_key: API_KEY,
      }
    );

    return response.data.choices[0].text;
  } catch (error) {
    console.error('Error generating comment:', error);
    return null;
  }
}

export { generateComment };

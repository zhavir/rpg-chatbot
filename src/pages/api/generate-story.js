// pages/api/generate-story.js
export default async function handler(req, res) {
    if (req.method !== 'POST') {
      return res.status(405).json({ error: 'Method Not Allowed' });
    }
  
    const { name, role, background, prompt } = req.body;
  
    // Construct the prompt for OpenAI API
    const promptText = `We're playing a role game based on d&d In a fantasy world, ${name} the ${role} with a ${background}`;
    const body = JSON.stringify({
      "model": "gpt-4",
      "messages": [
        {
          "role": "system",
          "content": promptText
        },
        {
          "role": "user",
          "content": prompt
        }
      ]
    });
    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
        },
        body: body,
      });
      console.log(`response is: ${response.text}`)
      if (!response.ok) {
        throw new Error(`Failed to fetch from OpenAI API ${response.status} ${body}`);
      }
  
      const data = await response.json();
      res.status(200).json({ story: data.choices[0].message.content.trim() });
    } catch (error) {
      console.error('Error generating story:', error);
      res.status(500).json({ error: 'Failed to generate story.' });
    }
  }
  
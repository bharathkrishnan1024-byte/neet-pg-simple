export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { message } = req.body;

  // Simple AI response (no external API needed for demo)
  const responses = [
    'Great! Keep up the consistent studying.',
    'That sounds like good progress. What subject did you focus on?',
    'Excellent work! Remember to take breaks and stay hydrated.',
    'You\'re doing great! How are you feeling about your preparation?',
    'Keep maintaining this momentum towards NEET PG 2026!',
    'That\'s impressive dedication. What\'s your next study goal?'
  ];

  const response = responses[Math.floor(Math.random() * responses.length)];

  res.json({ response });
}

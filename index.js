const express = require('express');
const { OpenClaw } = require('openclaw');

// Keep-alive web server (required by Koyeb)
const app = express();
const PORT = process.env.PORT || 3000;
app.get('/', (req, res) => res.send('Job Agent is running ✅'));
app.listen(PORT, () => console.log('Server running on port ' + PORT));

// Start OpenClaw agent
const agent = new OpenClaw({
  llm: { provider: 'gemini', apiKey: process.env.GEMINI_API_KEY },
  telegram: { token: process.env.TELEGRAM_BOT_TOKEN }
});
agent.start();
console.log('OpenClaw agent started ✅');

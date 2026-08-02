// src/pages/api/system-stream.js
import si from 'systeminformation';

const values = {
  'cpu': '*',
  'mem': 'total, used, free',
  'os': '*',
  'diskLayout': '*',
  'networkInterfaces': '*'
};

export async function GET({ res }) {
  // Set up SSE headers
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Start observing
  si.observe(values, 3000, (data) => {
    res.write(`data: ${JSON.stringify(data)}\n\n`);
  });

  // Clean up on disconnect
  res.on('close', () => {
    res.end();
  });
}
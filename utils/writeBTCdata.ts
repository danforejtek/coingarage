import cron from 'node-cron';
import fs from 'fs';
import path from 'path';
import fetch from 'node-fetch';

const filePath = path.join(process.cwd(), 'data', 'output.txt');

const writeToFile = async () => {
  const dateOpeningDate = new Date().getTime()
  try {
    // Načti data z endpointu
    const url = `https://api.coingarage.io/market/charts?base=BTC&quote=USDT&ts=${dateOpeningDate}&interval=1440`
    // const response = await fetch(url);
    // const data = await response.json();

    // Zapiš data do souboru
    fs.writeFile(filePath, JSON.stringify({test: "yeeessss"}), (err) => {
      if (err) {
        console.error('Error writing to file:', err);
      } else {
        console.log('Data written to file successfully');
      }
    });
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

// Naplánuj úlohu na každý den v 7:00 ráno
cron.schedule('30 15 * * *', writeToFile);

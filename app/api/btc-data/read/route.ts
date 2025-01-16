import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET(req: NextRequest) {
  // Definuj cestu k souboru
  const filePath = path.join(process.cwd(), 'data', 'output.txt');

  // Načti data ze souboru
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        resolve(NextResponse.json({ message: 'Error reading from file' }, { status: 500 }));
      } else {
        resolve(NextResponse.json({ data: JSON.parse(data) }, { status: 200 }));
      }
    });
  });
}

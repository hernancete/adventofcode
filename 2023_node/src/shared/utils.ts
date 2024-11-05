import fs from 'fs';

export const readFileLines = (inputFile: string): string[] => {
  const input = fs.readFileSync(inputFile, 'utf8');
  const inputLines = input.split('\n').filter(l => l);
  return inputLines;
}

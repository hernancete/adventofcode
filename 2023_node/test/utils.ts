import path from 'path';

export const getAbsPath = (directory: string, filePath: string): string => {
  return path.resolve(path.join(directory, filePath));
}
import { LocalFileReader } from './localfilereader';
import { LocalFileWriter } from './localfilewrite';

import { FileManager } from './filemanager';


// Client code
const fileReader = new LocalFileReader();
const fileWriter = new LocalFileWriter();
const fileManager = new FileManager(fileReader, fileWriter);

const currentContent = fileManager.readFile('example.txt');
console.log('Current content:', currentContent);

const newData = 'This is new content to be written into the file.';
fileManager.writeFile('example.txt', newData);

const updatedContent = fileManager.readFile('example.txt');
console.log('Updated content:', updatedContent);

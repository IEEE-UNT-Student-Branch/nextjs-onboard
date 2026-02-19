import * as path from 'path';
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));
import type { Application } from 'express';
import express from 'express';

globalThis.appDir = __dirname;
globalThis.projectDir = path.join(__dirname, '/..');
const FILE_EXTENSION = (process.env['NODE_ENV'] == 'development') ? '.ts' : '.js';


const server: Application = express();
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.listen(3001, () => { console.log(`Server listening on http://localhost:3001`) });

import fs from 'fs';
import { yarg } from "./plugins/args.plugin.ts";

const header = `
===========================
   Tabla del ${yarg.base}
===========================
`;

const {b:base, l:limit, s:showTable} = yarg;

let message = '';

for (let i = 1; i <= limit; i++) {
    message += `${base} x ${i} = ${base * i}\n`;
}

message = header + message;

const outputDir = 'outputs';


if(showTable)console.log(message);

fs.mkdirSync(outputDir, { recursive: true }); 
fs.writeFileSync(`${outputDir}/tabla-${base}.txt`, message);

console.log('File created!')

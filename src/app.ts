import{ yarg } from "./plugins/args.plugin.ts";
import { ServerApp } from "./presentation/server-app.ts";
// console.log(process.argv);

// console.log(yarg.b);

// Funcion anonima auto invocada

(async() => {
    await main()
})()


async function main(){
    const {b: base, l: limit, s: showTable, n:fileName, d:fileDestination} = yarg;
    ServerApp.run({base, limit, showTable, fileName, fileDestination});
}
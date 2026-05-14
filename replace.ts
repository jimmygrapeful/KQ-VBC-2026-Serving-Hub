import fs from "fs";
const file = "./src/App.tsx";
let code = fs.readFileSync(file, "utf8");

// Replace heavy shadows with a modern softer shadow or solid shadow but less offset
code = code.replace(/shadow-\[4px_4px_0px_0px_rgba\(30,41,75,1\)\]/g, "shadow-[4px_4px_0px_rgba(30,41,75,1)]");
code = code.replace(/shadow-\[4px_4px_0px_0px_rgba\(250,204,21,1\)\]/g, "shadow-[4px_4px_0px_rgba(250,204,21,1)]");
code = code.replace(/shadow-\[4px_4px_0px_0px_rgba\(244,114,182,1\)\]/g, "shadow-[4px_4px_0px_rgba(244,114,182,1)]");
code = code.replace(/shadow-\[4px_4px_0px_0px_rgba\(168,85,247,1\)\]/g, "shadow-[4px_4px_0px_rgba(168,85,247,1)]");

// Replace thick borders with normal or 2px/3px borders
code = code.replace(/border-4 border-slate-800/g, "border-[3px] border-slate-800");
code = code.replace(/border-4 border-kq-((?:sky|green|orange|purple|red))/g, "border-[3px] border-kq-$1");
code = code.replace(/border-4 border-pink-400/g, "border-[3px] border-pink-400");

fs.writeFileSync(file, code);
console.log("Updated borders and shadows");

import fs from "fs";
const file = "./src/App.tsx";
let code = fs.readFileSync(file, "utf8");

// Quick links
code = code.replace(/className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-2 px-3 rounded-lg text-sm transition-colors text-center( shadow-sm)?"/g, 
  'className="bg-slate-100/80 hover:bg-slate-200 text-slate-800 font-extrabold py-3 px-4 rounded-xl text-sm transition-all hover:-translate-y-0.5 text-center shadow-sm"');

// Accordion styling tweaks
code = code.replace(/text-xl lg:text-2xl text-kq-navy/g, "text-xl lg:text-2xl text-kq-navy font-black");

fs.writeFileSync(file, code);
console.log("Updated quick links");

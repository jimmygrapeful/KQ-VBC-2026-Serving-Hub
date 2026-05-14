import fs from "fs";
const file = "./src/App.tsx";
let code = fs.readFileSync(file, "utf8");

// Append font-black where font-display is used, if not already there
code = code.replace(/font-display(?! font-(?:black|extrabold|bold))/g, "font-display font-black");

fs.writeFileSync(file, code);
console.log("Updated font weights");

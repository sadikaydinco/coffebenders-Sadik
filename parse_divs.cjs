const file = require("fs").readFileSync("src/CustomerApp.tsx", "utf-8");
const lines = file.split("\n");

let stack = [];
for (let i = 542; i < 814; i++) { // up to 813
  const line = lines[i] || "";
  const tagsMatch = line.match(/<\/?(div|motion\.div|section|motion\.section)(\s|>|\/)/g) || [];
  
  for (const m of tagsMatch) {
    const raw = m.trim();
    if (raw.startsWith("</")) {
      stack.pop();
    } else {
      const openName = raw.substring(1).replace(/[>\/]$/, "").trim();
      stack.push({name: openName, line: i+1});
    }
  }
}
console.log("Unclosed tags at 814:", stack);

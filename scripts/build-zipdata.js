// Regenerates the compact ZIPDATA table that is inlined in index.html.
// Usage: npm pack zipcodes && tar xzf zipcodes-*.tgz && node scripts/build-zipdata.js package/lib/codes.js > zipdata.js
// Source data: the "zipcodes" npm package (BSD license). Each record is
// "zipDelta,lat*100,lng*100,placeIndex", all base 36, sorted by zip.
const { codes } = require(require("path").resolve(process.argv[2]));
const rows = Object.values(codes)
  .filter(c => c.country === "US" && /^\d{5}$/.test(c.zip) && isFinite(c.latitude))
  .sort((a, b) => a.zip - b.zip);
const places = [], index = {};
let prev = 0;
const out = rows.map(c => {
  const p = c.city + ", " + c.state;
  if (!(p in index)) { index[p] = places.length; places.push(p); }
  const d = +c.zip - prev; prev = +c.zip;
  return [d, Math.round(c.latitude * 100), Math.round(c.longitude * 100), index[p]].map(n => n.toString(36)).join(",");
});
process.stdout.write("const ZIPDATA=" + JSON.stringify({ p: places.join("|"), z: out.join(";") }) + ";");

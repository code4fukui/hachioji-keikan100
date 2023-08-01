import { CSV } from "https://js.sabae.cc/CSV.js";

//const fn = "csv/02-八王子景観１００選.csv";
const fn = "https://github.com/code4fukui/hachioji-keikan/raw/main/csv/02-%E5%85%AB%E7%8E%8B%E5%AD%90%E6%99%AF%E8%A6%B3%EF%BC%91%EF%BC%90%EF%BC%90%E9%81%B8.csv";
const fn2 = "hachioji-keikan100.csv";
const fnphoto = "./hachioji-keikan100-photo.csv";

const base = "https://code4fukui.github.io/hachioji-keikan100/";
const photo = await CSV.fetchJSON(fnphoto);
const data = await CSV.fetchJSON(fn);
let no = 1;
const list = [];
for (const d of data) {
  const d2 = { no };
  Object.assign(d2, d);
  const nimg = photo.find(p => p.no == no).nimg;
  d2.image = base + no + "-1.jpg";
  d2.nimage = nimg;
  list.push(d2);
  no++;
}
await Deno.writeTextFile(fn2, CSV.stringify(list));

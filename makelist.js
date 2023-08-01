import { dir2array } from "https://js.sabae.cc/dir2array.js";
import { CSV } from "https://js.sabae.cc/CSV.js";

const fns = await dir2array("./");
const list = [];
for (const fn of fns) {
  if (fn.toLowerCase().endsWith(".jpg") || fn.toLowerCase().endsWith(".jpeg")) {
    const [no, nimg] = fn.split(".")[0].split("-");
    const p = list.find(a => a.no == no);
    if (p == null) {
      list.push({
        no,
        nimg,
      });
    } else if (parseInt(p.nimg) < parseInt(nimg)) {
      p.nimg = nimg;
    }
  }
}
list.sort((a, b) => a.no - b.no);
await Deno.writeTextFile("hachioji-keikan100-photo.csv", CSV.stringify(list));

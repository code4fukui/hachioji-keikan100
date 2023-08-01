import { dir2array } from "https://js.sabae.cc/dir2array.js";

const fns = await dir2array("./");
const list = [];
for (const fn of fns) {
  if (fn.toLowerCase().endsWith(".jpg") || fn.toLowerCase().endsWith(".jpeg")) {
    const fn2 = fn.substring(0, fn.indexOf(" ")) + ".jpg";
    await Deno.rename(fn, fn2);
  }
}

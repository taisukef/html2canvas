import { html2image } from "./html2image.js";
import { GIF } from "https://taisukef.github.io/gifencoder/GIF.js";
import { downloadFile } from "https://js.sabae.cc/downloadFile.js";
import { sleep } from "https://js.sabae.cc/sleep.js";

let capturing = false;

const capture5sec = async (delay = 100) => {
  if (capturing) {
    console.log("already capturing...")
    return;
  }
  console.log("start capturing");
  capturing = true;
  const frames = [];
  let w, h;
  for (let i = 0; i < 5000 / delay; i++) {
    const img = await html2image(document.body, w, h);
    w = w || img.width;
    h = h || img.height;
    frames.push(img);
    await sleep(delay);
  }
  const gif = GIF.encode(frames, delay);
  downloadFile("screenshot.gif", gif);
  capturing = false;
  console.log("capturing finished");
};

export { capture5sec };

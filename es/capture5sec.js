import { html2image } from "./html2image.js";
import { GIF } from "https://taisukef.github.io/gifencoder/GIF.js";
import { downloadFile } from "https://js.sabae.cc/downloadFile.js";
import { sleep } from "https://js.sabae.cc/sleep.js";

const capture5sec = async () => {
  const delay = 100;
  const frames = [];
  for (let i = 0; i < 5000 / delay; i++) {
    const img = await html2image(document.body);
    console.log(img.width, img.height);
    frames.push(img);
    await sleep(delay);
  }
  const gif = GIF.encode(frames, delay);
  downloadFile("screenshot.gif", gif);
};

export { capture5sec };

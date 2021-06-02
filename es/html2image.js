import { html2canvas } from "./html2canvas.js";

const html2image = async (component, w, h) => {
  const canvas = await html2canvas(component);
  const ctx = canvas.getContext("2d");
  const img = ctx.getImageData(0, 0, w || canvas.width, h || canvas.height);
  return img;
};

export { html2image };

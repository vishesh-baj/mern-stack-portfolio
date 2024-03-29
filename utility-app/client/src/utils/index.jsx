import toast from "react-hot-toast";

export const generateRandomColors = () => {
  const randomHue = () => Math.floor(Math.random() * 360);
  const randomSaturation = () => Math.floor(Math.random() * 100);
  const randomLightness = () => Math.floor(Math.random() * 100);

  const colors = [];

  for (let i = 0; i < 5; i++) {
    const hue = randomHue();
    const saturation = randomSaturation();
    const lightness = randomLightness();

    const hexCode = hslToHex(hue, saturation, lightness);
    colors.push(hexCode);
  }

  console.log(colors);
  return colors;
};

export const hslToHex = (h, s, l) => {
  h /= 360;
  s /= 100;
  l /= 100;

  let r, g, b;

  if (s === 0) {
    r = g = b = l; // achromatic
  } else {
    const hue2rgb = (p, q, t) => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    };

    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;

    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }

  const toHex = (x) => {
    const hex = Math.round(x * 255).toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  };

  const hexCode = `#${toHex(r)}${toHex(g)}${toHex(b)}`;
  return hexCode;
};

export const handleColorClick = (colorCode) => {
  const tempInput = document.createElement("input");
  tempInput.value = colorCode;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);
  toast.success(`Color code ${colorCode} copied to clipboard!`);
};

export const convertToApiString = (string) => {
  const splittedStr = string.split(" ");
  const convertedString = splittedStr.join("+");
  console.log(convertedString);
  return convertedString;
};

/**
 * 
 * getBackground() function documentation.
 * This function takes in a background color or gradient. If it is a solid color (string), then it returns that color and the background changes accordingly.
If it's an object, it creates a string based on that object that will then set the gradient of the background accordingly.
Some parameters are optional, so in that case, it sets it to a default mode.

 * @param {*} background - takes in either a string as a solid background or object holding an array of colors as a gradient background.
 * @returns the background color based on the param background that is passed in.
 * {
              sideCorner: "left",
              colors: [
                { color: "#00a7d5", deg: 0 },
                { color: "#00ded8", deg: 90 },
              ],
            }
 */

export function getBackground(background) {
  let backgroundGradient = "";

  if (typeof background == "string") {
    console.log("string");
    return background;
  } else if (typeof background == "object") {
    console.log("object");
    background.sideCorner
      ? (backgroundGradient = `linear-gradient(${background.sideCorner},`)
      : (backgroundGradient = `linear-gradient(`);
    let i;
    for (i = 0; i < background.colors.length; i++) {
      let colorpart = `${background.colors[i].color}`;
      {
        background.colors[i].deg != null &&
          (colorpart = `${background.colors[i].color} ${background.colors[i].deg}`);
      }
      i == background.colors.length - 1
        ? (backgroundGradient += colorpart)
        : (backgroundGradient += colorpart + ",");
    }

    backgroundGradient += ")";
    console.log(backgroundGradient);
    return backgroundGradient;
  }
}

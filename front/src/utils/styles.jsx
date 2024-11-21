export function getBackground(background) {
  let backgroundGradient = "";

  if (typeof background == "string") {
    return background;
  } else if (typeof background == "object") {
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

export function getBackground(background) {
  let backgroundGradient = "";

  if (typeof background == "string") {
    return background;
  } else if (typeof background == "object") {
    background.sideCorner
      ? (backgroundGradient = `linear-gradient(${background.sideCorner}`)
      : (backgroundGradient = `linear-gradient(`);
    background.colors.forEach(function (color) {
      let colorpart = `,${color.color}`;
      {
        color.deg != null && (colorpart = `,${color.color} ${color.deg}`);
      }
      backgroundGradient += colorpart;
    });

    backgroundGradient += ")";
    return backgroundGradient;
  }
}

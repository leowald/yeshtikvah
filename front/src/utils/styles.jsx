
/** This function takes in a background color or gradient. If it's a solid color (string), then it returns that color and the background changes accordingly.
 * If it's an object, it creates a string based on that object that will then set the gradient of the background accordingly.
 * Some parameters are optional, so in that case, it sets it to a default mode.
*/
export function getBackground(background) {
    let backgroundGradient = "";
    if(typeof(background) == "string") {
        return background;
    }
    else if (typeof(background) == "object")
    {
        if(background.sideCorner == null) {
            background.sideCorner = "180deg";
        }
        if(background.colors[0].deg == null)
        {
            background.colors[0].deg = "0%";
        }
        if(background.colors[1].deg == null)
        {
            background.colors[1].deg = "100%";
        }
        backgroundGradient = `linear-gradient(${background.sideCorner},${background.colors[0].color} ${background.colors[0].deg},${background.colors[1].color} ${background.colors[1].deg})`; 
        return backgroundGradient;
        
    }
}
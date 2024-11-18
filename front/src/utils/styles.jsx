

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

        backgroundGradient = `linear-gradient(${background.sideCorner}`;
        background.colors.forEach(function(color) {
            let colorpart = `,${color.color},`;
            if(color.deg != null)
            {
                colorpart = `,${color.color} ${color.deg}`;
            }
            
            backgroundGradient+=colorpart;
        } );

        backgroundGradient+=")"; 
        return backgroundGradient;
        
    }
}
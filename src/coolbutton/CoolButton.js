import React from "react";
import "bulma/css/bulma.css";

function CoolButton({isPrimary, isSuccess, isDanger, children}) {
    return (
        <div>
            {isDanger === true ? (
                <button class="button is-rounded my-class is-danger is-small">{children}</button>
            ) : (
                <button class="button is-small is-success">{children}</button>
            )}
            
        </div>
    )
}

export default CoolButton
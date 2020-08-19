import React from "react";

//styling
import {Input} from "./InputStyle";

const CustomInput = ({value, handleChange}) => {

    return(
        <div>
            <Input
                placeholder="Enter Text"
                type='text'
                value={value}
                onChange={handleChange}
            />
        </div>
    )
};

export default CustomInput;

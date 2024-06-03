import React from "react";
import { TextInput } from "@mantine/core";
import { ComboBoxInput } from "../components/ComboInputBox/ComboBoxInput.tsx";

export const NewOrderScreen = () => {

    return (
        <div style={{width: '200px'}}>
            <div>
                <TextInput label="Shipping address" placeholder="15329 Huston 21st" />
            </div> 
            <div>
                <ComboBoxInput label="Shipping address" placeholder="15329 Huston 21st" />
            </div>
       </div>
    )
}
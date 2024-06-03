import React from "react";
import { TextInput } from "@mantine/core";
import { ComboBoxInput } from "../components/ComboInputBox/ComboBoxInput.tsx";

export const NewOrderScreen = () => {

    return (
       <div>
            <TextInput label="Shipping address" placeholder="15329 Huston 21st" />

            <ComboBoxInput label="Shipping address" placeholder="15329 Huston 21st" />
       </div> 
    )
}
import { Button } from "@mantine/core";
import React from "react";

export const ButtonsForNewOrder = (props) => {
    <>
        <Button  onClick={() => props.setValue(props.defaultValue)} disabled>
        Очистить
        </Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Button>
        Сохранить
        </Button>&nbsp;&nbsp;
        <Button>
        Сохранить и распечатать
        </Button>
    </>
}


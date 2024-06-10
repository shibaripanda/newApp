import { useState } from 'react';
import { Checkbox } from '@mantine/core';
import React from 'react';

export function CheckBox1(props: any) {
  const [checked, setChecked] = useState(props.item.maintable)

  const checkVisible = (data: boolean) => {
    props.serviceSettings.listOrdersFields.find((item: any) => item.index === props.item.index).maintable = data
    props.setServiceSettings(props.serviceSettings)
    props.setState(props.serviceSettings.listOrdersFields.filter((item: any) => item.maintable === true))
    setChecked(data)
  }


  return (
    <Checkbox
      label={props.item.label}
      checked={checked}
      onChange={(event) => checkVisible(event.currentTarget.checked)}
    />
  );
}
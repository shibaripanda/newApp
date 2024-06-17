import { useState } from 'react';
import { Checkbox } from '@mantine/core';
import React from 'react';
import { updateServiceSettings } from '../../fix/fixServiceSettings';

export function CheckBox1(props: any) {
  const [checked, setChecked] = useState(props.item.maintable)

  const checkVisible = (data: boolean) => {
    props.serviceSettings.listOrdersFields.find((item: any) => item.index === props.item.index).maintable = data
    props.setServiceSettings(props.serviceSettings)
    props.setState(props.serviceSettings.listOrdersFields.filter((item: any) => item.maintable === true))
    updateServiceSettings(props.serviceSettings)
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
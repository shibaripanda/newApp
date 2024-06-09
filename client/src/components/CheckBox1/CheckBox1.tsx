import { useState } from 'react';
import { Checkbox } from '@mantine/core';
import React from 'react';
import { myEmitter } from '../../modules/createLisener';

export function CheckBox1(props) {
  const [checked, setChecked] = useState(props.item.maintable)

  const checkVisible = (data) => {
    console.log(props.serviceSettings.listOrdersFields)
    props.serviceSettings.listOrdersFields.find(item => item.index === props.item.index).maintable = data
    // props.setDateTableHeaders(props.serviceSettings.listOrdersFields.filter(item => item.maintable === true))
    myEmitter.emit('updateTableColams', props.serviceSettings)
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
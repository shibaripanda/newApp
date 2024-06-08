import { useState } from 'react';
import { Checkbox } from '@mantine/core';
import React from 'react';

export function CheckBox1(props) {
  const [checked, setChecked] = useState(props.activ);
  console.log(checked)
  return (
    <Checkbox
      label={props.label}
      checked={checked}
      onChange={(event) => setChecked(event.currentTarget.checked)}
    />
  );
}
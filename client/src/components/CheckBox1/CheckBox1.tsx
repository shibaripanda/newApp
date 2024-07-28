import { useState } from 'react';
import { Checkbox } from '@mantine/core';
import React from 'react';
import { updateUserSettings } from '../../fix/fixServiceSettings';

export function CheckBox1(props: any) {

  const [checked, setChecked] = useState(props.serviceSettings.userMainTable.includes(props.item.index))

  const checkVisible = (data: boolean) => {

    if(checked){
      props.serviceSettings.userMainTable = props.serviceSettings.userMainTable.filter(item => item !== props.item.index)
    }
    else{
      props.serviceSettings.userMainTable.push(props.item.index)
    }
    props.setServiceSettings(props.serviceSettings)
    props.setState(props.serviceSettings.generalOrderList.filter((item: any) => props.serviceSettings.userMainTable.includes(item.index)))
    updateUserSettings({item: 'userMainTable', newData: props.serviceSettings.userMainTable})
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
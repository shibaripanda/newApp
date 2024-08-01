'use client'
import { Group } from '@mantine/core'
import classes from './HeaderSearch2.module.css'
import React from 'react'
import { updateUserSettings } from '../../fix/fixServiceSettings'

export function HeaderSearch2(props) {

  const changeColor = (index) => {
    if(props.filter.includes(index)){
      return 'activlink'
    }
    return 'link'
  }

  const items = props.serviceSettings.generalDeviceList.map((link, index) => (
      
    <div
      key={index}
      className={classes[changeColor(link.request)]}
      // onClick={(event) => event.preventDefault()}
      onClick={ async () => {
        let newfilter = [...props.filter]
        const res = props.filter.findIndex(item => item === link.request)
        if(res > -1){
          console.log('delete')
          newfilter = newfilter.filter(item => item !== link.request)
        }
        else{
          newfilter = [...newfilter, link.request]
        }
        updateUserSettings({item: 'userDeviceFilter', newData: newfilter})
        props.setFilter(newfilter)
      }}
    >
      {link.label}
    </div>

  ))

  
  return (
    <header className={classes.header}>
      <div>
        <div className={classes.inner}>
          <Group>
          </Group>

          <Group>
            <Group ml={50} gap={5} className={classes.links} visibleFrom="sm">
            Device filter: {items}
            </Group>
          </Group>
        </div>
      </div>
    </header>
  );
}


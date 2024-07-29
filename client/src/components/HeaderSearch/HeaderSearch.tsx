'use client'
import { Group } from '@mantine/core'
import classes from './HeaderSearch.module.css'
import React from 'react'
import { sessionData } from '../../modules/sessionData'
import { updateUserSettings } from '../../fix/fixServiceSettings'
import { IconUserSquareRounded } from '@tabler/icons-react'

export function HeaderSearch(props) {

  console.log('update')
  const changeColor = (index) => {
    if(props.newSet.includes(index)){
      return 'activlink'
    }
    return 'link'
  }

  const items = props.serviceSettings.generalStatusList.map((link, index) => (
      
    <div
      key={index}
      className={classes[changeColor(link.index)]}
      // onClick={(event) => event.preventDefault()}
      onClick={ async () => {
        let newfilter = [...props.newSet]
        const res = props.newSet.findIndex(item => item === link.index)
        if(res > -1){
          console.log('delete')
          newfilter = newfilter.filter(item => item !== link.index)
        }
        else{
          newfilter = [...newfilter, link.index]
        }
        updateUserSettings({item: 'userStatusFilter', newData: newfilter})
        props.setNewSet(newfilter)
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
          <IconUserSquareRounded/> {sessionData('read', 'name')}
          </Group>

          <Group>
            <Group ml={50} gap={5} className={classes.links} visibleFrom="sm">
              Status filtres: {items}
            </Group>
          </Group>
        </div>
      </div>
    </header>
  );
}


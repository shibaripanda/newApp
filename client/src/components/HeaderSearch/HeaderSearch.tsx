'use client'
import { Autocomplete, Burger, Group } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { IconSearch } from '@tabler/icons-react'
import classes from './HeaderSearch.module.css'
import React from 'react'
import { sessionData } from '../../modules/sessionData'

export function HeaderSearch(props) {

  const [opened, { toggle }] = useDisclosure(false);

  const changeColor = (request, status) => {
    if(request === status){
      return 'activlink'
    }
    return 'link'
  }

  const items = props.serviceSettings.userFastDevices.map((link) => (
      
    <div
      key={link.link}
      className={classes[changeColor(link.request, props.filter)]}
      // onClick={(event) => event.preventDefault()}
      onClick={() => props.setFilter(link.request)}
    >
      {link.label}
    </div>

  ))

  return (
    <header className={classes.header}>
      <div>
        <div className={classes.inner}>
          <Group>
            <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
            {sessionData('read', 'name')}
          </Group>

          <Group>
            <Group ml={50} gap={5} className={classes.links} visibleFrom="sm">
              {items}
            </Group>
            <Autocomplete
              className={classes.search}
              placeholder="Search"
              leftSection={<IconSearch style={{ width: '1vmax', height: '1vmax' }} stroke={1.5} />}
              data={['React', 'Angular', 'Vue', 'Next.js', 'Riot.js', 'Svelte', 'Blitz.js']}
              visibleFrom="xs"
              onChange={props.setFilter}
            />
          </Group>
        </div>
      </div>
    </header>
  );
}


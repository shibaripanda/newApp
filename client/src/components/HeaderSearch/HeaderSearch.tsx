'use client';
import { useContextMenu } from 'mantine-contextmenu';
import { Autocomplete, Burger, Group } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconCopy, IconDownload, IconSearch } from '@tabler/icons-react';
import classes from './HeaderSearch.module.css';
import React from 'react';
import { MantineLogo } from '@mantinex/mantine-logo';

export function HeaderSearch(props) {
  const { showContextMenu } = useContextMenu()

  const [opened, { toggle }] = useDisclosure(false);

  const changeColor = (request, status) => {
    if(request === status){
      return 'activlink'
    }
    return 'link'
  }

  const items = props.serviceSettings.listFastDevice.map((link) => (
      
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
      <div 
      onContextMenu={showContextMenu([
        {
          key: 'copy',
          icon: <IconCopy size={16} />,
          title: 'Copy to clipboard',
          onClick: () => toggle(),
        },
        {
          key: 'download',
          icon: <IconDownload size={16} />,
          title: 'Download to your device',
          onClick: () => toggle(),
        },
      ])}>
        <div className={classes.inner}>
          <Group>
            <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
            <MantineLogo size={28} />
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


import React from 'react';
import { Tooltip, UnstyledButton, Stack } from '@mantine/core';
import classes from './NavbarMinimalColored.module.css';



export function NavbarMinimalColored(props) {
  console.log(props.active)

  function NavbarLink({ icon: Icon, label, active, onClick }: any) {
    return (
      <Tooltip label={label} position="right" transitionProps={{ duration: 0 }}>
        <UnstyledButton onClick={onClick} className={classes.link} data-active={active || undefined}>
          <Icon style={{ width: '2.5vmax', height: '2.5vmax', color: props.appColor.iconAppColor }} stroke={1} />
        </UnstyledButton>
      </Tooltip>
    );
  }

  const topLinks = props.navBar.top.map((link, index) => (
    <NavbarLink
      {...link}
      key={link.label}
      active={index === props.active}
      onClick={() => props.setActive(index)}
    />
  ));

  const bottomLinks = props.navBar.bottom.map((link, index) => (
    <NavbarLink
      {...link}
      key={link.label}
      // active={index === active}
      // onClick={() => setActive(index)}
    />
  ));

  return (
    <nav className={classes.navbar} style={{backgroundColor: props.appColor.mainAppColor}}>

      <div className={classes.navbarMain}>
        <Stack justify="center" gap={10}>
          {topLinks}
        </Stack>
      </div>

      <Stack justify="center" gap={15}>
        {bottomLinks}
      </Stack>

    </nav>
  );
}
import {
    IconHome,
    IconCirclePlus,
    // IconDeviceDesktopAnalytics,
    // IconFingerprint,
    // IconCalendarStats,
    // IconUser,
    IconUsersGroup,
    IconUser,
    IconPower,
    IconSettings,
    IconLogout,
    IconSwitchHorizontal,
  } from '@tabler/icons-react';
import { sessionData } from '../modules/sessionData';


export const fixNavBarItems = async () => {

    return {
      top: [
        { icon: IconHome, label: 'Service' },
        { icon: IconCirclePlus, label: 'New Order' },
        { icon: IconUser, label: 'Settings' },
        { icon: IconUsersGroup, label: 'Users' },
        { icon: IconSettings, label: 'Admin' },
        
      ],
      bottom: [
        { icon: IconSwitchHorizontal, label: 'Change account', onCl: (navigate) => {
          sessionData('close')
          navigate("/")
        }},
        { icon: IconLogout, label: 'Logout', onCl: (navigate) => {
          sessionData('exit')
          navigate("/")
        }},
        { icon: IconPower, label: 'OFF APP', onCl: (navigate) => {
          sessionData('off')
          navigate("/")
        }}
      ]
    }

}
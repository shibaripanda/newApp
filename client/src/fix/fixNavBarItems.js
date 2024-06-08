import {
    IconHome2,
    IconGauge,
    // IconDeviceDesktopAnalytics,
    // IconFingerprint,
    // IconCalendarStats,
    // IconUser,
    IconSettings,
    IconLogout,
    IconSwitchHorizontal,
  } from '@tabler/icons-react';


export const fixNavBarItems = async () => {

    return {
      top: [
        { icon: IconHome2, label: 'Service' },
        { icon: IconGauge, label: 'New Order' },
        { icon: IconSettings, label: 'Settings' },
      ],
      bottom: [
        { icon: IconSwitchHorizontal, label: 'Change account', onCl: 'changeAccount'},
        { icon: IconLogout, label: 'Logout', onCl: 'logout'},
      ]
    }

}
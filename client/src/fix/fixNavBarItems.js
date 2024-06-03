import {
    IconHome2,
    IconGauge,
    // IconDeviceDesktopAnalytics,
    // IconFingerprint,
    // IconCalendarStats,
    // IconUser,
    // IconSettings,
    IconLogout,
    IconSwitchHorizontal,
  } from '@tabler/icons-react';


export const fixNavBarItems = async () => {

    return {
      top: [
        { icon: IconHome2, label: 'Service' },
        { icon: IconGauge, label: 'New Order' },
      ],
      bottom: [
        { icon: IconSwitchHorizontal, label: 'Change account' },
        { icon: IconLogout, label: 'Logout' },
      ]
    }

}
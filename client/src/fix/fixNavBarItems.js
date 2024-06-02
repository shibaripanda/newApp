import {
    IconHome2,
    IconGauge,
    IconDeviceDesktopAnalytics,
    IconFingerprint,
    IconCalendarStats,
    IconUser,
    IconSettings,
    IconLogout,
    IconSwitchHorizontal,
  } from '@tabler/icons-react';

export const fixNavBarItems = async () => {
    return {
      top: [
        { icon: IconHome2, label: 'Home' },
        { icon: IconGauge, label: 'Dashboard' },
        { icon: IconDeviceDesktopAnalytics, label: 'Analytics' },
        { icon: IconCalendarStats, label: 'Releases' },
        { icon: IconUser, label: 'Account' },
        { icon: IconFingerprint, label: 'Security' },
        { icon: IconSettings, label: 'Settings' },
      ],
      bottom: [
        { icon: IconSwitchHorizontal, label: 'Change account' },
        { icon: IconLogout, label: 'Logout' },
      ]
    }
}
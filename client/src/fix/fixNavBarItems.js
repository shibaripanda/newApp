import {
    IconHome,
    IconCirclePlus,
    // IconDeviceDesktopAnalytics,
    // IconFingerprint,
    // IconCalendarStats,
    // IconUser,
    IconPower,
    IconSettings,
    IconLogout,
    IconSwitchHorizontal,
  } from '@tabler/icons-react';


export const fixNavBarItems = async () => {

    return {
      top: [
        { icon: IconHome, label: 'Service' },
        { icon: IconCirclePlus, label: 'New Order' },
        { icon: IconSettings, label: 'Settings' },
      ],
      bottom: [
        { icon: IconSwitchHorizontal, label: 'Change account', onCl: (navigate) => {
          sessionStorage.removeItem(`currentUser`)
          navigate("/")
        }},
        { icon: IconLogout, label: 'Logout', onCl: (navigate) => {
          sessionStorage.setItem('activUsers', sessionStorage.getItem('activUsers').split(' ').filter(item => item !== sessionStorage.getItem(`currentUser`)))
          sessionStorage.removeItem(`token ${sessionStorage.getItem('currentUser')}`)
          sessionStorage.removeItem(`campId ${sessionStorage.getItem('currentUser')}`)
          sessionStorage.removeItem(`currentUser`)
          navigate("/")
        }},
        { icon: IconPower, label: 'OFF APP', onCl: (navigate) => {
          sessionStorage.clear()
          navigate("/")
        }}
      ]
    }

}
import { NavbarMinimalColored } from '../components/NavBar/NavbarMinimalColored.tsx';
import '@mantine/core/styles.css';
import { fixNavBarItems } from '../fix/fixNavBarItems.js';
import { useEffect, useState } from 'react';
import { fixColorApp } from '../fix/fixColorApp.js';


function MainPage() {
  const [navBar, setNavBar] = useState(false)
  const [appColor, setAppColor] = useState(false)

  useEffect(() => {
    getNavBar()
    getAppColor()
  }, [])

  const getNavBar = async () => {
    const res = await fixNavBarItems()
    setNavBar(res)
  }
  const getAppColor = async () => {
    const res = await fixColorApp()
    setAppColor(res)
  }


if(navBar && appColor){
    return (
          <div style={{height: window.innerHeight}}>
            <NavbarMinimalColored navBar={navBar} appColor={appColor}/>
          </div>
    );
  }
  else{
    return (
      <div>Загрузка...</div>
    )
  }

}

export default  MainPage;

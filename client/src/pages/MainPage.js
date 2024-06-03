import { NavbarMinimalColored } from '../components/NavBar/NavbarMinimalColored.tsx';
import '@mantine/core/styles.css';
import { fixNavBarItems } from '../fix/fixNavBarItems.js';
import { useEffect, useState } from 'react';
import { fixColorApp } from '../fix/fixColorApp.js';
import { fixText } from '../fix/fixText.js';
import { ServiceScreen } from '../mainScreens/ServiceScreen.tsx';
import { NewOrderScreen } from '../mainScreens/NewOrderScreen.tsx';


function MainPage() {
  const [active, setActive] = useState(0);
  const [navBar, setNavBar] = useState(false)
  const [appColor, setAppColor] = useState(false)
  const [text, setText] = useState(false)

  

  useEffect(() => {
    getNavBar()
    getAppColor()
    getText()

    window.addEventListener('resize', (e) => {
      console.log(e);
    });
  }, [])

  const getText = async () => {
    const res = await fixText()
    setText(res)
  }
  const getNavBar = async () => {
    const res = await fixNavBarItems()
    setNavBar(res)
  }
  const getAppColor = async () => {
    const res = await fixColorApp()
    setAppColor(res)
  }


  if(navBar && appColor && text){

    const screen = () => {
      const listScreens = [
      <ServiceScreen/>,
      <div className='order'><NewOrderScreen/></div>
    ]
      if(listScreens.length !== navBar.top.length){
        console.log('Какойто пиздец, Навбаров не столько сколько скринов!!!')
      }

      if(listScreens[active]){
        return (
          listScreens[active]
        )
      }
      return (
        <div>Что-то не так!</div>
      )
      
    }
  
    return (
          <div className='mainPage'>
            <NavbarMinimalColored active={active} setActive={setActive} navBar={navBar} appColor={appColor}/>
            {screen()}
          </div>
    )
  }
  else{
    return (
      <div>Загрузка...</div>
    )
  }

}

export default  MainPage;

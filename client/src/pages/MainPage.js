import { NavbarMinimalColored } from '../components/NavBar/NavbarMinimalColored.tsx';
import '@mantine/core/styles.css';
import { fixNavBarItems } from '../fix/fixNavBarItems.js';
import { useEffect, useState } from 'react';
import { fixColorApp } from '../fix/fixColorApp.js';
import { fixText } from '../fix/fixText.js';
import { ServiceScreen } from '../mainScreens/ServiceScreen.tsx';
import { NewOrderScreen } from '../mainScreens/NewOrderScreen.tsx';
// import { Affix } from '@mantine/core';
import '../App.css';
import { HeaderSearch } from '../components/HeaderSearch/HeaderSearch.tsx';
import { LoaderItem } from '../components/Loader/LoaderItem.tsx';
import { fixServiceSettings } from '../fix/fixServiceSettings.js';

function MainPage() {
  const [active, setActive] = useState(0);
  const [navBar, setNavBar] = useState(false)
  const [appColor, setAppColor] = useState(false)
  const [text, setText] = useState(false)
  const [filter, setFilter] = useState('')
  const [serviceSettings, setServiceSettings] = useState(false)
  const [value, setValue] = useState('');

  const defaultValue = (r) => {
    const obj = {}
    for(let i of r){
      if(!i.hide){
        obj[i.index] = ''
      }
    }
    return obj
  }

  useEffect(() => {
    getNavBar()
    getAppColor()
    getText()
    getFixServiceSettings()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const getText = async () => {
    const res = await fixText()
    setText(res)
  }
  const getFixServiceSettings = async () => {
    const res = await fixServiceSettings()
    const res1 = defaultValue(res.listOrdersFields)
    setValue(res1)
    setServiceSettings(res)
  }
  const getNavBar = async () => {
    const res = await fixNavBarItems()
    setNavBar(res)
  }
  const getAppColor = async () => {
    const res = await fixColorApp()
    setAppColor(res)
  }
  
  if(navBar && appColor && text && serviceSettings){

    const screen = () => {
      
      const listScreens = [
        <ServiceScreen filter={filter} serviceSettings={serviceSettings}/>,
        <NewOrderScreen defaultValue={defaultValue} value={value} setValue={setValue} serviceSettings={serviceSettings}/>
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
      <div>
        <div className={'WorkScreen'}>
          {screen()}
        </div>
        <div className={'NavBar'}>
          <NavbarMinimalColored active={active} setActive={setActive} navBar={navBar} appColor={appColor}/>
        </div>
        <div className={'NavBarTop'}>
          <HeaderSearch filter={filter} setFilter={setFilter} serviceSettings={serviceSettings}/> 
        </div>
      </div>
  )
  
  }
  else{
    return (
      <div className={'mainScreenLoader'}><LoaderItem/></div>
    )
  }

}

export default  MainPage;

import { NavbarMinimalColored } from '../components/NavBar/NavbarMinimalColored.tsx';
import '@mantine/core/styles.css';
import { fixNavBarItems } from '../fix/fixNavBarItems.js';
import { useEffect, useState } from 'react';
import { fixColorApp } from '../fix/fixColorApp.js';
import { fixText } from '../fix/fixText.js';
import { ServiceScreen } from '../mainScreens/ServiceScreen.tsx';
import { NewOrderScreen } from '../mainScreens/NewOrderScreen.tsx';
import { Affix } from '@mantine/core';
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

  useEffect(() => {
    const defaultValue = (r) => {
      const obj = {}
      for(let i of r){
          obj[i.index] = ''
      }
      return obj
    }
    const fieldSet = (r) => {
      const res = defaultValue(r)
      setValue(res)
    }
    getNavBar()
    getAppColor()
    getText()
    getFixServiceSettings().then((res) => fieldSet(res.listOrdersFields))
  }, [serviceSettings.listOrdersFields])

  const getText = async () => {
    const res = await fixText()
    setText(res)
  }
  const getFixServiceSettings = async () => {
    const res = await fixServiceSettings()
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
        <ServiceScreen filter={filter}/>,
        <div className={'NewOrder'}><NewOrderScreen defaultValue={defaultValue} value={value} setValue={setValue} serviceSettings={serviceSettings}/></div>
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

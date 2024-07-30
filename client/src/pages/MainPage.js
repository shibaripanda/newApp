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
import { HeaderSearch2 } from '../components/HeaderSearch/HeaderSearch2.tsx';
import { LoaderItem } from '../components/Loader/LoaderItem.tsx';
import { fixServiceSettings } from '../fix/fixServiceSettings.js';
import { fixOrders } from '../fix/fixOrders.js';
import { createLisener } from '../modules/createLisener.js';
import { SettingsScreen } from '../mainScreens/SettingsScreen.tsx';
import { axiosCall } from '../modules/axiosCall.js';
import { useNavigate } from 'react-router-dom'
import { sessionData } from '../modules/sessionData.js';
import { AdminScreen } from '../mainScreens/AdminScreen.tsx';
import { GroupUsersScreen } from '../mainScreens/GroupUsersScreen.tsx';

function MainPage() {
  const navigate = useNavigate()
  const [active, setActive] = useState(0);
  const [navBar, setNavBar] = useState(false)
  const [appColor, setAppColor] = useState(false)
  const [text, setText] = useState(false)
  const [filter, setFilter] = useState(false)
  const [serviceSettings, setServiceSettings] = useState(false)
  const [newSet, setNewSet] = useState(false)
  const [textFilter, setTextFilter] = useState(false)
  const [value, setValue] = useState('');
  const [orders, setOrders] = useState([])

  const defaultValue = (r) => {
    const obj = {}
    for(let i of r){
      if(i.neworder){
        obj[i.index] = ''
      }
    }
    return obj
  }
  createLisener('createNewOrder', async (data) => {
    await axiosCall('POST', 'http://localhost:5000/api/orders', {...data.newOrder})
    .then(async (res) => {
      setOrders([{...res.data}, ...data.orders])
      setTimeout(() => setActive(0), 500)
    })
  })
  createLisener('createNewOrderAndPrint', async (data) => {
    await axiosCall('POST', 'http://localhost:5000/api/orders', {...data.newOrder})
    .then(async (res) => {setOrders([{...res.data}, ...data.orders])})
  })
  useEffect(() => {
    const navi = () => {
      sessionData('read', 'currentUser')
      if(!sessionData('read', 'currentUser') || !sessionData('read', 'campId')){
        navigate('/')
      }
      else{
        getOrders()
        getNavBar()
        getAppColor()
        getText()
        getFixServiceSettings()
      }
    }
    navi()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const getOrders = async () => {
    const res = await fixOrders()
    setOrders(res.sort((a, b) => b.date - a.date))
    setInterval(async () => {
      console.log(navBar)
      console.log(active)
      if(sessionData('read', 'currentUser')){
        const res = await fixOrders()
        setOrders(res.sort((a, b) => b.date - a.date))
        console.log('up orders')
      }
      else{
        console.log('pause update orders')
      }
    }, 5000)
  }
  const getText = async () => {
    const res = await fixText()
    setText(res)
  }
  const getFixServiceSettings = async () => {
    const res = await fixServiceSettings()
    console.log(res)
    const res1 = defaultValue(res.generalOrderList)
    setValue(res1)
    setServiceSettings(res)
    setNewSet(res.userStatusFilter)
    setFilter(res.userDeviceFilter)
  }

  const getNavBar = async () => {
    const res = await fixNavBarItems()
    setNavBar(res)
  }
  const getAppColor = async () => {
    const res = await fixColorApp()
    setAppColor(res)
  }
  
  if(navBar && appColor && text && serviceSettings && orders && newSet && filter){

    const screen = () => {
      
      const listScreens = [
        <ServiceScreen getOrders={getOrders} text={text} orders={orders} setOrders={setOrders} filter={filter} serviceSettings={serviceSettings} newSet={newSet} textFilter={textFilter}/>,
        <NewOrderScreen getOrders={getOrders} orders={orders} defaultValue={defaultValue} value={value} setValue={setValue} serviceSettings={serviceSettings}/>,
        <SettingsScreen text={text} serviceSettings={serviceSettings} setServiceSettings={setServiceSettings}/>,
        <GroupUsersScreen text={text} serviceSettings={serviceSettings} setServiceSettings={setServiceSettings}/>,
        <AdminScreen text={text} serviceSettings={serviceSettings} setServiceSettings={setServiceSettings}/>,
      ]
      
      if(listScreens.length !== navBar.top.length){
        console.log('Какойто пиздец, Навбаров не столько сколько скринов!!!')
      }

      if(listScreens[active]){
        console.log(active)
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
          <HeaderSearch textFilter={textFilter} setTextFilter={setTextFilter}  serviceSettings={serviceSettings} setServiceSettings={setServiceSettings} newSet={newSet} setNewSet={setNewSet}/>
          <div className={'NavBarTop2'}>
            <HeaderSearch2 filter={filter} setFilter={setFilter} serviceSettings={serviceSettings}/>
            {/* <Affix>ssdd</Affix>   */}
          </div>
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

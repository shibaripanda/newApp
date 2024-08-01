import { NavbarMinimalColored } from '../components/NavBar/NavbarMinimalColored.tsx';
import '@mantine/core/styles.css';
import { fixNavBarItems } from '../fix/fixNavBarItems.js';
import { useEffect, useState } from 'react';
import { ServiceScreen } from '../mainScreens/ServiceScreen.tsx';
import { NewOrderScreen } from '../mainScreens/NewOrderScreen.tsx';
// import { Affix } from '@mantine/core';
import '../App.css';
import { HeaderSearch } from '../components/HeaderSearch/HeaderSearch.tsx';
import { HeaderSearch2 } from '../components/HeaderSearch/HeaderSearch2.tsx';
import { LoaderItem } from '../components/Loader/LoaderItem.tsx';
import { createLisener } from '../modules/createLisener.js';
import { SettingsScreen } from '../mainScreens/SettingsScreen.tsx';
import { useNavigate } from 'react-router-dom'
import { AdminScreen } from '../mainScreens/AdminScreen.tsx';
import { GroupUsersScreen } from '../mainScreens/GroupUsersScreen.tsx';
import { OwnerScreen } from '../mainScreens/OwnerScreen.tsx';
import { AppClass } from '../Clasess/AppClass.js';
import { OrderClass } from '../Clasess/OrderClass.js';
import { sessionData } from '../modules/sessionData.js';

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

  const app = new AppClass()

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
    await app.greateOrder({...data.newOrder})
    .then(async (res) => {
      setOrders([new OrderClass(res.data), ...data.orders])
      setTimeout(() => setActive(0), 500)
    })
  })
  createLisener('createNewOrderAndPrint', async (data) => {
    await app.greateOrder({...data.newOrder})
    .then(async (res) => {setOrders([new OrderClass(res.data), ...data.orders])})
  })
  useEffect(() => {
    const navi = async () => {
      if(!await app.getCurrentUser() || !await app.getCampId() || !await app.getRole()){
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
    const res = await app.getOrders()
    setOrders(res.sort((a, b) => b.date - a.date))
    setInterval(async () => {
      if(sessionData('read', 'currentUser')){
        const res = await app.getOrders()
        setOrders(res.sort((a, b) => b.date - a.date))
      }
      else{
        console.log('pause update orders')
      }
    }, await app.timeUpdate())
  }
  const getText = async () => {
    const res = await app.getAppText()
    setText(res)
  }
  const getFixServiceSettings = async () => {
    const res = await app.fixServiceSettings()
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
    const res = await app.getColorApp()
    setAppColor(res)
  }
  
  if(navBar && appColor && text && serviceSettings && orders && newSet && filter){

    const screen = () => {
      
      const listScreens = [
        <ServiceScreen getOrders={getOrders} text={text} orders={orders} setOrders={setOrders} filter={filter} serviceSettings={serviceSettings} newSet={newSet} textFilter={textFilter}/>,
        <NewOrderScreen getOrders={getOrders} orders={orders} defaultValue={defaultValue} value={value} setValue={setValue} serviceSettings={serviceSettings}/>,
        <SettingsScreen app={app} text={text} serviceSettings={serviceSettings} setServiceSettings={setServiceSettings}/>,
        <GroupUsersScreen app={app} text={text} serviceSettings={serviceSettings} setServiceSettings={setServiceSettings}/>,
        <AdminScreen app={app} text={text} serviceSettings={serviceSettings} setServiceSettings={setServiceSettings}/>,
        <OwnerScreen app={app} text={text} serviceSettings={serviceSettings} setServiceSettings={setServiceSettings}/>,
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
          <NavbarMinimalColored 
          active={active} 
          setActive={setActive} 
          navBar={{...navBar, top: navBar.top.filter(async item => item.role.includes(await app.getRole()))}} 
          appColor={appColor}
          />
        </div>
        <div className={'NavBarTop'}>
          <HeaderSearch app={app} textFilter={textFilter} setTextFilter={setTextFilter} serviceSettings={serviceSettings} setServiceSettings={setServiceSettings} newSet={newSet} setNewSet={setNewSet}/>
          <div className={'NavBarTop2'}>
            <HeaderSearch2 app={app} filter={filter} setFilter={setFilter} serviceSettings={serviceSettings}/>
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

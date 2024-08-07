import { Button, Container, Select, SimpleGrid, Text, TextInput } from '@mantine/core'
import React, { useEffect, useState } from 'react'
import { dateToLokalFormatFull } from '../../modules/dateToLocalFormat.js'
import { TableOpenOrder } from '../../components/TableOpenOrder/TableOpenOrder.tsx'
import { ModalWindowPrint } from '../../components/ModalWindow/ModalWindowPrint.tsx'
import { ServiceTable } from '../../components/ServiceTable/ServiceTable.tsx'

export function OpenOrder(props: any) {

    const [newInfo, setNewInfo] = useState('')
    const [service, setService] = useState({service: '', price: 0, master: '', varant: 0, sebes: 0})
    const [campUsers, setCamUsers] = useState([])

    useEffect(() => {
      getUsers()
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const getUsers = async () => {
      const res = await props.app.getUsersOfCamp()
      setCamUsers(res.map(item => `${item.name} (${item.email})`))
    }
    const historyUpdate = async (text, status) => {
      await props.data.updateHistory(text, status)
      await props.getOrders()
    }
    const serviceUpdate = async (service) => {
      await props.data.addNewService(service)
      await props.getOrders()
    }
    const serviceUpdateSoglas = async (status) => {
      await props.data.updateServiceSoglas(status)
      await props.getOrders()
    }
    const serviceDelete = async (service) => {
      await props.data.deleteService(service)
      await props.getOrders()
    }
    const colorButton = (index) => {
      if(index === props.data.status) return 'red'
    }
    const disabledIfService = () => {
      if(props.data.service.length && props.data.status === 'close') return false
      return true
    }
    const disabledIfServiceCancel = () => {
      if(props.data.status === 'cancel') return false
      return true
    }

    const printBut = (but, index) => {
      if(but.print){
          // if(!but.disabled){
              return <ModalWindowPrint color={but.color} key={index} disabled={but.disabled} label={but.title} format={but.format} handler={but.func} data={props.data} settings={props.serviceSettings}/>
          // }
      }
      return <Button color={but.color} disabled={but.disabled} key={index} onClick={() => but.func()}>{but.title}</Button>
    }
    const topButtonsLine = () => {

      const arrayButtons = [
          {title: 'Удалить',
            disabled: disabledModeButtons('index'),
            print: false,
            color: 'red',
            func: async () =>  {
              await props.data.deleteOrder()
              props.close()
              props.getOrders()
            }
          },
          {title: 'Закрыть окно',
            disabled: disabledModeButtons('index'),
            print: false,
            func: async () => {
              props.close()
              }, 
          },
          {title: '🖨 Заказ',
          disabled: false,
          color: 'green',
          print: true,
          format: 'new',
          func: async () => {
              return props.data
          },
          },
          // {title: '🖨 Гарантия',
          // disabled: disabledIfService(),
          // color: 'green',
          // print: true,
          // format: 'var',
          // func: async () => {
          //     return props.data
          // },
          // },
          // {title: '🖨 Без ремонта',
          // disabled: disabledIfServiceCancel(),
          // color: 'green',
          // print: true,
          // format: 'cancel',
          // func: async () => {
          //     return props.data
          // },
          // }
      ]

        return (
          <div>
            <Container>
              <SimpleGrid
                mt={5}
                cols={{ base: 1, sm: 2, md: 6 }}
                spacing={{ base: 'xl', md: 15 }}
                verticalSpacing={{ base: 'md', md: 20 }}
              >
              {arrayButtons.map((but, index) => printBut(but, index))}
              </SimpleGrid>
            </Container>
          </div>
        )
    }
    const disabledModeButtons = (status) => {
      if(['close', 'cancel'].includes(status)){
          if(status === 'close' && !props.data.soglas){
          return true
        }
        else if(status === 'cancel' && props.data.soglas){
          return true
        }
      }
      if(['close', 'cancel'].includes(props.data.status)){
        if(['process','diagnostics', 'agreement', 'ready','close', 'cancel'].includes(status))
          return true
        }
      return false
    }
    // const bottomButtonsLine = () => {
    //   const arrayButtons: any = []
    //   for(let i of props.serviceSettings.generalStatusList){
    //     if(i.index === 'warranty' &&  !['cancel', 'close'].includes(props.data.status)){

    //     }
    //     else{
    //         arrayButtons.push({
    //         title: i.label,
    //         color: colorButton(i.index),
    //         disabled: disabledModeButtons(i.index),
    //         print: false,
    //         func: async () => {
    //           if(i.index !== 'new'){
    //             await historyUpdate(`Установлен статус: "${i.label}"`, i.index)
    //           }
    //           else if(['cancel', 'close'].includes(props.data.status) && i.index === 'new'){
    //             await historyUpdate(`Установлен статус: "${i.label}"`, i.index)
    //           }
    //         }
    //       })
    //     }
    //   }

    //   return (
    //     <div>
    //       <Container>
    //         <SimpleGrid
    //           mt={5}
    //           cols={{ base: 1, sm: 2, md: arrayButtons.length }}
    //           spacing={{ base: 'xl', md: 15 }}
    //           verticalSpacing={{ base: 'md', md: 20 }}
    //         >
    //         {arrayButtons.map((but, index) => printBut(but, index))}
    //         </SimpleGrid>
    //       </Container>
    //     </div>
    //   )
    // }
    const filterButtons = (data) => {
      let ar
      if(props.data.soglas){
        ar = data.filter(item => item.index !== 'cancel')
      }
      else{
        ar = data.filter(item => item.index !== 'close')
      }
      return ar

    }

    const bottomButtonsLine = () => {
      const arrayButtons: any = []
      for(let i of filterButtons(props.serviceSettings.generalStatusList)){
        if(['cancel', 'close'].includes(i.index)){
          arrayButtons.push({
            title: '🖨 ' + i.label,
            color: colorButton(i.index),
            disabled: disabledModeButtons(i.index),
            print: true,
            format: i.index,
            func: async () => {
              // if(i.index !== 'new'){
                await historyUpdate(`Установлен статус: "${i.label}"`, i.index)
              // }
              // else if(['cancel', 'close'].includes(props.data.status) && i.index === 'new'){
              //   await historyUpdate(`Установлен статус: "${i.label}"`, i.index)
              // }
              return props.data
            }
          })
        }
        else{
          arrayButtons.push({
            title: i.label,
            color: colorButton(i.index),
            disabled: disabledModeButtons(i.index),
            print: false,
            func: async () => {
              if(i.index !== 'new'){
                await historyUpdate(`Установлен статус: "${i.label}"`, i.index)
              }
              else if(['cancel', 'close'].includes(props.data.status) && i.index === 'new'){
                await historyUpdate(`Установлен статус: "${i.label}"`, i.index)
              }
            }
          })
        }
            
      }

      return (
        <div>
          <Container>
            <SimpleGrid
              mt={5}
              cols={{ base: 1, sm: 2, md: arrayButtons.length }}
              spacing={{ base: 'xl', md: 15 }}
              verticalSpacing={{ base: 'md', md: 20 }}
            >
            {arrayButtons.map((but, index) => printBut(but, index))}
            </SimpleGrid>
          </Container>
        </div>
      )
    }

    const dataForShow = () => {

      const fieldsOfOrder = Object.keys(props.data).filter(item => item !== 'historylist')
      const settingsField = props.serviceSettings.generalOrderList.filter(item => item.card === true).map((item: any) => item.index)
      const newAr : string[] = []

      const lookData = (i: string) => {
        if(i === 'date'){
          return dateToLokalFormatFull(props.data[i])
        }
        else if(i === 'dateOut'){
          if(props.data[i] !== 0){
            return dateToLokalFormatFull(props.data[i])
          }
          return ''
          
        }
        return props.data[i]
      }

      for(let i of settingsField){
        if(fieldsOfOrder.includes(i)){
            const res: any = {title: (props.serviceSettings.generalOrderList.find((item: any) => item.index === i)).label, text: lookData(i)}
            newAr.push(res)
        }
      }
      return  <TableOpenOrder order={newAr}/>
    }
    const historyList = () => {
      return (
        props.data.historylist.sort((a, b) => b.date - a.date).map((item, index) => 
        <Container key={index}>
          <Text fw={700}>{dateToLokalFormatFull(item.date).substring(0,17)} {`(`}{item.name}{`)`} {item.text}</Text>
          {/* <Text>{item.text}</Text> */}
          <hr></hr>
        </Container>
        )
      )
    }
    const addBut = (text) => {
      if(text === '') return true
      return false
    }
    const addButService = (text) => {
      if(text.service === '' || text.master === '') return true
      return false
    }
    const serviceList = () => {
      const soglasCheck = () => {
        if(props.data.soglas) return '✅'
      }
      const statusShowSoglas = () => {
        if(['ready', 'close', 'cancel', 'warranty'].includes(props.data.status)){
          return (
            <div style={{marginTop: '1vmax'}}>
            <SimpleGrid cols={6} style={{marginBottom: '0.5vmax', alignItems: 'center'}}>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div style={{textAlign: 'right'}}>{soglasCheck()} <b>Сумма {props.data.service.reduce((a, b) => a + b.price, 0)} р</b></div>
            </SimpleGrid>
            </div>
          )
        }
        return (
          <SimpleGrid cols={6} style={{marginBottom: '0.5vmax', alignItems: 'center'}}>
          <div></div>
          <div></div>
          <div></div>
          <div style={{textAlign: 'right'}}>{soglasCheck()} <b>Сумма {props.data.service.reduce((a, b) => a + b.price, 0)} р</b></div>
          <Button disabled={props.data.soglas} onClick={() => {serviceUpdateSoglas(true)}}>Согласовано</Button>
          <Button disabled={!props.data.soglas} onClick={() => {serviceUpdateSoglas(false)}}>Отказ</Button>
        </SimpleGrid>
        )
      }
      
      if(props.data.service.length) return (
        <>
        {statusShowSoglas()}
        <ServiceTable data={props.data.service} status={props.data.status} delete={serviceDelete}/>
        </>
      )
    }
    const showItemsNewOrder = () => {
      if(props.data.status !== 'new'){
        const ifReadyOrder = () => {
          if(['process', 'diagnostics', 'agreement'].includes(props.data.status)){
            return (
              <div>
                <div style={{ marginBottom: '1vmax', marginTop: '1.5vmax'}}>
            <TextInput 
            label="Информация" 
            value={newInfo} 
            placeholder="Добавить новое действие" 
            onChange={event => {
              setNewInfo(event.currentTarget.value)
            }}
            />
            <Button mt="sm" disabled={addBut(newInfo)} onClick={() => {
                historyUpdate(newInfo, false)
                setNewInfo('')
                }}>
              Добавить информацию
            </Button>
            </div>
            <div style={{ marginBottom: '1.5vmax', marginTop: '1vmax'}}>
              <TextInput width={'5vmax'} label="Услуга" value={service.service} placeholder="Услуга" onChange={event => setService({...service, service: event.currentTarget.value})}/>
            <SimpleGrid cols={4}>
              <TextInput 
                label="Стоимость" 
                value={service.price}
                onChange={event => {
                  if(/^\d+$/.test(event.currentTarget.value)){
                    setService({...service, price: Number(event.currentTarget.value)})
                  }
                  else{
                    setService({...service, price: 0})
                  }
                }}
              />
              <TextInput 
                label="Расходы" 
                value={service.sebes}
                onChange={event => {
                  if(/^\d+$/.test(event.currentTarget.value)){
                    setService({...service, sebes: Number(event.currentTarget.value)})
                  }
                  else{
                    setService({...service, sebes: 0})
                  }
                }}
              />
              <TextInput 
                label="Гарантия (дней)" 
                value={service.varant} 
                placeholder="печатай сюда" 
                onChange={event => {
                  if(/^\d+$/.test(event.currentTarget.value)){
                    setService({...service, varant: Number(event.currentTarget.value)})
                  }
                  else{
                    setService({...service, varant: 0})
                  }
                }}
              />
              <Select
                    label="Мастер"
                    value={service.master}
                    clearable
                    data={campUsers}
                    onChange={(value) => setService({...service, master: value ? value : ''})}
                />
            </SimpleGrid>  
              <Button mt="sm" disabled={addButService(service)} onClick={() => {
                serviceUpdate(service)
                setService({service: '', price: 0, master: '', varant: 0, sebes: 0})
                }}>
              Добавить услугу
              </Button>
            </div>
              </div>
            )
          }
        }
        return (
          <div>
          {ifReadyOrder()}
          {serviceList()}
          </div>
        )
      }
      return (
        <div style={{marginTop: '1vmax'}}>
          <hr></hr>
        </div>
      ) 
    }

    return (
        <Container>
          {topButtonsLine()}
          <hr style={{ marginTop: '0.75vmax', marginBottom: '0.75vmax'}}></hr>
          {bottomButtonsLine()}
          {showItemsNewOrder()}
          {historyList()}
          <div style={{ marginTop: '2vmax', marginBottom: '2vmax'}}>
          {dataForShow()}
          </div>
        </Container>
    )
}
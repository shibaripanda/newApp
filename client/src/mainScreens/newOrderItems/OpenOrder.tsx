import { Button, Container, Grid, SimpleGrid, Text, TextInput } from '@mantine/core'
import React, { useState } from 'react'
import { dateToLokalFormatFull } from '../../modules/dateToLocalFormat.js'
import { axiosCall } from '../../modules/axiosCall.js'
import { sessionData } from '../../modules/sessionData.js'
import { TableOpenOrder } from '../../components/TableOpenOrder/TableOpenOrder.tsx'
import { ModalWindowPrint } from '../../components/ModalWindow/ModalWindowPrint.tsx'
import { ServiceTable } from '../../components/ServiceTable/ServiceTable.tsx'

export function OpenOrder(props: any) {

  const [newInfo, setNewInfo] = useState('')
  const [service, setService] = useState({service: '', price: 0, master: '', varant: 0})


  // console.log(props.data)

    const printBut = (but, index) => {
      if(but.print){
          if(!but.disabled){
              return <ModalWindowPrint color={but.color} key={index} disabled={but.disabled} label={but.title} format={but.format} handler={but.func} data={props.data} settings={props.serviceSettings}/>
          }
      }
      return <Button color={but.color} disabled={but.disabled} key={index} onClick={() => but.func()}>{but.title}</Button>
    }
    const disabledModeButtons = () => {
      const status = props.data.historylist.find(item => item.text === 'block' || 'open')
      if(status.text === 'open' && status.name !== sessionData('read', 'currentUser')){
          return true
      }
      return false
    }
    const historyUpdate = async (text, status) => {
      if(!status){
        await axiosCall('PUT', `http://localhost:5000/api/orders/${props.data._id}`, {$addToSet: {
          historylist: {date: Date.now(),
             text: text,
              name: sessionData('read', 'name')}
            }})
      }
      else{
        await axiosCall('PUT', `http://localhost:5000/api/orders/${props.data._id}`, {status: status, $addToSet: {
          historylist: {date: Date.now(), 
            text: text, 
            name: sessionData('read', 'name')}
          }})
      }
      props.getOrders()
    }
    const serviceUpdate = async (service) => {
        await axiosCall('PUT', `http://localhost:5000/api/orders/${props.data._id}`, {$addToSet: {
            historylist: {
              date: Date.now(),
              text: 'Добавлена услуга: ' + service.service + ', ' + service.price + 'руб, ' + service.varant + 'дней, ' + service.master,
              name: sessionData('read', 'name')
            },
            service: service
          }
        })
      
      props.getOrders()
    }
    const serviceDelete = async (service) => {
      await axiosCall('PUT', `http://localhost:5000/api/orders/${props.data._id}`, {$addToSet: {
          historylist: {
            date: Date.now(),
            text: 'Удалена услуга: ' + service.service + ', ' + service.price + 'руб, ' + service.varant + 'дней, ' + service.master,
            name: sessionData('read', 'name')
          }
        }, $pull: {service: service}
      })
    
    props.getOrders()
  }
    const colorButton = (index) => {
      if(index === props.data.status) return 'red'
    }

    const topButtonsLine = () => {

      const arrayButtons = [
          {title: 'Удалить',
            disabled: disabledModeButtons(),
            print: false,
            color: 'red',
            func: async () =>  {
              await axiosCall('DELETE', `http://localhost:5000/api/orders/${props.data._id}`, {})
              props.close()
              clearTimeout(props.timerBlock)
              props.getOrders()
            }
          },
          {title: 'Закрыть окно',
            disabled: disabledModeButtons(),
            print: false,
            func: async () => {
              props.close()
              clearTimeout(props.timerBlock)
              }, 
          },
          {title: '🖨 Заказ',
          disabled: false, //checkDisabledSave(),
          color: 'green',
          print: true,
          format: 'order',
          func: async () => {
              return props.data
          },
          },
          {title: '🖨 Гарантия',
          disabled: false, //checkDisabledSave(),
          color: 'green',
          print: true,
          format: 'var',
          func: async () => {
              return props.data
          },
          },
          {title: '🖨 Без ремонта',
          disabled: false, //checkDisabledSave(),
          color: 'green',
          print: true,
          format: 'var',
          func: async () => {
              return props.data
          },
          }
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
    const bottomButtonsLine = () => {
      const arrayButtons: any = []
      for(let i of props.serviceSettings.listOfStatuses){
        arrayButtons.push({
          title: i.label,
          color: colorButton(i.index),
          disabled: disabledModeButtons(),
          print: false,
          func: async () => await historyUpdate('Установлен статус: ' + `"${i.label}"`, i.index)
        })
      }

      return (
        <div>
          <Container>
            <SimpleGrid
              mt={5}
              cols={{ base: 1, sm: 2, md: 7 }}
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
      const settingsField = props.serviceSettings.listOrdersFields.filter(item => item.card === true).map((item: any) => item.index)
      const newAr : string[] = []

      const lookData = (i: string) => {
        if(i === 'date'){
          return dateToLokalFormatFull(props.data[i])
        }
        return props.data[i]
      }

      for(let i of settingsField){
        if(fieldsOfOrder.includes(i)){
            const res: any = {title: (props.serviceSettings.listOrdersFields.find((item: any) => item.index === i)).label, text: lookData(i)}
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
      if(props.data.service.length) return <ServiceTable data={props.data.service} delete={serviceDelete}/>
    }

    return (
        <Container>
          {topButtonsLine()}
          <hr style={{ marginTop: '0.75vmax', marginBottom: '0.75vmax'}}></hr>
          {bottomButtonsLine()}
          
          <div style={{ marginBottom: '1vmax', marginTop: '1.5vmax'}}>
            <TextInput label="Информация" value={newInfo} placeholder="Добавить новое действие" onChange={event => setNewInfo(event.currentTarget.value)}/>
            <Button mt="sm" disabled={addBut(newInfo)} onClick={() => {
                historyUpdate(newInfo, false)
                setNewInfo('')
                }}>
              Добавить информацию
            </Button>
          </div>
          <div style={{ marginBottom: '1.5vmax', marginTop: '1vmax'}}>
              <TextInput width={'5vmax'} label="Услуга" value={service.service} placeholder="Услуга" onChange={event => setService({...service, service: event.currentTarget.value})}/>
            <SimpleGrid cols={3}>
              <TextInput label="Стоимость" value={service.price} placeholder="печатай сюда" onChange={event => setService({...service, price: Number(event.currentTarget.value)})}/>
              <TextInput label="Мастер" value={service.master} placeholder="печатай сюда" onChange={event => setService({...service, master: event.currentTarget.value})}/>
              <TextInput label="Гарантия (дней)" value={service.varant} placeholder="печатай сюда" onChange={event => setService({...service, varant: Number(event.currentTarget.value)})}/>
            </SimpleGrid>  
              <Button mt="sm" disabled={addButService(service)} onClick={() => {
                serviceUpdate(service)
                setService({service: '', price: 0, master: '', varant: 0})
                }}>
              Добавить услугу
              </Button>
          </div>
          {serviceList()}
          {historyList()}
          <div style={{ marginTop: '2vmax', marginBottom: '2vmax'}}>
          {dataForShow()}
          </div>
          
          
        </Container>
    )
}
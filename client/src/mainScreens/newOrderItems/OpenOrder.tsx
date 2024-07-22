import { Button, Container, SimpleGrid, Text } from '@mantine/core'
import React from 'react'
import { dateToLokalFormatFull } from '../../modules/dateToLocalFormat.js'
import { axiosCall } from '../../modules/axiosCall.js'
import { sessionData } from '../../modules/sessionData.js'
import { TableOpenOrder } from '../../components/TableOpenOrder/TableOpenOrder.tsx'
import { ModalWindowPrint } from '../../components/ModalWindow/ModalWindowPrint.tsx'

export function OpenOrder(props: any) {
  console.log(props.serviceSettings.listOfStatuses)
  console.log(props.data)

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
      console.log(text, status)
      if(!status){
        await axiosCall('PUT', `http://localhost:5000/api/orders/${props.data._id}`, {$addToSet: {historylist: {date: Date.now(), text: text, name: sessionData('read', 'currentUser')}}})
      }
      else{
        await axiosCall('PUT', `http://localhost:5000/api/orders/${props.data._id}`, {status: status, $addToSet: {historylist: {date: Date.now(), text: text, name: sessionData('read', 'currentUser')}}})
      }
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
          <Text fw={700}>{dateToLokalFormatFull(item.date)} {`(`}{item.name}{`)`} {item.text}</Text>
          {/* <Text>{item.text}</Text> */}
          <hr></hr>
        </Container>
        )
      )
    }

    return (
        <Container>
          {topButtonsLine()}
          <hr style={{ marginTop: '0.75vmax', marginBottom: '0.75vmax'}}></hr>
          {bottomButtonsLine()}
          <div style={{ marginTop: '2vmax', marginBottom: '2vmax'}}>
          {dataForShow()}
          </div>
          {/* <hr style={{ marginTop: '1vmax', marginBottom: '1vmax'}}></hr>
          <hr style={{ marginTop: '1vmax', marginBottom: '1vmax'}}></hr> */}
          {historyList()}
        </Container>
    )
}
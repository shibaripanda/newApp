import { Button, Container, SimpleGrid, Text } from '@mantine/core'
import React from 'react'
import { dateToLokalFormatFull } from '../../modules/dateToLocalFormat.js'
import { axiosCall } from '../../modules/axiosCall.js'
import { sessionData } from '../../modules/sessionData.js'
import { TableOpenOrder } from '../../components/TableOpenOrder/TableOpenOrder.tsx'
import { ModalWindowPrint } from '../../components/ModalWindow/ModalWindowPrint.tsx'

export function OpenOrder(props: any) {

    const historyUpdate = async (text, status) => {
      if(!status){
        await axiosCall('PUT', `http://localhost:5000/api/orders/${props.data._id}`, {$addToSet: {historylist: {date: Date.now(), text: text, name: sessionData('read', 'currentUser')}}})
      }
      else{
        await axiosCall('PUT', `http://localhost:5000/api/orders/${props.data._id}`, {status: status, $addToSet: {historylist: {date: Date.now(), text: text, name: sessionData('read', 'currentUser')}}})
      }
      props.getOrders()
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
      return newAr
    }
    const changeStatusBut = () => {
      const status = props.data.historylist.find(item => item.text === 'block' || 'open')
      const disabledModeButtons = () => {
        if(status.text === 'open' && status.name !== sessionData('read', 'currentUser')){
            return true
        }
        return false
      }
      const printBut = (but, index) => {
          if(but.print){
              if(!but.disabled){
                  return <ModalWindowPrint color={but.color} key={index} disabled={but.disabled} label={but.title} format={'order'} handler={but.func} data={props.data}/>
              }
          }
          return <Button color={but.color} disabled={but.disabled} key={index} onClick={() => but.func()}>{but.title}</Button>
      }

      const arrayButtons = [
        {title: 'Готов',
          disabled: disabledModeButtons(),
          print: false,
          // color: 'green',
          func: async () => await historyUpdate('Назначен статус готов', 'close'),
        },
        {title: 'Закрыть',
          disabled: disabledModeButtons(),
          print: false,
          // color: 'green',
          func: async () => {
            props.close()
            clearTimeout(props.timerBlock)
            }, 
        },
        {title: 'Удалить',
          disabled: disabledModeButtons(),
          // color: 'green',
          print: false,
          func: async () =>  {
            await axiosCall('DELETE', `http://localhost:5000/api/orders/${props.data._id}`, {})
            props.close()
            clearTimeout(props.timerBlock)
            props.getOrders()
            }
        },
        {title: 'Готов',
          disabled: disabledModeButtons(),
          // color: 'green',
          print: false,
          func: async () =>  {
            await historyUpdate('Назначен статус готов', 'ready')
          },
        },
        {title: 'В ремонт',
          disabled: disabledModeButtons(),
          // color: 'green',
          print: false,
          func: async () =>  {
            await historyUpdate('Назначен статус В ремонте', 'process')
          },
        },
        {title: 'Печать',
          disabled: disabledModeButtons(),
          // color: 'green',
          print: true,
          func: async () =>  {
            
          },
        }
    ]

        return (
          <>
          {arrayButtons.map((but, index) => printBut(but, index))}
          {/* {arrayButtons.filter(item => item.key !== props.data.status)} */}
          </>
        )
    }
    const titleComponent = () => {
        return (
          <div>
            <Container>
              <SimpleGrid
                mt={5}
                cols={{ base: 1, sm: 2, md: 6 }}
                spacing={{ base: 'xl', md: 15 }}
                verticalSpacing={{ base: 'md', md: 20 }}
              >
              {changeStatusBut()}
              </SimpleGrid>
            </Container>
          </div>
        )
    }
    const historyList = () => {
      return (
        props.data.historylist.sort((a, b) => b.date - a.date).map((item, index) => 
        <Container key={index}>
          <Text fw={700}>{dateToLokalFormatFull(item.date)} {`(`}{item.name}{`)`}</Text>
          <Text>{item.text}</Text>
          <hr></hr>
        </Container>
        )
      )
    }
    
    return (
        <Container>
          {titleComponent()}
          <div style={{ marginTop: '2vmax', marginBottom: '2vmax'}}>
          <TableOpenOrder order={dataForShow()}/>
          </div>
          {/* <hr style={{ marginTop: '1vmax', marginBottom: '1vmax'}}></hr>
          <hr style={{ marginTop: '1vmax', marginBottom: '1vmax'}}></hr> */}
          {historyList()}
        </Container>
    )
}
import { Button, Container, SimpleGrid, Text } from '@mantine/core';
// import classes from './FeaturesGrid.module.css';
import React from 'react';
// import { ComboBoxInput } from '../../components/ComboInputBox/ComboBoxInput.tsx';
import { dateToLokalFormatFull } from '../../modules/dateToLocalFormat.js';
import { axiosCall } from '../../modules/axiosCall.js';
// import { ButtonsForNewOrder } from '../../components/ButtonsForNewOrder/ButtonsForNewOrder.tsx';
// import { ComboBoxInput } from '../ComboInputBox/ComboBoxInput.tsx';

export function OpenOrder(props: any) {
  console.log(props)

    const fieldsOfOrder = Object.keys(props.data)
    const settingsField = props.serviceSettings.listOrdersFields.filter(item => item.card === true).map((item: any) => item.index)

    const dataForShow = () => {
      const newAr : string[] = []
      const lookData = (i: string) => {
        if(i === 'date'){
          return dateToLokalFormatFull(props.data[i])
        }
        return props.data[i]
      }
      // for(let i of fieldsOfOrder){
      //     if(settingsField.includes(i)){
      //         const res: any = {title: (props.serviceSettings.listOrdersFields.find((item: any) => item.index === i)).label, text: lookData(i)}
      //         newAr.push(res)
      //     }
      // }
      for(let i of settingsField){
        if(fieldsOfOrder.includes(i)){
            const res: any = {title: (props.serviceSettings.listOrdersFields.find((item: any) => item.index === i)).label, text: lookData(i)}
            newAr.push(res)
        }
    }
      console.log(newAr)
      return newAr
    }

    const data = dataForShow()

    const features = data.map((item: any, index) => 
        <div key={index}>
          <Container>
            <Text fw={700}>{item.title}</Text>
            <Text>{item.text}</Text>
          </Container>
        </div>
    )

    // const titleComponent = () => {
    //     return (
    //       <div>
    //         <Container>
    //           <SimpleGrid
    //             mt={5}
    //             cols={{ base: 1, sm: 2, md: 6 }}
    //             spacing={{ base: 'xl', md: 15 }}
    //             verticalSpacing={{ base: 'md', md: 20 }}
    //           >
    //             <Button onClick={() =>  {
    //                 props.close()
    //                 }}>
    //                 Закрыть
    //             </Button>
    //             <Button onClick={async () =>  {
    //                 await axiosCall('DELETE', `http://localhost:5000/api/orders/${props.data._id}`, {})
    //                 props.close()
    //                 props.getOrders()
    //                 }}>
    //                 Удалить
    //             </Button>
    //           </SimpleGrid>
    //         </Container>
    //       </div>
    //     )
    // }

    return (
        <Container>
            {/* {titleComponent()} */}
        <SimpleGrid
            mt={5}
            cols={{ base: 1, sm: 2, md: 4 }}
            spacing={{ base: 'xl', md: 50 }}
            verticalSpacing={{ base: 'md', md: 20 }}
        >
            {features}
        </SimpleGrid>
        {/* <ComboBoxInput/> */}
        </Container>
    )
}
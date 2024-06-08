import { Button, Container, SimpleGrid, Text } from '@mantine/core';
// import classes from './FeaturesGrid.module.css';
import React from 'react';
import { ComboBoxInput } from '../../components/ComboInputBox/ComboBoxInput.tsx';
import { dateToLokalFormat, dateToLokalFormatFull } from '../../modules/dateToLocalFormat.js';
import { ButtonsForNewOrder } from '../../components/ButtonsForNewOrder/ButtonsForNewOrder.tsx';
// import { ComboBoxInput } from '../ComboInputBox/ComboBoxInput.tsx';

export function OpenOrder(props) {

    const fieldsOfOrder = Object.keys(props.data)
    const settingsField = props.serviceSettings.listOrdersFields.map(item => item.index)

    const dataForShow = () => {
        const newAr = []
        const lookData = (i) => {
            if(i === 'date'){
              return dateToLokalFormatFull(props.data[i])
            }
            return props.data[i]
          }
        for(let i of fieldsOfOrder){
            console.log(i)
            if(settingsField.includes(i)){
                const res: { title: string; text: string } = {title: (props.serviceSettings.listOrdersFields.find(item => item.index === i)).label, text: lookData(i)}
                newAr.push(res)
            }
            else{
              const res: { title: string; text: string } = {title: i, text: props.data[i]}
                newAr.push(res)
            }
        }
       return newAr
    }
    const data = dataForShow()
    const features = data.map((item, index) => 
        <div key={index}>
            <Container>
                <Text fw={700}>{item.title}</Text>
                <Text>{item.text}</Text>
            </Container>
        </div>
    )

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
                <Button>
                  edfdf
                </Button>
                <Button>
                  edfdf
                </Button>
                <Button>
                  edfdf
                </Button>
                <Button>
                  edfdf
                </Button>
                <Button>
                  edfdf
                </Button>
                <Button>
                  edfdf
                </Button>
              </SimpleGrid>
            </Container>
          </div>
        )
      }

    return (
        <Container>
            {titleComponent()}
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
    );
}
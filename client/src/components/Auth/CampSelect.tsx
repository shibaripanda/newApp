import React from 'react';
import {
    Anchor,
    Paper,
    Title,
    Text,
    Container,
    Button,
  } from '@mantine/core';
  import classes from './AuthenticationTitle.module.css';
  
  export function CampSelect(props) {
    console.log(props)

    const botton = () => {
        return props.camps.map((item, index) => 
          <Button key={index} fullWidth mt="xl" onClick={() => props.clickOnBut(item._id)}>
            {item.name}
          </Button>
        )
    }
    
    return (
      <Container size={420} my={40}>
        <Title ta="center" className={classes.title}>
          {props.text.YourCampanies}
        </Title>
        <Text c="dimmed" size="sm" ta="center" mt={5}>
          <Anchor size="sm" component="button" onClick={() => props.setStep(3)}>
            {props.text.CreateService}
          </Anchor>
        </Text>
  
        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
          {botton()}
        </Paper>
      </Container>
    );
  }
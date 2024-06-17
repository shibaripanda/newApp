import React, { useEffect } from 'react';
import {
    Anchor,
    Paper,
    Title,
    Text,
    Container,
    Button,
  } from '@mantine/core';
  import classes from './AuthenticationTitle.module.css';
  import { useNavigate } from 'react-router-dom';
import { sessionData } from '../../modules/sessionData';
  
  export function CampSelect(props) {
    const navigate = useNavigate()

    useEffect(() => {
      if(props.camps.length === 1){
        sessionData('write', 'campId', props.camps[0]._id)
        navigate('/main')
      }
    }, [navigate, props.camps])

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
    )
  }
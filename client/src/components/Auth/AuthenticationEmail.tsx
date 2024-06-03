import React from 'react';
import {
    TextInput,
    Anchor,
    Paper,
    Title,
    Text,
    Container,
    Button,
  } from '@mantine/core';
  import classes from './AuthenticationTitle.module.css';
  
  export function AuthenticationEmail(props) {

    const botton = () => {
      if(props.activBotton){
        return (
          <Button fullWidth mt="xl" onClick={() => props.clickOnBut()}>
            {props.text.GetPassword}
          </Button>
        )
      }
      return (
        <Button fullWidth mt="xl" onClick={() => props.clickOnBut()} disabled>
          {props.text.GetPassword}
        </Button>
      )
    }
    
    return (
      <Container size={420} my={40}>
        <Title ta="center" className={classes.title}>
          {props.text.welcom}
        </Title>
        <Text c="dimmed" size="sm" ta="center" mt={5}>
          {props.text.DoNotHaveAServiceYet}{' '}
          <Anchor size="sm" component="button" onClick={() => props.setStep(3)}>
            {props.text.CreateService}
          </Anchor>
        </Text>
  
        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
          <TextInput label="Email" placeholder="email" required onChange={event => {props.setEmail(event.currentTarget.value)}} error={props.errorInputData}/>
          {botton()}
        </Paper>
      </Container>
    );
  }
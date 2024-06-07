import { useDisclosure } from '@mantine/hooks';
import { Button, Container, Modal, SimpleGrid, Table, Text } from '@mantine/core';
import React from 'react';
import { OpenOrder } from '../../mainScreens/OpenOrder.tsx';
import { dateToLokalFormat } from '../../modules/dateToLocalFormat.js';

export function ModalWindow(props) {
    
  const [opened, { open, close }] = useDisclosure(false);

  const titleComponent = () => {
    return (
      <div>
        <Text 
          fw={700}>{props.data.orderId + ' / ' + dateToLokalFormat(props.data.date) + ' /' + props.data.status}
        </Text> 
        <Container>
          <SimpleGrid
            mt={5}
            cols={{ base: 1, sm: 2, md: 3 }}
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
          </SimpleGrid>
        </Container>
      </div>
    )
  }

    return (
        <>
            <Modal 
            radius={'md'} 
            size={'xxl'} 
            opened={opened} 
            onClose={close} 
            title={titleComponent()} 
            withCloseButton={false}
            >
                <div><OpenOrder serviceSettings={props.serviceSettings} data={props.data}/></div>
            </Modal>
            <Table.Tr key={props.data.title} style={{cursor: 'pointer'}} onClick={open}>
            {props.row}
            </Table.Tr>
        </>
      );
}
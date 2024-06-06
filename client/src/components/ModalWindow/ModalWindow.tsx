import { useDisclosure } from '@mantine/hooks';
import { Modal, Table, Text } from '@mantine/core';
import React from 'react';
import { OpenOrder } from '../../mainScreens/OpenOrder.tsx';

export function ModalWindow(props) {
    
  const [opened, { open, close }] = useDisclosure(false);

  // console.log(props.data)

    return (
        <>
            <Modal radius={'md'} size={'xxl'} opened={opened} onClose={close} title={<Text fw={700}>{props.data.orderId + ' ' + props.data.date + ' ' + props.data.status}</Text>} withCloseButton={false}>
                <div><OpenOrder serviceSettings={props.serviceSettings} data={props.data}/></div>
            </Modal>
            <Table.Tr key={props.data.title} style={{cursor: 'pointer'}} onClick={open}>
            {props.row}
            </Table.Tr>
        </>
      );
}
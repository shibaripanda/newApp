import { useDisclosure } from '@mantine/hooks';
import { Modal, Table } from '@mantine/core';
import React from 'react';
import { OpenOrder } from '../FeaturesGrid/OpenOrder.tsx';

export function ModalWindow(props) {
    
  const [opened, { open, close }] = useDisclosure(false);

  // console.log(props.data)

    return (
        <>
            <Modal radius={'md'} size={'xxl'} opened={opened} onClose={close} title={props.data.title} withCloseButton={false}>
                <div><OpenOrder serviceSettings={props.serviceSettings} data={props.data}/></div>
            </Modal>
            <Table.Tr key={props.data.title} style={{cursor: 'pointer'}} onClick={open}>
            {props.row}
            </Table.Tr>
        </>
      );
}
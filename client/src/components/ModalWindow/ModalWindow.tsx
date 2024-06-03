import { useDisclosure } from '@mantine/hooks';
import { Modal, Table } from '@mantine/core';
import React from 'react';

export function ModalWindow(props) {
    
  const [opened, { open, close }] = useDisclosure(false);

  // console.log(props.data)

    return (
        <>
            <Modal opened={opened} onClose={close} title="Authentication" withCloseButton={false}>
                {props.data.title}
            </Modal>
            <Table.Tr key={props.data.title} style={{cursor: 'pointer'}} onClick={open}>
            {props.row}
            </Table.Tr>
        </>
      );
}
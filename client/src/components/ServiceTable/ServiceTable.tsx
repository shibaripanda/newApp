import React from 'react';
import { Table, Button } from '@mantine/core'


export function ServiceTable(props) {

  const rows = props.data.map((row, index) => {

    return (
      <Table.Tr key={row.service}>
        <Table.Td>{index + 1}</Table.Td>
        <Table.Td>{row.service}</Table.Td>
        <Table.Td>{row.master}</Table.Td>
        <Table.Td>{row.varant}</Table.Td>
        <Table.Td>{row.price}</Table.Td>
        <Table.Td><Button color={'red'} onClick={() => {props.delete(row)}}>Удалить</Button></Table.Td>
      </Table.Tr>
    )

  })

  return (
    <Table.ScrollContainer minWidth={800}>
      <Table verticalSpacing="xs" border={1}>
        <Table.Thead>
          <Table.Tr>
            <Table.Th key={1}></Table.Th>
            <Table.Th key={2}>Услуга</Table.Th>
            <Table.Th key={3}>Мастер</Table.Th>
            <Table.Th key={4}>Гарантия (дней)</Table.Th>
            <Table.Th key={5}>Стоимость</Table.Th>
            <Table.Th key={6}>Состояние</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
            {rows}
            <Table.Td colSpan={6}><b>Сумма {props.data.reduce((a, b) => a + b.price, 0)} руб.</b></Table.Td>
        </Table.Tbody>
      </Table>
    </Table.ScrollContainer>
  );
}
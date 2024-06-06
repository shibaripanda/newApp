import { Table } from '@mantine/core';
// import classes from './TableReviews.module.css';
import React from 'react';
import { ModalWindow } from '../ModalWindow/ModalWindow.tsx';

export function TableReviews(props) {
  
  const activTableCols = props.serviceSettings.listOrdersFields.filter(item => item.maintable === true)
  const activTableColsHeader = activTableCols.map(item => item.index)

  const makeRows = (row) => {
    return activTableColsHeader.map((item, index) => <Table.Td key={index}>{row[item]}</Table.Td>)
  }

  const rows = props.data.map((row) => <>{makeRows(row)}</>)

  return (
    <Table.ScrollContainer minWidth={200}>
      <Table verticalSpacing="xs" striped withRowBorders={false}>
        <Table.Thead>
          <Table.Tr key={'new'}>
            {activTableCols.map((item, index) => <Table.Th key={index}>{item.label}</Table.Th>)}
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {rows.map((row, index) => <ModalWindow serviceSettings={props.serviceSettings} data={props.data[index]} key={index} row={row}/>)}
        </Table.Tbody>
      </Table>
    </Table.ScrollContainer>
  );
}
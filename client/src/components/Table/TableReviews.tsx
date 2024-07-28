import { Table } from '@mantine/core'
import React from 'react';
import { ModalWindow } from '../ModalWindow/ModalWindow.tsx';
import { dateToLokalFormatForMainTable } from '../../modules/dateToLocalFormat.js'

export function TableReviews(props) {
  
  const getTable = () => {
    const res: any = []
    for(const i of props.serviceSettings.userMainTable){
      res.push(props.serviceSettings.generalOrderList.find((item: any) => item.index === i))
    }
    return res
  }
  const activTableCols = getTable()
  const activTableColsHeader = activTableCols.map(item => item.index)

  const makeRows = (row) => {
    const lookData = (row, item) => {
      if(item === 'date'){
        return dateToLokalFormatForMainTable(row[item])
      }
      return row[item]
    }
    return activTableColsHeader.map((item, index) => <Table.Td key={index}>{lookData(row, item)}</Table.Td>)
  }

  const rows = props.filteringOrders.map((row) => <>{makeRows(row)}</>)

  return (
    <Table.ScrollContainer minWidth={200}>
      <Table verticalSpacing="xs" striped withRowBorders={false}>
        <Table.Thead>
          <Table.Tr key={'new'}>
            {activTableCols.map((item, index) => <Table.Th key={index}>{item.label}</Table.Th>)}
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {rows.map((row, index) => <ModalWindow filteringOrders={props.filteringOrders} setOrders={props.setOrders} getOrders={props.getOrders} serviceSettings={props.serviceSettings} data={props.filteringOrders[index]} key={index} row={row}/>)}
        </Table.Tbody>
      </Table>
    </Table.ScrollContainer>
  );
}
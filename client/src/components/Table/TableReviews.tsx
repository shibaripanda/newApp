import { Table, Progress, Text, Group } from '@mantine/core';
import classes from './TableReviews.module.css';
import React from 'react';
import { ModalWindow } from '../ModalWindow/ModalWindow.tsx';

export function TableReviews(props) {

  const rows = props.data.map((row) => {
    const totalReviews = row.reviews.negative + row.reviews.positive;
    const positiveReviews = (row.reviews.positive / totalReviews) * 100;
    const negativeReviews = (row.reviews.negative / totalReviews) * 100;

    return (
      <>
          <Table.Td>
              {row.title}
          </Table.Td>
          <Table.Td>{row.year}</Table.Td>
          <Table.Td>
              {row.author}
          </Table.Td>
          <Table.Td>{Intl.NumberFormat().format(totalReviews)}</Table.Td>
          <Table.Td>
            <Group justify="space-between">
              <Text fz="xs" c="teal" fw={700}>
                {positiveReviews.toFixed(0)}%
              </Text>
              <Text fz="xs" c="red" fw={700}>
                {negativeReviews.toFixed(0)}%
              </Text>
            </Group>
            <Progress.Root>
              <Progress.Section
                className={classes.progressSection}
                value={positiveReviews}
                color="teal"
              />
              <Progress.Section
                className={classes.progressSection}
                value={negativeReviews}
                color="red"
              />
            </Progress.Root>
          </Table.Td>
        </>
    );
  });

  return (
    <Table.ScrollContainer minWidth={200}>
      <Table verticalSpacing="xs">
        <Table.Thead>
          <Table.Tr key={'new'}>
            <Table.Th>Book title</Table.Th>
            <Table.Th>Year</Table.Th>
            <Table.Th>Author</Table.Th>
            <Table.Th>Reviews</Table.Th>
            <Table.Th>Reviews distribution</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {rows.map((row, index) => <ModalWindow data={props.data[index]} key={index} row={row}/>)}
        </Table.Tbody>
      </Table>
    </Table.ScrollContainer>
  );
}
import cx from 'clsx';
import { Text } from '@mantine/core';
import { useListState } from '@mantine/hooks';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import classes from './DndList.module.css';
import React from 'react';
import { GridForItems } from '../GridForItems/GridForItems.tsx';

export function DndList(props) {
    console.log(props.data)
  const [state, handlers] = useListState(props.data);
  console.log(state)

  const items = state.map((item, index) => (
    <Draggable key={item} index={index} draggableId={item}>
      {(provided, snapshot) => (
        <div
          className={cx(classes.item, { [classes.itemDragging]: snapshot.isDragging })}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <div>
            <Text size='15'>{item}</Text>
          </div>
        </div>
      )}
    </Draggable>
  ));

  return (
    <DragDropContext
      onDragEnd={({ destination, source }) =>
        handlers.reorder({ from: source.index, to: destination?.index || 0 })
      }
    >
      <Droppable droppableId="dnd-list"  direction="horizontal">
        {(provided) => (
          <div className={classes.horizont} {...provided.droppableProps} ref={provided.innerRef}>
           {items}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}
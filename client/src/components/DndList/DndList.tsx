import cx from 'clsx';
import { Text } from '@mantine/core';
import { useListState } from '@mantine/hooks';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import classes from './DndList.module.css';
import React from 'react';
import { GridForItems } from '../GridForItems/GridForItems.tsx';
import { myEmitter } from '../../modules/createLisener.js';

export function DndList(props) {

  const [state, handlers] = useListState(props.data)
  if(state !== props.data){
    const res = state.concat(props.serviceSettings.listOrdersFields.filter(item => item.maintable === false))
    myEmitter.emit('updateTableColams', res)
  }

  const items = state.map((item: Object<string>, index) => (
    <Draggable key={item.index} index={index} draggableId={item.label}>
      {(provided, snapshot) => (
        <div
          className={cx(classes.item, { [classes.itemDragging]: snapshot.isDragging })}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <div>
            <Text size='15'>{item.label}</Text>
          </div>
        </div>
      )}
    </Draggable>
  ));

  return (
    <DragDropContext
      onDragEnd={({ destination, source }) => {
        handlers.reorder({ from: source.index, to: destination?.index || 0 })
      }}
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
import { DndContext } from '@dnd-kit/core';
import { BoardColumn, BoardContainer, BoardTask } from '../board';
import { Draggable, Droppable } from '../dnd';
import styles from './app.module.css';
import { useDnd } from './hooks/useDnd';

export const App = () => {
  const { handleDragEnd, tasks, columns } = useDnd();

  return (
    <main className={styles.main}>
      <DndContext onDragEnd={handleDragEnd}>
        <BoardContainer heading={<h1 className={styles.heading}>Kantegas Intervjubrett™️</h1>}>
          {columns.map((column, i) => (
            <Droppable key={i} id={column.id as number} className={styles.droppable}>
              <BoardColumn heading={column.title}>
                {tasks
                  .filter((task) => task.columnId === column.id)
                  .map((task, i) => (
                    <Draggable id={task.id} key={i}>
                      <BoardTask {...task} id={task.id} />
                    </Draggable>
                  ))}
              </BoardColumn>
            </Droppable>
          ))}
        </BoardContainer>
      </DndContext>
    </main>
  );
};

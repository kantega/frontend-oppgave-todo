import { DragEndEvent, UniqueIdentifier } from '@dnd-kit/core';
import { useEffect, useState } from 'react';
import { Column, Task } from '../../../../../@types/common';

type DragableTask = Task & { columnId: UniqueIdentifier; id: number };
type DroppableColumn = Column & { id: UniqueIdentifier };

export const useDnd = () => {
  const [columns, setColumns] = useState<DroppableColumn[]>([]);
  const [tasks, setTasks] = useState<DragableTask[]>([]);

  useEffect(() => {
    const getColumns = async () => {
      const response = await fetch('http://localhost:5001/columns');
      const columnsData = await response.json();
      setColumns(columnsData);
    };

    const getTasks = async () => {
      const response = await fetch('http://localhost:5001/tasks');
      const tasksData = await response.json();

      // We have to transform the data from the API to match the types we have defined in @types/common.ts
      // the SQLite database returns a CSV string for the category, but we want an array of TaskCategory
      const transformedTasksData = tasksData.map((task: any) => ({
        ...task,
        category: task.category.split(','),
      }));
      setTasks(transformedTasksData);
    };

    getColumns();
    getTasks();
  }, []);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (active && over) {
      console.log('active', active, 'over', over);
      setTasks(
        tasks.map((task) => (task.id === active.id ? { ...task, columnId: over.id } : task))
      );
      // console.log('tasks', tasks);
    }
  };

  return { columns, tasks, handleDragEnd };
};

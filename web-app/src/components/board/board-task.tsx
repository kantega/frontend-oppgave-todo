import clsx from 'clsx';
import { Task } from '../../../../@types/common';
import styles from './board-task.module.css';

type Props = Task & { id?: number };

export const BoardTask = ({
  id,
  title,
  content,
  completed = false,
  difficulty,
  category,
}: Props) => (
  <div className={styles.wrapper} id={id ? `task-${id}` : undefined}>
    <div className={clsx(styles.header, styles.text, styles.padding)}>TASK-{id}</div>
    <div className={clsx(styles.title, styles.padding)}>
      <p>{title}</p>
    </div>
    <div
      className={clsx(styles.content, styles.padding)}
      dangerouslySetInnerHTML={{ __html: content as string }}>
      {/* props.content is actually a html string in the DB, but the type is set
      to ReactNode so we have to cheat a bit here. */}
    </div>
    <div className={clsx(styles.text, styles.padding)}>
      {completed ? '✅ Ferdig' : '🕑 Uferdig'}
    </div>
  </div>
);

import styles from './board-column.module.css';

type Props = {
  heading: string;
} & WithChildren;

export const BoardColumn = ({ heading, children }: Props) => (
  <section className={styles.wrapper}>
    <h2 className={styles.heading}>{heading}</h2>
    <div className={styles.children}>{children}</div>
  </section>
);

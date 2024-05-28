import styles from './board-container.module.css';

type Props = {
  heading: JSX.Element;
} & WithChildren;

export const BoardContainer = ({ heading, children }: Props) => (
  <section className={styles.wrapper}>
    <header className={styles.header}>{heading}</header>
    <div className={styles.children}>{children}</div>
  </section>
);

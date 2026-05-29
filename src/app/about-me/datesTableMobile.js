import styles from "./table.module.css";

export default function DatesTable({ title, points }) {
  return (
    <main className={styles.main}>
      <h2>{title}</h2>
      {points.map(([years, text2], index) => (
        <div key={index}>
          <div>
            <p>
              {years[0]}-{years[1]}
            </p>
          </div>
          <div>{text2}</div>
        </div>
      ))}
    </main>
  );
}

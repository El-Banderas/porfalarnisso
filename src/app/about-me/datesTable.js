import styles from "./table.module.css";

export default function DatesTable({title, points}) {
  return (
    <main className={styles.main}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th scope="col" className={styles.yearsCol}></th>
            <th scope="col" className={styles.formationCol}>
              <h2>{title}</h2>
            </th>
          </tr>
        </thead>
        <tbody className={styles.tbody}>
        {points.map(([years, text2], index) => (
          <tr key={index}>
<th className={styles.yearsCol}>
        {years.map((year, index) => (
              <p key={index}>{year}</p>
        ))}
</th>
            <td>{text2}</td>
          </tr>
        ))}
        </tbody>
      </table>
    </main>
  );
}

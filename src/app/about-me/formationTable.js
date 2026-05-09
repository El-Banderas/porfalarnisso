import styles from "./table.module.css";

export default function FormationTable() {
  return (
    <main className={styles.main} >
    <table className={styles.table}>
  <thead>
    <tr>
    <th scope="col" className={styles.yearsCol}></th>
    <th scope="col" className={styles.formationCol}><h2>Formação</h2></th>
    </tr>
  </thead>
  <tbody className={styles.tbody}>
    <tr>
      <th >2020-2022</th>
      <td>Foramção 1</td>
    </tr>
<tr>
      <th >2020-2022</th>
      <td>Foramção 1</td>
    </tr><tr>
      <th >2020-2022</th>
      <td>Foramção 1</td>
    </tr>

  </tbody>
  
</table>
    </main>
  );
}

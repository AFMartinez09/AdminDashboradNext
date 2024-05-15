import Image from 'next/image';
import styles from './transactions.module.css';

const Transactions = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Latest Transactions</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Status</td>
            <td>Date</td>
            <td>Amount</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src='/noPicture.svg'
                  alt='user'
                  width={40}
                  height={40}
                  className={styles.userImage}
                  />
              </div>
              John Smith
            </td>
            <td>
              <span className={`${styles.status} ${styles.pending}`}>
                Pending
              </span>
            </td>
            <td>14.04.2024</td>
            <td>$2.000</td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src='/noPicture.svg'
                  alt='user'
                  width={40}
                  height={40}
                  className={styles.userImage}
                  />
              </div>
              John Doe
            </td>
            <td>
              <span className={`${styles.status} ${styles.done}`}>
                Done
              </span>
            </td>
            <td>03.03.2024</td>
            <td>$1.456</td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src='/noPicture.svg'
                  alt='user'
                  width={40}
                  height={40}
                  className={styles.userImage}
                  />
              </div>
              Jane Doe
            </td>
            <td>
              <span className={`${styles.status} ${styles.done}`}>
                Done
              </span>
            </td>
            <td>10.01.2024</td>
            <td>$500</td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src='/noPicture.svg'
                  alt='user'
                  width={40}
                  height={40}
                  className={styles.userImage}
                  />
              </div>
              Karen Yes
            </td>
            <td>
              <span className={`${styles.status} ${styles.cancelled}`}>
                Cancelled
              </span>
            </td>
            <td>22.06.2024</td>
            <td>$5.720</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Transactions
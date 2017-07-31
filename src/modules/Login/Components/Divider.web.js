import React, { Component } from 'react'
import styles from './Divider.webStyle.scss'

class Divider extends Component {
  render () {
    return (
      <div className={styles.divider}>
        <div className={styles.line}></div>
        <div className={styles.circle}>
          <p className={styles.or}>or</p>
        </div>
      </div>
    )
  }
}

export default Divider
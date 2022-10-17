import React from 'react'

import styles from "./Avatar.module.css";

export default function Avatar({ avatarUrl, hasBorder }) {
  return (
    <img className={hasBorder ? styles.avatarWithBorder : styles.avatar} src={avatarUrl} alt="" />
  )
}

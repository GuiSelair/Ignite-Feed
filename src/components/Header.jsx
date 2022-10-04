import React from 'react'

import feedLogo from "../assets/images/feed-logo.svg";

import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <img src={feedLogo} alt="Ignite Feed Logo" />
      <strong >Ignite Feed</strong>
    </header>
  )
}

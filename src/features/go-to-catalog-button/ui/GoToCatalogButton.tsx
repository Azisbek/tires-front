import React from 'react'
import { Button } from 'shared/ui/button'
import styles from './GoToCatalogButton.module.scss'

export const GoToCatalogButton = () => {
  return (
    <Button link='/Catalog' className={styles.button}>Посмотреть все шины</Button>
  )
}


import React from 'react'
import styles from './styles.module.css'

type MedalHeaderProps = {
  header: React.ReactElement
  isSortedBy: boolean
  onClick: () => void
}

export const MedalHeader = ({
  header,
  isSortedBy,
  onClick,
}: MedalHeaderProps) => {
  return (
    <div
      className={`${styles.header} ${styles.cellMedal} ${
        isSortedBy && styles.sortedBy
      }`}
      onClick={() => onClick()}
    >
      {header}
    </div>
  )
}

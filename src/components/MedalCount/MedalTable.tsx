'use client'
import React, { useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { CountryMedals } from '@/types/medal-count.types'
import { SortBy, sortMedals, sortByValues } from '@/lib/medal-count'
import { MedalHeader } from './MedalHeader'
import styles from './styles.module.css'
import flagStyles from '@/styles/flags.module.css'

type MedalTableProps = {
  medals: CountryMedals[]
}

export const MedalTable = ({ medals }: MedalTableProps) => {
  const searchParams = useSearchParams()
  const sortParam = searchParams.get('sort') as SortBy
  const defaultSortBy: SortBy = sortByValues.includes(sortParam)
    ? sortParam
    : 'gold'
  console.log('defaultSortBy=', defaultSortBy)
  const [currentSortBy, setCurrentSortBy] = useState(defaultSortBy)
  const [topTenCountries, setTopTenCountries] = useState(
    sortMedals(medals, currentSortBy).slice(0, 10)
  )

  const sortMedalsHandler = (sortBy: SortBy) => {
    if (sortBy != currentSortBy) {
      console.log(sortBy)
      const medalsSorted = sortMedals(medals, sortBy)
      setTopTenCountries(medalsSorted.slice(0, 10))
      setCurrentSortBy(sortBy)
    }
  }

  return (
    <div className={styles.table}>
      <div className={`${styles.row} ${styles.rowHeader}`}>
        <div className={`${styles.header} ${styles.cellPos}`}></div>
        <div className={`${styles.header} ${styles.cellCountry}`}></div>
        <MedalHeader
          header={<div className={styles.circleGold}></div>}
          isSortedBy={currentSortBy === 'gold'}
          onClick={() => sortMedalsHandler('gold')}
        />
        <MedalHeader
          header={<div className={styles.circleSilver}></div>}
          isSortedBy={currentSortBy === 'silver'}
          onClick={() => sortMedalsHandler('silver')}
        />
        <MedalHeader
          header={<div className={styles.circleBronze}></div>}
          isSortedBy={currentSortBy === 'bronze'}
          onClick={() => sortMedalsHandler('bronze')}
        />
        <MedalHeader
          header={<div className={styles.total}>TOTAL</div>}
          isSortedBy={currentSortBy === 'total'}
          onClick={() => sortMedalsHandler('total')}
        />
      </div>
      {topTenCountries.map((c, i) => (
        <div key={i} className={`${styles.row} ${styles.rowMedal}`}>
          <div className={`${styles.cell} ${styles.cellPos}`}>{i + 1}</div>
          <div className={`${styles.cell} ${styles.cellCountry}`}>
            <span
              className={`${flagStyles.flag} ${flagStyles[`flag-${c.code}`]}`}
            ></span>
            {c.code}
          </div>
          <div className={`${styles.cell} ${styles.cellMedal}`}>{c.gold}</div>
          <div className={`${styles.cell} ${styles.cellMedal}`}>{c.silver}</div>
          <div className={`${styles.cell} ${styles.cellMedal}`}>{c.bronze}</div>
          <div className={`${styles.cell} ${styles.cellMedal} ${styles.total}`}>
            {c.total}
          </div>
        </div>
      ))}
    </div>
  )
}

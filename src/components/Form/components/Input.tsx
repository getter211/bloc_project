'use client'

import { useContext } from 'react'
import styles from './styles.module.scss'

interface InputProps {
  type?: 'text' | 'password'
  name: string
  label: string
  placeholder?: string
}

export function Input ({ label, name, placeholder, type }: InputProps) {
  return (
    <div className={styles.inputContainer}>
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
      />
    </div>
  )
}

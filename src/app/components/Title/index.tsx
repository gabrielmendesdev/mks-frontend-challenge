import React from 'react'
import styles from './styles.module.scss'

interface TitleProps extends React.HTMLProps<HTMLHeadingElement> {}

export const Title: React.FC<TitleProps> = ({ ...props }) => {
  return <h1 {...props}></h1> 
}

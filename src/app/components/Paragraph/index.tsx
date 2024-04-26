import React from 'react'
import styles from './styles.module.scss'

interface ParagraphProps extends React.HTMLProps<HTMLParagraphElement> {}

export const Paragraph: React.FC<ParagraphProps> = ({ ...props }) => {
  return <p {...props}></p> 
}

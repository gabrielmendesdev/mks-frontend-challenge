import React from 'react'

interface TitleProps extends React.HTMLProps<HTMLHeadingElement> {}

export const Title: React.FC<TitleProps> = ({ ...props }) => {
  return <h1 {...props}></h1> 
}

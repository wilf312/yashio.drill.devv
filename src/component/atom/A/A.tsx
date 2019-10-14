import * as React from 'react'

interface Props {
  children: React.ReactNode
  href: string
  blank?: boolean
}
export const A = (props: Props) => {
  if (props.blank) {
    return <a href={props.href} target="_blank" rel="noopener noreferrer">{props.children}</a>
  } else {
    return <a href={props.href}>{props.children}</a>
  }
}
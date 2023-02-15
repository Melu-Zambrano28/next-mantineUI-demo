import { useRouter } from 'next/dist/client/router'
import Link from 'next/link'
import { MouseEventHandler } from 'react'
import { useStyles } from '../styles'

type SideBarElementProp = {
  keyElement: string
  link: string
  label: string
  Icon?: React.ElementType
  onclick?: MouseEventHandler<HTMLAnchorElement> | undefined
}

const SideBarElement: React.FC<SideBarElementProp> = ({
  keyElement,
  link,
  label,
  Icon,
  onclick,
}) => {
  const { classes, cx } = useStyles()
  const router = useRouter()

  return (
    <Link href={link} key={`sideBarElementLink${keyElement}`}>
      <a
        className={cx(classes.link, {
          [classes.linkActive]: router.pathname === link,
        })}
        key={`sideBarElementa${keyElement}`}
        onClick={onclick}
      >
        {Icon && <Icon className={classes.linkIcon} />}
        <span>{label}</span>
      </a>
    </Link>
  )
}

export { SideBarElement }

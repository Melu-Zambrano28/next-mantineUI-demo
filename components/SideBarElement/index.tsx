import { useRouter } from 'next/dist/client/router'
import Link from 'next/link'
import { MouseEventHandler } from 'react'
import { useStyles } from '../SideBar/styles'

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
    <Link
      href={link}
      key={`sideBarElementLink${keyElement}`}
      className={cx(classes.link, {
        [classes.linkActive]: router.pathname === link,
      })}
      onClick={onclick}
    >
      {Icon && <Icon className={classes.linkIcon} />}
      <span>{label}</span>
    </Link>
  )
}

export { SideBarElement }

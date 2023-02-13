import { Navbar, Group, Code, ScrollArea, NavLink } from '@mantine/core'
import { IconGauge, IconLogout } from '@tabler/icons'
import { useStyles } from './styles'
import { sideBarItems } from '../../componentsUtils/SideBarElementData'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { UserButton } from '../UserButton'

const SideBar: React.FC<{}> = () => {
  const { classes, cx } = useStyles()
  const router = useRouter()

  const links = sideBarItems.map((item) => (
    <Link href={item.link}>
      <a
        className={cx(classes.link, {
          [classes.linkActive]: router.pathname === item.link,
        })}
        key={item.label}
      >
        <item.icon className={classes.linkIcon} stroke={1.5} />
        <span>{item.label}</span>
      </a>
    </Link>
  ))

  return (
    <Navbar width={{ base: 300 }} height={'100vh'} p="md">
      <Navbar.Section grow component={ScrollArea}>
        <Group className={classes.header}>
          <UserButton name="Ann Nullpointer" email="anullpointer@yahoo.com" />
        </Group>
        {links}
      </Navbar.Section>

      <Navbar.Section className={classes.footer}>
        <a
          href="#"
          className={classes.link}
          onClick={(event) => event.preventDefault()}
        >
          <IconLogout className={classes.linkIcon} stroke={1.5} />
          <span>Logout</span>
        </a>
      </Navbar.Section>
    </Navbar>
  )
}

export { SideBar }

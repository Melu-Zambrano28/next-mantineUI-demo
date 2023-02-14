import { Navbar, Group } from '@mantine/core'
import { IconLogout } from '@tabler/icons'
import { useStyles } from './styles'
import { sideBarItems } from '../../componentsUtils/SideBarElementData'
import { UserButton } from '../UserButton'
import { SideBarElement } from './SideBarElement'

const SideBar: React.FC<{}> = () => {
  const { classes, cx } = useStyles()

  return (
    <Navbar width={{ base: 300 }} height={'100vh'} p="md">
      <Navbar.Section grow>
        <Group className={classes.header}>
          <UserButton name="Ann Nullpointer" email="anullpointer@yahoo.com" />
        </Group>
        {sideBarItems.map((item, index) => (
          <SideBarElement
            key={`SideBarElement${index}`}
            keyElement={`${item.label}-${index}`}
            link={item.link}
            icon={<item.icon className={classes.linkIcon} stroke={1.5} />}
            label={`${item.label}`}
          />
        ))}
      </Navbar.Section>

      <Navbar.Section className={classes.footer}>
        <SideBarElement
          key={`SideBarFooterElement`}
          keyElement={`footerElement`}
          link={`/login`}
          icon={<IconLogout className={classes.linkIcon} stroke={1.5} />}
          onclick={(event) => event.preventDefault()}
          label={`Logout`}
        />
      </Navbar.Section>
    </Navbar>
  )
}

export { SideBar }

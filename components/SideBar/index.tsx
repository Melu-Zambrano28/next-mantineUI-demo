import { Navbar, Group } from '@mantine/core'
import { IconLogout } from '@tabler/icons'
import { useStyles } from './styles'
import { sideBarItems } from '../../componentsUtils/data/SideBarElementData'
import { UserMenu } from '../UserMenu'
import { SideBarElement } from './SideBarElement'

type SideBarProp = {}

const SideBar: React.FC<SideBarProp> = () => {
  const { classes } = useStyles()

  return (
    <Navbar width={{ base: 300 }} height={'100vh'} p="md">
      <Navbar.Section grow>
        <Group className={classes.header}>
          <UserMenu
            UserInformation={{
              name: 'Ann Nullpointer',
              email: 'anullpointer@yahoo.com',
            }}
          />
        </Group>
        {sideBarItems.map((item, index) => (
          <SideBarElement
            key={`SideBarElement${index}`}
            keyElement={`${item.label}-${index}`}
            link={item.link}
            Icon={item.icon}
            label={`${item.label}`}
          />
        ))}
      </Navbar.Section>

      <Navbar.Section className={classes.footer}>
        <SideBarElement
          key={`SideBarFooterElement`}
          keyElement={`footerElement`}
          link={`/login`}
          Icon={IconLogout}
          onclick={(event) => event.preventDefault()}
          label={`Logout`}
        />
      </Navbar.Section>
    </Navbar>
  )
}

export { SideBar }

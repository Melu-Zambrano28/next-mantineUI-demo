import { Navbar, ScrollArea } from '@mantine/core'
import { useStyles } from './styles'
import {
  sideBarheaderItems,
  sideBarItems,
} from '../../componentsUtils/data/SideBarElementData'
import { UserButton } from '../UserButton'
import { SideBarElement } from '../SideBarElement'
import { LinksGroup } from '../SideBarGroupElements'

type SideBarProp = {
  hidden: boolean
}

const SideBar: React.FC<SideBarProp> = ({ hidden }) => {
  const { classes } = useStyles()

  return (
    <Navbar
      p="md"
      hiddenBreakpoint="sm"
      hidden={hidden}
      width={{ sm: 200, lg: 300 }}
    >
      <Navbar.Section className={classes.header}>
        <UserButton
          UserInformation={{
            name: 'Melissa Zambrano',
            profile: 'Consulente',
          }}
        />

        {sideBarheaderItems.map((item) => (
          <LinksGroup {...item} key={item.label} />
        ))}
      </Navbar.Section>

      <Navbar.Section grow component={ScrollArea}>
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
    </Navbar>
  )
}

export { SideBar }

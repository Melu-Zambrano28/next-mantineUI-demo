import { Avatar, Burger, Group, Header, MediaQuery, Image } from '@mantine/core'
import { IconLogout } from '@tabler/icons'
import { SwitchMode } from '../SwitchMode'
import { useStyles } from './styles'

type AppHeaderProp = {
  isOpen: boolean
  onclick?: () => void
}

const AppHeader: React.FC<AppHeaderProp> = ({ isOpen, onclick }) => {
  const { classes } = useStyles()
  return (
    <Header height={{ base: 50, md: 70 }} p="md">
      <div className={classes.headerContainer}>
        <Group>
          <div>
            <Image height={50} src="/favicon.svg" />
          </div>
          <div>NextMantine</div>
        </Group>

        <div className={classes.itemContainer}>
          <Group>
            <Avatar className={classes.avatar}>MK</Avatar>
            <SwitchMode />
            <IconLogout size={30} className={classes.icon} />
          </Group>
          <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
            <Burger
              opened={isOpen}
              onClick={onclick}
              size="sm"
              className={classes.burger}
              mr="xl"
            />
          </MediaQuery>
        </div>
      </div>
    </Header>
  )
}

export { AppHeader }

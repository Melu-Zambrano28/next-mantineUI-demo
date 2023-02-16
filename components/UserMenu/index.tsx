import { UnstyledButtonProps, Group, Avatar, Box, NavLink } from '@mantine/core'
import { IconSettings } from '@tabler/icons'
import { SideBarElement } from '../SideBar/SideBarElement'
import { useStyles } from './styles'
import { atomWithStorage } from 'jotai/utils'
import { useAtom } from 'jotai'

interface UseMenuProps extends UnstyledButtonProps {
  UserInformation: {
    name: string
    email: string
    image?: string
  }
}

const isOpenMenuAtom = atomWithStorage('isOpenMenuAtom', false)

const UserMenu: React.FC<UseMenuProps> = ({
  UserInformation,
}: UseMenuProps) => {
  const { classes } = useStyles()
  const [openUserMenu, setOpenUserMenu] = useAtom(isOpenMenuAtom)

  return (
    <Group position="center">
      <Avatar
        classNames={{
          placeholder: `${classes.avatarPlaceHolder}`,
        }}
        src={UserInformation.image}
        radius="xl"
        size="xl"
      >{`MZ`}</Avatar>
      <Box sx={{ width: 270 }}>
        <NavLink
          label={UserInformation.name}
          description={UserInformation.email}
          onClick={() => setOpenUserMenu(!openUserMenu)}
          opened={openUserMenu}
        >
          <SideBarElement
            keyElement={`NavLinkCambiaPw`}
            link={'/'}
            label={`Cambia Password`}
            Icon={IconSettings}
          />
        </NavLink>
      </Box>
    </Group>
  )
}

export { UserMenu }

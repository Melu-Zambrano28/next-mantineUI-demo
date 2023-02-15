import { UnstyledButtonProps, Group, Avatar, Box, NavLink } from '@mantine/core'
import { IconSettings } from '@tabler/icons'
import { SideBarElement } from '../SideBar/SideBarElement'
import { useStyles } from './styles'

interface UseMenuProps extends UnstyledButtonProps {
  image?: string
  name: string
  email: string
}

const UserMenu: React.FC<UseMenuProps> = ({
  image,
  name,
  email,
  ...others
}: UseMenuProps) => {
  const { classes } = useStyles()

  return (
    <Group position="center">
      <Avatar
        classNames={{
          placeholder: `${classes.avatarPlaceHolder}`,
        }}
        src={image}
        radius="xl"
        size="xl"
      >{`MZ`}</Avatar>
      <Box sx={{ width: 270 }}>
        <NavLink label={name} description={email}>
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

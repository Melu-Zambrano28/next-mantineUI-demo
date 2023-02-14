import {
  UnstyledButton,
  UnstyledButtonProps,
  Group,
  Avatar,
  Text,
  Box,
  NavLink,
} from '@mantine/core'
import { IconChevronRight, IconSettings } from '@tabler/icons'
import { useRouter } from 'next/router'
import { SideBarElement } from '../SideBar/SideBarElement'
import { useStyles } from './styles'

interface UserButtonProps extends UnstyledButtonProps {
  image?: string
  name: string
  email: string
  icon?: React.ReactNode
}

const UserButton: React.FC<UserButtonProps> = ({
  image,
  name,
  email,
  icon,
  ...others
}: UserButtonProps) => {
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
            icon={<IconSettings />}
          />
        </NavLink>
      </Box>
    </Group>
  )
}

export { UserButton }

import {
  UnstyledButton,
  UnstyledButtonProps,
  Group,
  Avatar,
  Text,
} from '@mantine/core'
import { IconChevronRight } from '@tabler/icons'
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
      <UnstyledButton className={classes.user} {...others}>
        <div>
          <Text size="sm" weight={500}>
            {name}
          </Text>

          <Text color="dimmed" size="xs">
            {email}
          </Text>
        </div>
        <div>{icon || <IconChevronRight size={14} stroke={1.5} />}</div>
      </UnstyledButton>
    </Group>
  )
}

export { UserButton }

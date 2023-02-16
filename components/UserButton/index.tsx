import {
  UnstyledButtonProps,
  Group,
  Avatar,
  Text,
  UnstyledButton,
} from '@mantine/core'

import { useStyles } from './styles'

interface UseMenuProps extends UnstyledButtonProps {
  UserInformation: {
    name: string
    profile: string
    image?: string
  }
}

const UserButton: React.FC<UseMenuProps> = ({
  UserInformation,
}: UseMenuProps) => {
  const { classes } = useStyles()

  return (
    <UnstyledButton className={classes.user}>
      <Group>
        <div style={{ flex: 1 }}>
          <Text size="sm" weight={500}>
            {UserInformation.name}
          </Text>

          <Text color="dimmed" size="xs">
            {UserInformation.profile}
          </Text>
        </div>
      </Group>
    </UnstyledButton>
  )
}

export { UserButton }

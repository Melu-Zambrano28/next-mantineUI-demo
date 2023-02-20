import { createStyles } from '@mantine/core'

export const useStyles = createStyles((theme) => ({
  user: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'start',
    padding: theme.spacing.md,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
    userSelect: 'none',
    '&:hover': {
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[8]
          : theme.colors.gray[0],
    },
  },

  avatarPlaceHolder: {
    background: theme.fn.variant({
      variant: 'light',
      color: theme.primaryColor,
    }).background,
    color: theme.fn.variant({
      variant: 'light',
      color: theme.primaryColor,
    }).color,
  },
}))

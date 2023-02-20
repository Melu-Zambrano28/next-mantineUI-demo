import { createStyles } from '@mantine/core'

export const useStyles = createStyles((theme, _params, getRef) => {
  const avatar = getRef('div')
  const icon = getRef('icon')
  return {
    headerContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: '100%',
    },
    burger: {
      color: theme.colors.gray[6],
    },
    itemContainer: {
      display: 'flex',
      alignItems: 'center',
    },
    avatar: {
      ref: avatar,
      [theme.fn.largerThan('md')]: {
        width: '50px',
        height: '50px',
      },
      '.mantine-Avatar-placeholder': {
        [theme.fn.largerThan('md')]: {
          fontSize: theme.fontSizes.lg,
        },
        backgroundColor: theme.fn.variant({
          variant: 'light',
          color: theme.primaryColor,
        }).background,
        color: theme.fn.variant({ variant: 'light', color: theme.primaryColor })
          .color,
      },
      borderRadius: theme.radius.xl,
    },
    icon: {
      ref: icon,
      color: theme.fn.variant({ variant: 'light', color: theme.primaryColor })
        .color,
      marginRight: theme.spacing.sm,
      cursor: 'pointer',
      '&:hover': {
        backgroundColor:
          theme.colorScheme === 'dark'
            ? theme.colors.dark[6]
            : theme.colors.gray[0],
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,

        [`& .${icon}`]: {
          color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        },
      },
    },
  }
})

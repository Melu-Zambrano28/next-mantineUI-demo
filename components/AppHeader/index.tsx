import { Burger, Header, MediaQuery, useMantineTheme } from '@mantine/core'

type AppHeaderProp = {
  isOpen: boolean
  onclick?: () => void
}

const AppHeader: React.FC<AppHeaderProp> = ({ isOpen, onclick }) => {
  const theme = useMantineTheme()
  return (
    <Header height={{ base: 50, md: 70 }} p="md">
      <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
        <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
          <Burger
            opened={isOpen}
            onClick={onclick}
            size="sm"
            color={theme.colors.gray[6]}
            mr="xl"
          />
        </MediaQuery>

        <div>Application header</div>
      </div>
    </Header>
  )
}

export { AppHeader }

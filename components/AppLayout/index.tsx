import {
  AppShell,
  Burger,
  Footer,
  Grid,
  Header,
  MediaQuery,
  useMantineTheme,
} from '@mantine/core'
import { useState } from 'react'
import { SideBar } from '../SideBar'

const AppLayout: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const theme = useMantineTheme()
  const [opened, setOpened] = useState(false)
  return (
    <AppShell
      styles={{
        main: {
          background:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      navbar={<SideBar hidden={!opened} />}
      footer={
        <Footer height={60} p="md">
          Application footer
        </Footer>
      }
      header={
        <Header height={{ base: 50, md: 70 }} p="md">
          <div
            style={{ display: 'flex', alignItems: 'center', height: '100%' }}
          >
            <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>

            <div>Application header</div>
          </div>
        </Header>
      }
    >
      <Grid>
        <Grid.Col span={12}>{children}</Grid.Col>
      </Grid>
    </AppShell>
  )
}

export { AppLayout }

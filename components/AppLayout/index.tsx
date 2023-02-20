import { AppShell, Footer, Grid, useMantineTheme } from '@mantine/core'
import { useState } from 'react'
import { AppHeader } from '../AppHeader'
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
        <AppHeader isOpen={opened} onclick={() => setOpened((o) => !o)} />
      }
    >
      <Grid>
        <Grid.Col span={12}>{children}</Grid.Col>
      </Grid>
    </AppShell>
  )
}

export { AppLayout }

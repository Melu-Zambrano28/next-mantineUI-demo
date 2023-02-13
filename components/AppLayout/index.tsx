import { AppShell, Footer, Grid, Header, Navbar } from '@mantine/core'
import { SideBar } from '../SideBar'

const AppLayout: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  return (
    <AppShell
      padding="md"
      header={
        <Header height={60} p="xs">
          {/* Header content */}
        </Header>
      }
      navbar={<SideBar />}
      footer={
        <Footer height={60} p="md">
          Application footer
        </Footer>
      }
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}
    >
      {children}
    </AppShell>
  )
}

export { AppLayout }

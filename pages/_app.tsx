import { AppProps } from 'next/app'
import Head from 'next/head'
import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
} from '@mantine/core'
import { useColorScheme, useHotkeys, useLocalStorage } from '@mantine/hooks'
import { Provider } from 'jotai'
import { getCookie, setCookie } from 'cookies-next'
import { useState } from 'react'
import { GetServerSidePropsContext } from 'next'

export default function App(props: AppProps & { colorScheme: ColorScheme }) {
  const { Component, pageProps } = props

  const [colorScheme, setColorScheme] = useState<ColorScheme>(props.colorScheme)

  const toggleColorScheme = (value?: ColorScheme) => {
    const nextColorScheme = value || (colorScheme === 'dark' ? 'light' : 'dark')
    setColorScheme(nextColorScheme)

    setCookie('mantine-color-scheme', nextColorScheme, {
      maxAge: 60 * 60 * 24 * 30,
    })
  }

  useHotkeys([['mod+J', () => toggleColorScheme()]])

  return (
    <>
      <Head>
        <title>Demo</title>
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{ colorScheme }}
        >
          <Provider>
            <Component {...pageProps} />
          </Provider>
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  )
}

App.getInitialProps = ({ ctx }: { ctx: GetServerSidePropsContext }) => ({
  colorScheme: getCookie('mantine-color-scheme', ctx) || 'light',
})

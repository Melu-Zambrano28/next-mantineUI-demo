import { AppProps } from 'next/app'
import Head from 'next/head'
import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
} from '@mantine/core'
import { useColorScheme, useHotkeys } from '@mantine/hooks'
import { Provider } from 'jotai'
import { useState } from 'react'
import { atomWithStorage } from 'jotai/utils'

export default function App(props: AppProps) {
  const { Component, pageProps } = props

  const preferredColorScheme = useColorScheme()

  const themeAtom = atomWithStorage<ColorScheme>(
    'themeAtom',
    preferredColorScheme,
  )

  const [colorScheme, setColorScheme] =
    useState<ColorScheme>(preferredColorScheme)
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'))

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

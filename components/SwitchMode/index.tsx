import { ActionIcon, ColorScheme } from '@mantine/core'
import { IconMoonStars, IconSun } from '@tabler/icons'

type SwitchModeProp = {
  colorScheme?: ColorScheme
  onClick?: () => void
}

const SwitchMode: React.FC<SwitchModeProp> = ({ colorScheme, onClick }) => {
  const dark = colorScheme === 'dark'
  return (
    <ActionIcon
      variant="outline"
      color={dark ? 'yellow' : 'blue'}
      onClick={onClick}
      title={`Cambia a ${colorScheme} mode`}
    >
      {dark ? <IconSun size={18} /> : <IconMoonStars size={18} />}
    </ActionIcon>
  )
}

export { SwitchMode }

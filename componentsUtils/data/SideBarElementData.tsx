import {
  IconBusinessplan,
  IconCalendarEvent,
  IconFolder,
  IconLayoutDashboard,
  IconSettings,
} from '@tabler/icons'

export const sideBarheaderItems = [
  {
    label: 'Profilo',
    icon: IconSettings,
    links: [{ label: 'Cambia Password', link: '/' }],
  },
]

export const sideBarItems = [
  { link: '/', label: 'Dashboard', icon: IconLayoutDashboard },
  { link: '/prodotti', label: 'Prodotti', icon: IconBusinessplan },
  { link: '/documentazione', label: 'Documentazione', icon: IconFolder },
  { link: '/agenda', label: 'Agenda', icon: IconCalendarEvent },
]

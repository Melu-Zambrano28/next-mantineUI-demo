import { Group, Box, Collapse, UnstyledButton } from '@mantine/core'
import { TablerIcon, IconChevronLeft, IconChevronRight } from '@tabler/icons'
import { useStyles } from './styles'
import { atomWithStorage } from 'jotai/utils'
import { useAtom } from 'jotai'
import Link from 'next/link'
import { useRouter } from 'next/router'

type LinksGroupProps = {
  icon: TablerIcon
  label: string
  links?: { label: string; link: string }[]
}

const LinksGroupParentAccordionAtom = atomWithStorage(
  'LinksGroupParentAccordionAtom',
  false,
)

const LinksGroup: React.FC<LinksGroupProps> = ({
  icon: Icon,
  label,
  links,
}: LinksGroupProps) => {
  const { classes, cx, theme } = useStyles()
  const hasLinks = Array.isArray(links)
  const [opened, setOpened] = useAtom(LinksGroupParentAccordionAtom)
  const ChevronIcon = theme.dir === 'ltr' ? IconChevronRight : IconChevronLeft
  const router = useRouter()

  const items = (hasLinks ? links : []).map((link) => (
    <Link href={link.link} key={`LinksGroup${link.label}`}>
      <a
        className={cx(classes.link, {
          [classes.linkActive]: router.pathname === link.link,
        })}
        key={`LinksGroupPropsElemntA${link.label}`}
      >
        {link.label}
      </a>
    </Link>
  ))

  return (
    <>
      <UnstyledButton
        onClick={() => setOpened((o) => !o)}
        className={cx(classes.control, {
          [classes.controlActive]: opened,
        })}
      >
        <Group position="apart" spacing={0}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Icon
              className={cx(classes.linkIcon, {
                [classes.linkActive]: opened,
              })}
            />
            <Box>{label}</Box>
          </Box>
          {hasLinks && (
            <ChevronIcon
              className={classes.chevron}
              size={14}
              stroke={1.5}
              style={{
                transform: opened
                  ? `rotate(${theme.dir === 'rtl' ? -90 : 90}deg)`
                  : 'none',
              }}
            />
          )}
        </Group>
      </UnstyledButton>
      {hasLinks ? <Collapse in={opened}>{items}</Collapse> : null}
    </>
  )
}

const SideBarLinksGroup: React.FC<LinksGroupProps> = ({ ...icon }) => {
  return (
    <Box
      sx={(theme) => ({
        minHeight: 220,
        padding: theme.spacing.md,
        backgroundColor:
          theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
      })}
    >
      <LinksGroup {...icon} />
    </Box>
  )
}

export { LinksGroup, SideBarLinksGroup }

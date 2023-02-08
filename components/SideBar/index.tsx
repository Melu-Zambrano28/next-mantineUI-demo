import { useState } from "react";
import { Navbar, Group, Code } from "@mantine/core";
import { IconLogout } from "@tabler/icons";
import { useStyles } from "./styles";
import { sideBarItems } from "../../componentsUtils/SideBarElementData";
import Link from "next/link";
import { useRouter } from "next/router";

const SideBar: React.FC<{}> = () => {
  const { classes, cx } = useStyles();
  const router = useRouter();

  const links = sideBarItems.map((item) => (
    <Link href={item.link}>
      <a
        className={cx(classes.link, {
          [classes.linkActive]: router.pathname === item.link,
        })}
        key={item.label}
      >
        <item.icon className={classes.linkIcon} stroke={1.5} />
        <span>{item.label}</span>
      </a>
    </Link>
  ));

  return (
    <Navbar height={"100vh"} p="md">
      <Navbar.Section grow>
        <Group className={classes.header} position="apart">
          <Code sx={{ fontWeight: 700 }}>v3.1.2</Code>
        </Group>
        {links}
      </Navbar.Section>

      <Navbar.Section className={classes.footer}>
        <a
          href="#"
          className={classes.link}
          onClick={(event) => event.preventDefault()}
        >
          <IconLogout className={classes.linkIcon} stroke={1.5} />
          <span>Logout</span>
        </a>
      </Navbar.Section>
    </Navbar>
  );
};

export { SideBar };

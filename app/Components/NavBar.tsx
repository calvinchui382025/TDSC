"use client"
import * as React from 'react';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import {StyledListItemButton, StyledAppBar, StyledDrawer, HamburgerIconButton, StyledAppBarSubContainer, ListTextStyled, StyledExitIcon, StyledExitButton, AuxDrawerButtons} from './NavBarStyles';


const navItems = [
  'home', //short bit of all pages
  'about', // who what and bios
  'join', //join now and sign up
  'locations', //chapters gear and proficiency requirements + calibers
  'contact',
];

export default function DrawerAppBar() {
  const [isMobile, setIsMobile] = React.useState(false);
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  }

  React.useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 1000);
    }
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  const LinkItems = () => {
    return (
      <>
        {navItems.map((item) => {
          let to = `/${item.toLowerCase()}`;
          if (item === 'home') to = '/'
          return (
            <ListItem key={item} disablePadding>
              <StyledListItemButton 
                // @ts-ignore
                component={Link}
                href={to}
                >
                  <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    width: '100%',
                    textAlign: "center",
                  }}
                  >
                    <ListTextStyled>{item}</ListTextStyled>
                  </div>
              </StyledListItemButton>
            </ListItem>
          )
          }
        )}
      </>
    )
  }

  return (
    <StyledAppBar>
      <StyledAppBarSubContainer>
        <IconButton>
          <Image src="/TDSCImage2.png" alt="logo" width={75} height={75} />
        </IconButton>
        {isMobile ? (
          <HamburgerIconButton onClick={handleDrawerToggle}>
            <MenuIcon style={{ color: 'white', fontSize: '50px' }} />
          </HamburgerIconButton>
        ) : (
          <div style={{
            display: 'flex',
            flexDirection: 'row',
          }}
          >
            <LinkItems />
          </div>
        )}
        <StyledDrawer
          open={drawerOpen}
          onClick={handleDrawerToggle}
          anchor="top"
        >
          <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            gap: "2rem",
            padding: "1rem",
            backgroundColor: 'black',
          }}
          >
            <AuxDrawerButtons>
              <StyledExitButton>
                <Image src="/TDSCImage2.png" alt="logo" width={75} height={75} />
              </StyledExitButton>
              <StyledExitButton onClick={handleDrawerToggle}>
                <StyledExitIcon />
              </StyledExitButton>
            </AuxDrawerButtons>
            <div>
              <LinkItems />
            </div>
          </div>
        </StyledDrawer>
      </StyledAppBarSubContainer>
    </StyledAppBar>
  );
}
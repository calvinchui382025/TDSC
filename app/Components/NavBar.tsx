"use client"
import * as React from 'react';
import Image from 'next/image';
// import Box from '@mui/material/Box';
// import Divider from '@mui/material/Divider';
// import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
// import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
// import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
// import Typography from '@mui/material/Typography';
import Link from 'next/link';
import {StyledListItemButton, StyledAppBar, StyledDrawer, HamburgerIconButton, StyledAppBarSubContainer, ListTextStyled, StyledExitIcon, StyledExitButton, AuxDrawerButtons, DrawerBackground} from './NavBarStyles';
import { useRouter } from 'next/navigation';

const navItems = [
  'home', //short bit of all pages
  'about', // who what and bios
  'join', //join now and sign up
  'locations', //chapters gear and proficiency requirements + calibers
  'contact',
  // 'admin',
];

export default function DrawerAppBar() {
  const router = useRouter()

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

  const handleIconPress = () => {
    const to = `/admin`;
    router.push(to);
  }
  
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
        <IconButton 
          onClick={handleIconPress}
        >
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
          <DrawerBackground>
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
          </DrawerBackground>
        </StyledDrawer>
      </StyledAppBarSubContainer>
    </StyledAppBar>
  );
}
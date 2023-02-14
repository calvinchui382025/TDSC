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
import {StyledListItemButton, StyledAppBar, StyledDrawer, HamburgerIconButton} from './NavBarStyles';

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const navItems = ['home', 'who', 'what', 'proficiency', 'gear', 'contact'];

export default function DrawerAppBar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

    //======================================================

  const drawer = (
    <StyledDrawer onClick={handleDrawerToggle}>
      <Typography variant="h6" sx={{ my: 2 }}>
        TDSC
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => {
          let to = `/${item.toLowerCase()}`;
          if (item === 'home') to = '/'
          return (
            <ListItem key={item} disablePadding>
              <StyledListItemButton 
                // @ts-ignore
                component={Link}
                href={to}
                // to={to}
                // onClick={() => setSelectedPage(to)}
                sx={{ textAlign: 'center' }}
                >
                <ListItemText primary={item} />
              </StyledListItemButton>
              {/* <Link href={to}>
                {item}
              </Link> */}
            </ListItem>
          )
          }
        )}
      </List>
    </StyledDrawer>
  );

  const container = window !== undefined ? () => window().document.body : undefined;


  return (
    <StyledAppBar>
      <IconButton>
        <Image 
          src="/TDSCImage2.png" 
          alt="logo" 
          width={75} 
          height={75} 
        />
      </IconButton>
      <HamburgerIconButton onClick={handleDrawerToggle}>
        <MenuIcon style={{color:'white'}}/>
      </HamburgerIconButton>

      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        anchor={'right'}
      >
        {drawer}
      </Drawer>

  </StyledAppBar>
  );
}
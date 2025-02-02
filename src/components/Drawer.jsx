import { Home, Lock, Login, ShoppingCart } from '@mui/icons-material'
import { Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const DrawerComponent = ({ isDrawerOpen, toggleDrawer }) => {
    return (
        <React.Fragment>
            <Box>
                <Drawer
                    open={isDrawerOpen}
                    onClose={toggleDrawer}
                    anchor={'right'}
                    PaperProps={{
                        sx: { width: "200px" },
                    }}
                >
                    <List>
                        <ListItem>
                            <ListItemButton LinkComponent={Link} href='/'>
                                <ListItemIcon>
                                    <Home />
                                </ListItemIcon>
                                <ListItemText>
                                    Home
                                </ListItemText>
                            </ListItemButton>
                        </ListItem>
                        <ListItem>
                            <ListItemButton LinkComponent={Link} href='/login'>
                                <ListItemIcon>
                                    <Login />
                                </ListItemIcon>
                                <ListItemText>
                                    Signin
                                </ListItemText>
                            </ListItemButton>
                        </ListItem>
                        <ListItem>
                            <ListItemButton LinkComponent={Link} href='/register'>
                                <ListItemIcon>
                                    <Lock />
                                </ListItemIcon>
                                <ListItemText>
                                    Signup
                                </ListItemText>
                            </ListItemButton>
                        </ListItem>
                        <ListItem>
                            <ListItemButton LinkComponent={Link} href='/cart'>
                                <ListItemIcon>
                                    <ShoppingCart />
                                </ListItemIcon>
                                <ListItemText>
                                    Cart
                                </ListItemText>
                            </ListItemButton>
                        </ListItem>
                    </List>
                </Drawer>
            </Box>
        </React.Fragment>
    )
}

export default DrawerComponent
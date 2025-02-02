import { Box, Container, Link, List, ListItem, Stack, Typography } from '@mui/material'
import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
    return (
        <Box sx={{ flexGrow: 1 }} bgcolor='primary.main' py={2} color={'white'}>
            <Container maxWidth='lg'>
                <Stack
                    direction={{ xs: 'column', md: 'row' }}
                    justifyContent={'space-between'}
                    alignItems={'center'}
                >
                    <Typography variant='h6'>RCommercy</Typography>
                    <Box>
                        <List component={Stack} direction='row'>
                            {/* <ListItem>
                                <Link
                                    href='https://www.instagram.com/rahul_yad.av1999/'
                                    target={"_blank"}
                                    color={'#ffffff'}
                                >
                                    <InstagramIcon />
                                </Link>
                            </ListItem> */}
                            <ListItem>
                                <Link
                                    href='https://www.github.com/rahulyadav232/'
                                    target={"_blank"}
                                    color={'#ffffff'}
                                >
                                    <GitHubIcon />
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Link
                                    href='https://www.linkedin.com/in/rahul-yadav-063149176//'
                                    target={"_blank"}
                                    color={'#ffffff'}
                                >
                                    <LinkedInIcon />
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Link
                                    href='https://www.youtube.com/@Code_With_Rahul-xw6yq/'
                                    target={"_blank"}
                                    color={'#ffffff'}
                                >
                                    <YouTubeIcon />
                                </Link>
                            </ListItem>
                        </List>
                    </Box>
                </Stack>
            </Container>
        </Box>
    )
}

export default Footer
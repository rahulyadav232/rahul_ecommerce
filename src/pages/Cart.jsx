import { Box, Button, Card, Container, Divider, Grid, Stack, Typography, CircularProgress as Progess } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link as RouterLink } from 'react-router-dom'
import ProductCard from '../components/Card'
import { asyncFetchProducts } from '../redux/feature/home/homeSlice'

const Cart = () => {
    const dispatch = useDispatch();
    const { loading, products } = useSelector(state => state.cart);
    const cartCardButtonType = window.location.pathname;

    const productsAmount = products.reduce((prevItem, currentItem) => {
        return prevItem + currentItem.price
    }, 0);

    useEffect(() => {
        dispatch(asyncFetchProducts());
    }, [dispatch])

    return (
        <Box marginY={5}>
            <Container maxWidth='lg'>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={8} order={{ xs: 2, md: 1 }} >
                        <Grid container spacing={1}>
                            {
                                loading ? (<Box my={1} mx={"auto"}>
                                    <Progess />
                                </Box>) : (
                                    products.length <= 0 ? (
                                        <Grid item xs={12}>
                                            <Box mx={'auto'}>
                                                <img
                                                    src="/assets/cart.svg"
                                                    alt="Empty Cart"
                                                    width={'60%'}
                                                />
                                                <Typography variant='h5' textAlign={'center'} my={2}>
                                                    Cart is Empty
                                                </Typography>
                                                <Box my={2} mx={"auto"} maxWidth={'fit-content'}>
                                                    <Button variant='outlined' size='large' LinkComponent={RouterLink} to={'/'}>
                                                        Go To HomePage
                                                    </Button>
                                                </Box>
                                            </Box>
                                        </Grid>
                                    ) : (
                                        products.map(product => {
                                            return (
                                                <Grid item xs={12} sm={6} md={4} key={product.id}>
                                                    <ProductCard product={product} type={cartCardButtonType} />
                                                </Grid>
                                            )
                                        }))
                                )
                            }
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={4} order={{ xs: 1, md: 2 }} >
                        <Card>
                            <Stack p={1}>
                                <Stack
                                    direction={'row'}
                                    justifyContent={'space-between'}
                                    alignItems={'center'}
                                >
                                    <Typography variant='body1'>Amount</Typography>
                                    <Typography variant='h6' fontWeight={'bold'}>${productsAmount.toFixed(2)}</Typography>
                                </Stack>
                                <Stack
                                    direction={'row'}
                                    justifyContent={'space-between'}
                                    alignItems={'center'}
                                    my={1}
                                >
                                    <Typography variant='body1'>Shipping Charges</Typography>
                                    <Typography variant='h6' fontWeight={'bold'}>$20</Typography>
                                </Stack>
                                <Divider color='white' />
                                <Stack
                                    direction={'row'}
                                    justifyContent={'space-between'}
                                    alignItems={'center'}
                                    my={1}
                                >
                                    <Typography variant='body1'>Total Amount</Typography>
                                    <Typography variant='h6' fontWeight={'bold'}>${productsAmount.toFixed(2)}</Typography>
                                </Stack>
                            </Stack>
                            <Box my={1} p={1}>
                                <Button disabled={!products.length} variant='contained' color='success' fullWidth>
                                    Pay Now
                                </Button>
                            </Box>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default Cart
import { Box, Button, Container, Rating, Stack, Typography, CircularProgress as Progress } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom';
import { asyncFetchSingleProduct, clearCurrentProduct } from '../redux/feature/home/homeSlice';

const ProductDetails = () => {
    const dispatch = useDispatch();
    const { loading, product } = useSelector(state => state.home);

    const { search } = useLocation()
    const productID = new URLSearchParams(search).get('id');

    useEffect(() => {
        dispatch(asyncFetchSingleProduct(productID));

        return () => {
            dispatch(clearCurrentProduct());
        }

    }, [dispatch])

    return (
        <Box my={5} mx={'auto'}>
            <Container maxWidth='lg'>
                {
                    loading ? (
                        <Box my={1} mx={'auto'}>
                            <Progress />
                        </Box>
                    ) : (
                            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={5} justifyContent='space-between'>
                                <Box mx={'auto'}>
                                <img
                                    src={product?.image}
                                    alt={product?.title}
                                        width={300}
                                />
                                <Box my={2}>
                                    <Button variant='contained' fullWidth>
                                        Add To Card
                                    </Button>
                                </Box>
                            </Box>
                            <Box>
                                <Typography variant='h4' fontWeight={'bold'} mb={2}>
                                    {product?.title}
                                </Typography>
                                <Typography variant='body1' mb={2}>
                                    {product?.description}
                                </Typography>
                                <Typography variant='h6' fontWeight={'bold'} mb={2}>
                                    Price: ${product?.price.toFixed(2)}
                                </Typography>
                                <Stack direction={'row'} spacing={1} my={2}>
                                    <Rating value={product?.rating?.rate} readOnly />
                                    <Typography>({product?.rating?.count} Ratings)</Typography>
                                </Stack>
                            </Box>
                        </Stack>
                    )
                }
            </Container>
        </Box>
    )
}

export default ProductDetails
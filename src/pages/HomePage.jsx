import { Box, CircularProgress as Progress, Container, Grid, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { asyncFetchProducts } from '../redux/feature/home/homeSlice';
import ProductCard from '../components/Card';
// import Navbar from '../components/Navbar';

const HomePage = ({ searchQuery }) => {
    const dispatch = useDispatch();
    const { loading, products } = useSelector(state => state.home);
    // const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        dispatch(asyncFetchProducts());
    }, [dispatch])

    const filteredProducts = products.filter((product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
      );

    return (
        <Box marginY={3}>
            <Container maxWidth='lg'>
                {/* <Grid container spacing={2}>
                    {
                        loading ? (<Box my={1} mx={"auto"}>
                            <Progress />
                        </Box>) : (
                            products.map(product => {
                                return (
                                    <Grid item sm={6} xs={12} md={4} lg={3} key={product.id}>
                                        <ProductCard product={product} type={'/home'} />
                                    </Grid>
                                )
                            })
                            )
                    }
                </Grid> */}
                 <Grid container spacing={2}>
          {loading ? (
            <Box my={1} mx={"auto"}>
              <Progress />
            </Box>
          ) : filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <Grid item sm={6} xs={12} md={4} lg={3} key={product.id}>
                <ProductCard product={product} type={"/home"} />
              </Grid>
            ))
          ) : (
            <Box mx="auto" textAlign="center" width="100%" my={5}>
              <TextField
                label="No products found!"
                variant="outlined"
                fullWidth
                disabled
              />
            </Box>
          )}
        </Grid>
            </Container>
        </Box>
    )
}

export default HomePage
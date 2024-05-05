
import { useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import { Box, Wrap, WrapItem, Center } from '@chakra-ui/react';
import {useSelector, useDispatch} from 'react-redux';
import { getProducts } from '../redux/actions/ProductActions';

const ProductScreen = () => {

    const dispatch=useDispatch();
    const {loading, error, products,pagination} = useSelector((state) => state.product);
    
useEffect(() => {
    dispatch(getProducts());
}, [dispatch]);

    return (
        <>
            {products && products.length > 0 && (
            <Box>
                <Wrap spacing='30px' justify='center' minHeight='80vh' mx={{base:'12',md:'20',lg:'32'}}>
                    
                    {products.map((product) => (
                        <WrapItem key={product._id}>
                            <Center w='250px' h='450px'>
                                <ProductCard product={product} loading={loading}></ProductCard>
                            </Center>
                        </WrapItem>
                    ))}                        
                </Wrap>
            </Box>
            )}
        </>
    );
}

export default ProductScreen;
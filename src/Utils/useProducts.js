import { useState, useEffect } from 'react';

const useProducts = () => {
    const [products, setproducts] = useState(null);
    const productsLocal = sessionStorage.getItem('products');

    useEffect(() => {
        if (productsLocal) {
            return;
        }

        const fetchData = async () => {
            const response = await fetch(
                'https://run.mocky.io/v3/1da52db6-0440-47d1-8bcc-6ea588322aee'
            );
            const json = await response.json();

            setproducts(json.data);
            sessionStorage.setItem('products', JSON.stringify(json.data));
        };

        fetchData();
    }, [productsLocal]);

    if (productsLocal) {
        return JSON.parse(productsLocal);
    }

    return products;
};

export default useProducts;

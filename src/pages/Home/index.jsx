import React, { useEffect, useState } from "react";
import BannerComponent from "../../components/Banner";
import ProductService from "../../service/productService";
import ListProduct from "../../components/ListProduct";

const Home = () => {
  const [products, setProducts] = useState([]);

  const getListProduct = () => {
    ProductService.getList()
      .then(products => {
        console.log(products);
        setProducts(products);
      });
  };

  useEffect(() => {
    getListProduct();
  }, []);

  return (
    <>
      <BannerComponent />
      <br />
      <ListProduct products={products} />
    </>
  );
};

export default Home;
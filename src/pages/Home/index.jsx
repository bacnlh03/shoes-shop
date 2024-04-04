import React, { useEffect } from "react";
import BannerComponent from "../../components/Banner";
import useProductStore from "../../features/product/productStore";
import ListProduct from "../../components/ListProduct";

const Home = () => {
  const { listProduct, isLoading, error, getListProduct } = useProductStore();

  useEffect(() => {
    getListProduct();
  }, [getListProduct]);

  return (
    <>
      <BannerComponent />
      <br />
      <ListProduct products={listProduct} isLoading={isLoading} error={error} />
    </>
  );
};

export default Home;
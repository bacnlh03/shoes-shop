import React, { useEffect } from "react";
import BannerComponent from "../../components/Banner";
import useProductStore from "../../features/product/productStore";
import ListProduct from "../../components/ListProduct";
import SearchBar from "../../components/SearchBar";
import { Col, Row } from "react-bootstrap";
import FilterBar from "../../components/FilterBar";

const Home = () => {
  const { listProduct, isLoading, error, getListProduct } = useProductStore();

  useEffect(() => {
    getListProduct();
  }, [getListProduct]);

  return (
    <>
      <BannerComponent />
      <SearchBar />
      <Row className="p-5">
        <Col xs={3}>
          <FilterBar />
        </Col>

        <Col>
          <ListProduct products={listProduct} isLoading={isLoading} error={error} />
        </Col>
      </Row>
    </>
  );
};

export default Home;
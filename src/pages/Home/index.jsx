import React, { useEffect, useState } from "react";
import BannerComponent from "../../components/Banner";
import useProductStore from "../../features/product/productStore";
import ListProduct from "../../components/ListProduct";
import SearchBar from "../../components/SearchBar";
import { Col, Row } from "react-bootstrap";
import FilterBar from "../../components/FilterBar";

const Home = () => {
  const { listProduct, isLoading, error, getListProduct, filterProduct } = useProductStore();
  const [name, setName] = useState(null);
  const [gender, setGender] = useState(null);
  const [kids, setKids] = useState(null);
  const [priceGroup, setPriceGroup] = useState(null);

  useEffect(() => {
    getListProduct();
  }, [getListProduct]);

  const handleSearch = async (name, gender, kids, priceGroup) => {
    console.log({ name, gender, kids, priceGroup });
    await filterProduct({ name, gender, kids, priceGroup });
  };

  return (
    <>
      <BannerComponent />
      <SearchBar
        name={name || ''}
        setName={setName}
        onSearch={() => handleSearch(name, gender, kids, priceGroup)}
        onReset={() => {
          setName('');
          setGender(null);
          setKids(null);
          setPriceGroup(null);
          handleSearch();
        }}
      />
      <Row className="p-5">
        <Col xs={3}>
          <FilterBar
            gender={gender}
            setGender={setGender}
            kids={kids}
            setKids={setKids}
            priceGroup={priceGroup}
            setPriceGroup={setPriceGroup}
          />
        </Col>

        <Col>
          <ListProduct products={listProduct} isLoading={isLoading} error={error} />
        </Col>
      </Row>
    </>
  );
};

export default Home;
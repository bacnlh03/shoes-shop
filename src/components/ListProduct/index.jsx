import React, { useState } from "react";
import { Container, Pagination, Row, Spinner } from "react-bootstrap";
import Product from "../Product";

const ListProduct = ({ products, isLoading, error }) => {
  const itemsPerPage = 6;
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = products.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(products.length / itemsPerPage);
  const [selectedPage, setSelectedPage] = useState(0);

  const handlePageClick = (pageIndex) => {
    setSelectedPage(pageIndex);
    setItemOffset((pageIndex * itemsPerPage) % products.length);
  };

  let items = [];
  for (let i = 0; i < pageCount; i++) {
    items.push(
      <Pagination.Item
        key={i}
        active={i === selectedPage}
        onClick={() => handlePageClick(i)}
      >
        {i}
      </Pagination.Item>
    )
  }

  if (isLoading) {
    return (
      <Spinner />
    );
  }

  return (
    <Container>
      {
        error && <div>{error}</div>
      }
      {
        products.length === 0
          ? <div>Empty Product</div>
          : !error && <Row md={3}>
            {
              currentItems.map(product => (
                <Product key={product.id} product={product} />
              ))
            }
          </Row>
      }
      {
        !error && products.length !== 0 && <Pagination className="justify-content-center">
          <Pagination.First onClick={() => handlePageClick(0)} />
          <Pagination.Prev onClick={() => handlePageClick(selectedPage - 1)} />
          {items}
          <Pagination.Next onClick={() => handlePageClick(selectedPage + 1)} />
          <Pagination.Last onClick={() => handlePageClick(pageCount - 1)} />
        </Pagination>
      }
    </Container>
  );
};

export default ListProduct;
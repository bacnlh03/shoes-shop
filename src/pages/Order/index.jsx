import React, { useEffect } from "react";
import { Button, Container, Stack, Table } from "react-bootstrap";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import "./style.css";
import useOrderStore from "../../features/order/orderStore";
import { formatCash } from "../../utils/formatCash";

const Order = () => {
  const navigate = useNavigate();
  const { orders, getOrders } = useOrderStore();

  useEffect(() => {
    if (orders.length === 0) {
      getOrders();
    }
  }, [orders, getOrders]);

  return (
    <Container>
      {
        orders.length === 0
          ? <div>There is no order</div>
          : (
            <Stack direction="vertical">
              <Stack direction="horizontal">
                <h2>Orders</h2>
                <Button className="ms-auto btn-shopping" variant="outline" onClick={() => navigate('/')}>
                  <IoIosArrowBack />
                  Continue Shopping
                </Button>
              </Stack>

              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>ORDER</th>
                    <th>CREATED</th>
                    <th>PRICE</th>
                    <th>STATUS LAST UPDATED</th>
                    <th>STATUS</th>
                  </tr>
                </thead>

                <tbody>
                    {
                      orders.map(order => (
                        <tr>
                          <td>
                            {order.id}
                          </td>
                          <td>
                            {order.created}
                          </td>
                          <td>
                            {formatCash(order.totalPrice)}
                          </td>
                          <td>
                            {order.lastUpdated}
                          </td>
                          <td>
                            {order.status}
                          </td>
                        </tr>
                      ))
                    }
                </tbody>
              </Table>
            </Stack>
          )
      }
    </Container>
  );
};

export default Order;
import { getDate } from "../../utils/getDate";

let orders = JSON.parse(sessionStorage.getItem('orders')) || [];

const OrderService = {
  addOrder: async (values, total, cart) => {
    const { name, address, phone } = values;

    const order = {
      "id": Date.now().toString(36),
      "name": name,
      "address": address,
      "phone": phone,
      "products": cart,
      "totalPrice": total,
      "created": getDate(new Date()),
      "lastUpdated": getDate(new Date()),
      "status": "PENDING"
    };
    orders.push(order);
    sessionStorage.setItem('orders', JSON.stringify(orders));
  },
  getOrders: async () => {
    return orders;
  }
};

export default OrderService;
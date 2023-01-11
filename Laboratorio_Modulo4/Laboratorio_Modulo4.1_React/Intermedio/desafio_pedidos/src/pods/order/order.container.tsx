import { Button } from "@mui/material";
import React from "react";
import { order } from "../../app-common/order.mock";
import { OrderDetail } from "./order.detail.component";
import { OrderHeadboard } from "./order.headboard.component";

export const OrderContainer = () => {
  const [myOrder, setMyOrder] = React.useState(order);

  const changePrice = (id: number, value: string) => {
    const updateOrder = { ...myOrder };
    const mapOrder = updateOrder.details.map((item) => {
      if (item.id === id) {
        item.price = parseInt(value);
        return item;
      } else {
        return item;
      }
    });

    setMyOrder({ ...updateOrder, details: mapOrder });
  };

  const onChecked = (id: number) => {
    const updateOrder = { ...myOrder };
    const mapOrder = updateOrder.details.map((item) => {
      if (item.id === id) {
        item.state = !item.state;
        return item;
      } else {
        return item;
      }
    });
    setMyOrder({ ...updateOrder, details: mapOrder });
  };

  const onClick = () => {
    const arrayState = myOrder.details.map((item) => item.state);
    for (const bool of arrayState) {
      if (bool === false) {
        return alert("You have to validate all the fields");
      }
    }
    return alert("Order Send");
  };

  return (
    <>
      <OrderHeadboard
        numberOrder={myOrder.data.number}
        dateOrder={myOrder.data.date}
        providerOrder={myOrder.data.provider}
        totalAmount={myOrder.totalAmount}
        stateOrder={myOrder.stateOrder}
      />
      <OrderDetail
        orderDetails={myOrder.details}
        changePrice={changePrice}
        onChecked={onChecked}
      />
      {console.log("este es mi pedido", myOrder)}

      <Button variant="contained" onClick={() => onClick()}>
        Send
      </Button>
    </>
  );
};

import React from "react";

interface Props {
  numberOrder: number;
  dateOrder: string;
  providerOrder: string;
  totalAmount: () => number;
  stateOrder: () => string;
}

export const OrderHeadboard = (props: Props) => {
  const { numberOrder, dateOrder, providerOrder, totalAmount, stateOrder } =
    props;

  return (
    <>
      <div className="card-order">
        <div className="card-order-rows">
          <div className="card-order-items">
            <div>Number Order</div>
            <div>{numberOrder}</div>
          </div>
          <div className="card-order-items">
            <div>Provider</div>
            <div>{providerOrder}</div>
          </div>
          <div className="card-order-items">
            <div>Date</div>
            <div>{dateOrder}</div>
          </div>
        </div>
        <div className="card-order-rows">
          <div className="card-order-items">
            <div>Total Amount</div>
            <div>{totalAmount()} Euros</div>
          </div>
          <div className="card-order-items">
            <div>State Order</div>
            <div>{stateOrder()} %</div>
          </div>
        </div>
      </div>
    </>
  );
};

export const order: Order = {
  data: {
    number: 1,
    provider: "Hermanos Cambón S.A",
    date: "09/11/2023",
  },
  details: [
    {
      id: 1,
      description: "Batch of keyboards",
      state: false,
      price: 250,
    },
    {
      id: 2,
      description: "Batch of hard drives",
      state: false,
      price: 180,
    },
    {
      id: 3,
      description: "Batch of screens",
      state: false,
      price: 90,
    },
  ],

  totalAmount: () =>
    order.details
      .map((item) => {
        let itemPrice = item.price;
        if (Number.isNaN(itemPrice)) {
          return (itemPrice = 0);
        } else {
          return itemPrice;
        }
      })
      .reduce((acc, curr) => acc + curr, 0),

  stateOrder: () => {
    const arrayState = order.details.map((item) => item.state);
    const arrayStateFiltered = arrayState.filter((item) => item === true);
    console.log(arrayStateFiltered);
    console.log(
      typeof ((arrayStateFiltered.length / arrayState.length) * 100).toFixed(1)
    );
    return ((arrayStateFiltered.length / arrayState.length) * 100).toFixed(1);
  },
  sendOrder: false,
};

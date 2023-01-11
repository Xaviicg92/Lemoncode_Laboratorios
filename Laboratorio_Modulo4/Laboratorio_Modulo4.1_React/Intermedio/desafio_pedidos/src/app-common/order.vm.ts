interface Order {
  data: {
    number: number;
    provider: string;
    date: string;
  };

  details: {
    id: number;
    description: string;
    state: boolean;
    price: number;
  }[];

  totalAmount: () => number;
  stateOrder: () => string;
  sendOrder: boolean;
}

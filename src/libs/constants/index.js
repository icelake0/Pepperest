const payments = [
  {
    status: 'Pending',
    date: 'Jun 21, 2018',
    statusText: 'Pending, Due in 4 days',
    transactionId: '16835004G6739590D',
    customerName: 'James Blunt',
    transactionDate: 'Jun 21, 2018',
    transactionDatetime: 'January 21, 2019 / 15:00:23pm',
    paymentName: 'Ina Ankara Payment',
    deliveryDatetime:
      '13th - 15th August ( Your expected delivery date is 2 days from payment date.)',
    amount: '530,600',
    customerEmail: 'Tohbeey@gmail.com',
    paymentDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Pellentesque id nisl urna. Aenean eget blandit magna, sit ametposuere erat. Integer posuere odio tincidunt velit ornare,feugiat venenatis',
  },
  {
    status: 'Open',
    date: 'Jun 21, 2018',
    statusText: 'Pending, Due in 4 days',
    transactionId: '16835004G6739590D',
    customerName: 'James Blunt',
    transactionDate: 'Jun 21, 2018',
    transactionDatetime: 'January 21, 2019 / 15:00:23pm',
    paymentName: 'Big sized shoe',
    deliveryDatetime:
      '13th - 15th August ( Your expected delivery date is 2 days from payment date.)',
    amount: '530,600',
    customerEmail: 'grriend@gmail.com',
    paymentDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Pellentesque id nisl urna',
  },
  {
    status: 'Fulfilled',
    date: 'Jun 21, 2018',
    statusText: 'Pending, Due in 4 days',
    transactionId: '16835004G6739590D',
    customerName: 'James Blunt',
    transactionDate: 'Jun 21, 2018',
    transactionDatetime: 'January 21, 2019 / 15:00:23pm',
    paymentName: 'Big sized shoe',
    deliveryDatetime:
      '13th - 15th August ( Your expected delivery date is 2 days from payment date.)',
    amount: '530,600',
    customerEmail: 'grriend@gmail.com',
    paymentDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Pellentesque id nisl urna',
  },
  {
    status: 'Flagged',
    date: 'Jun 21, 2018',
    statusText: 'Pending, Due in 4 days',
    transactionId: '16835004G6739590D',
    customerName: 'James Blunt',
    transactionDate: 'Jun 21, 2018',
    transactionDatetime: 'January 21, 2019 / 15:00:23pm',
    paymentName: 'Big sized shoe',
    deliveryDatetime:
      '13th - 15th August ( Your expected delivery date is 2 days from payment date.)',
    amount: '530,600',
    customerEmail: 'grriend@gmail.com',
    paymentDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Pellentesque id nisl urna',
  },
  {
    status: 'Refund',
    date: 'Jun 21, 2018',
    statusText: 'Pending, Due in 4 days',
    transactionId: '16835004G6739590D',
    customerName: 'James Blunt',
    transactionDate: 'Jun 21, 2018',
    transactionDatetime: 'January 21, 2019 / 15:00:23pm',
    paymentName: 'Big sized shoe',
    deliveryDatetime:
      '13th - 15th August ( Your expected delivery date is 2 days from payment date.)',
    amount: '530,600',
    customerEmail: 'grriend@gmail.com',
    paymentDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Pellentesque id nisl urna',
  },
  {
    status: 'Release',
    date: 'Jun 21, 2018',
    statusText: 'Pending, Due in 4 days',
    transactionId: '16835004G6739590D',
    customerName: 'James Blunt',
    transactionDate: 'Jun 21, 2018',
    transactionDatetime: 'January 21, 2019 / 15:00:23pm',
    paymentName: 'Big sized shoe',
    deliveryDatetime:
      '13th - 15th August ( Your expected delivery date is 2 days from payment date.)',
    amount: '530,600',
    customerEmail: 'grriend@gmail.com',
    paymentDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Pellentesque id nisl urna',
  },
  {
    status: 'Stop',
    date: 'Jun 21, 2018',
    statusText: 'Pending, Due in 4 days',
    transactionId: '16835004G6739590D',
    customerName: 'James Blunt',
    transactionDate: 'Jun 21, 2018',
    transactionDatetime: 'January 21, 2019 / 15:00:23pm',
    paymentName: 'Big sized shoe',
    deliveryDatetime:
      '13th - 15th August ( Your expected delivery date is 2 days from payment date.)',
    amount: '530,600',
    customerEmail: 'grriend@gmail.com',
    paymentDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Pellentesque id nisl urna',
  },
  {
    status: 'Initial',
    date: 'Jun 21, 2018',
    statusText: 'Pending, Due in 4 days',
    transactionId: '16835004G6739590D',
    customerName: 'James Blunt',
    transactionDate: 'Jun 21, 2018',
    transactionDatetime: 'January 21, 2019 / 15:00:23pm',
    paymentName: 'Big sized shoe',
    deliveryDatetime:
      '13th - 15th August ( Your expected delivery date is 2 days from payment date.)',
    amount: '530,600',
    customerEmail: 'grriend@gmail.com',
    paymentDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Pellentesque id nisl urna',
  },
  {
    status: 'Awaiting',
    date: 'Jun 21, 2018',
    statusText: 'Pending, Due in 4 days',
    transactionId: '16835004G6739590D',
    customerName: 'James Blunt',
    transactionDate: 'Jun 21, 2018',
    transactionDatetime: 'January 21, 2019 / 15:00:23pm',
    paymentName: 'Big sized shoe',
    deliveryDatetime:
      '13th - 15th August ( Your expected delivery date is 2 days from payment date.)',
    amount: '530,600',
    customerEmail: 'grriend@gmail.com',
    paymentDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Pellentesque id nisl urna',
  },
  {
    status: 'Blocked',
    date: 'Jun 21, 2018',
    statusText: 'Pending, Due in 4 days',
    transactionId: '16835004G6739590D',
    customerName: 'James Blunt',
    transactionDate: 'Jun 21, 2018',
    transactionDatetime: 'January 21, 2019 / 15:00:23pm',
    paymentName: 'Big sized shoe',
    deliveryDatetime:
      '13th - 15th August ( Your expected delivery date is 2 days from payment date.)',
    amount: '530,600',
    customerEmail: 'grriend@gmail.com',
    paymentDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Pellentesque id nisl urna',
  },
];

const customers = [
  {
    status: 'Active',
    phone: '09020349834',
    customerName: 'James Blunt',
    datetime: 'January 21, 2019 / 15:00:23pm',
    paymentName: 'Big sized shoe',
    amount: '530,600',
    customerEmail: 'grriend@gmail.com',
    totalTransactions: '4',
    totalSpent: '5,030,600',
    recentTransactions: [
      {
        status: 'Initial',
        amount: '12,600',
        datetime: 'January 21, 2019 / 15:00:23pm',
      },
      {
        status: 'Fulfilled',
        amount: '18,600',
        datetime: 'January 21, 2019 / 15:00:23pm',
      },
      {
        status: 'Initial',
        amount: '130,600',
        datetime: 'January 21, 2019 / 15:00:23pm',
      },
      {
        status: 'Flagged',
        amount: '530,600',
        datetime: 'January 21, 2019 / 15:00:23pm',
      },
      {
        status: 'Awaiting',
        amount: '90,600',
        datetime: 'January 21, 2019 / 15:00:23pm',
      },
    ],
  },
  {
    status: 'Blocked',
    phone: '09020349834',
    customerName: 'James Blunt',
    paymentName: 'Big sized shoe',
    customerEmail: 'grriend@gmail.com',
    totalTransactions: '4',
    totalSpent: '5,030,600',
    recentTransactions: [
      {
        status: 'Initial',
        amount: '12,600',
        datetime: 'January 21, 2019 / 15:00:23pm',
      },
      {
        status: 'Fulfilled',
        amount: '18,600',
        datetime: 'January 21, 2019 / 15:00:23pm',
      },
      {
        status: 'Initial',
        amount: '130,600',
        datetime: 'January 21, 2019 / 15:00:23pm',
      },
      {
        status: 'Flagged',
        amount: '530,600',
        datetime: 'January 21, 2019 / 15:00:23pm',
      },
      {
        status: 'Awaiting',
        amount: '90,600',
        datetime: 'January 21, 2019 / 15:00:23pm',
      },
    ],
  },
  {
    status: 'Active',
    phone: '09020349834',
    customerName: 'James Blunt',
    paymentName: 'Big sized shoe',
    customerEmail: 'grriend@gmail.com',
    totalTransactions: '4',
    totalSpent: '5,030,600',
    recentTransactions: [
      {
        status: 'Initial',
        amount: '12,600',
        datetime: 'January 21, 2019 / 15:00:23pm',
      },
      {
        status: 'Fulfilled',
        amount: '18,600',
        datetime: 'January 21, 2019 / 15:00:23pm',
      },
      {
        status: 'Initial',
        amount: '130,600',
        datetime: 'January 21, 2019 / 15:00:23pm',
      },
      {
        status: 'Flagged',
        amount: '530,600',
        datetime: 'January 21, 2019 / 15:00:23pm',
      },
      {
        status: 'Awaiting',
        amount: '90,600',
        datetime: 'January 21, 2019 / 15:00:23pm',
      },
    ],
  },
  {
    status: 'Blocked',
    phone: '09020349834',
    customerName: 'James Blunt',
    paymentName: 'Big sized shoe',
    customerEmail: 'grriend@gmail.com',
    totalTransactions: '4',
    totalSpent: '5,030,600',
    recentTransactions: [
      {
        status: 'Initial',
        amount: '12,600',
        datetime: 'January 21, 2019 / 15:00:23pm',
      },
      {
        status: 'Fulfilled',
        amount: '18,600',
        datetime: 'January 21, 2019 / 15:00:23pm',
      },
      {
        status: 'Initial',
        amount: '130,600',
        datetime: 'January 21, 2019 / 15:00:23pm',
      },
      {
        status: 'Flagged',
        amount: '530,600',
        datetime: 'January 21, 2019 / 15:00:23pm',
      },
      {
        status: 'Awaiting',
        amount: '90,600',
        datetime: 'January 21, 2019 / 15:00:23pm',
      },
    ],
  },
  {
    status: 'Active',
    phone: '09020349834',
    customerName: 'James Blunt',
    paymentName: 'Big sized shoe',
    customerEmail: 'grriend@gmail.com',
    totalTransactions: '4',
    totalSpent: '5,030,600',
    recentTransactions: [
      {
        status: 'Initial',
        amount: '12,600',
        datetime: 'January 21, 2019 / 15:00:23pm',
      },
      {
        status: 'Fulfilled',
        amount: '18,600',
        datetime: 'January 21, 2019 / 15:00:23pm',
      },
      {
        status: 'Initial',
        amount: '130,600',
        datetime: 'January 21, 2019 / 15:00:23pm',
      },
      {
        status: 'Flagged',
        amount: '530,600',
        datetime: 'January 21, 2019 / 15:00:23pm',
      },
      {
        status: 'Awaiting',
        amount: '90,600',
        datetime: 'January 21, 2019 / 15:00:23pm',
      },
    ],
  },
  {
    status: 'Active',
    phone: '09020349834',
    customerName: 'James Blunt',
    paymentName: 'Big sized shoe',
    customerEmail: 'grriend@gmail.com',
    totalTransactions: '4',
    totalSpent: '5,030,600',
    recentTransactions: [
      {
        status: 'Initial',
        amount: '12,600',
        datetime: 'January 21, 2019 / 15:00:23pm',
      },
      {
        status: 'Fulfilled',
        amount: '18,600',
        datetime: 'January 21, 2019 / 15:00:23pm',
      },
      {
        status: 'Initial',
        amount: '130,600',
        datetime: 'January 21, 2019 / 15:00:23pm',
      },
      {
        status: 'Flagged',
        amount: '530,600',
        datetime: 'January 21, 2019 / 15:00:23pm',
      },
      {
        status: 'Awaiting',
        amount: '90,600',
        datetime: 'January 21, 2019 / 15:00:23pm',
      },
    ],
  },
];

const products = [
  {
    date: 'Jul 21, 2019',
    productId: '16835004G6739590D',
    productName: 'iTec 32" HD LED Television',
    dateCreated: 'January 21, 2019 / 15:00:23pm',
    transactions: '4',
    deliveryDate:
      '13th - 15th August ( Your expected delivery date is 2 days from payment date.)',
    amount: '530,600',
    productDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id nisl urna. Aenean eget blandit magna, sit amet posuere erat. Integer posuere odio tincidunt velit ornare, feugiat venenatis',
    recentTransactions: [
      {
        status: 'Initial',
        amount: '17,165.00',
        customerEmail: 'jameskane@gmail.com',
        datetime: 'Jun 29, 2019 / 9:01 AM',
      },
      {
        status: 'Fulfilled',
        amount: '17,165.00',
        customerEmail: 'jameskane@gmail.com',
        datetime: 'Jun 29, 2019 / 9:01 AM',
      },
      {
        status: 'Awaiting',
        amount: '17,165.00',
        customerEmail: 'jameskane@gmail.com',
        datetime: 'Jun 29, 2019 / 9:01 AM',
      },
      {
        status: 'Fulfilled',
        amount: '17,165.00',
        customerEmail: 'jameskane@gmail.com',
        datetime: 'Jun 29, 2019 / 9:01 AM',
      },
      {
        status: 'Initial',
        amount: '17,165.00',
        customerEmail: 'jameskane@gmail.com',
        datetime: 'Jun 29, 2019 / 9:01 AM',
      },
    ],
  },
  {
    date: 'Jul 21, 2019',
    productId: '16835004G6739590D',
    productName: 'iTec 32" HD LED Television',
    dateCreated: 'January 21, 2019 / 15:00:23pm',
    transactions: '4',
    deliveryDate:
      '13th - 15th August ( Your expected delivery date is 2 days from payment date.)',
    amount: '530,600',
    productDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id nisl urna. Aenean eget blandit magna, sit amet posuere erat. Integer posuere odio tincidunt velit ornare, feugiat venenatis',
    recentTransactions: [
      {
        status: 'Initial',
        amount: '17,165.00',
        customerEmail: 'jameskane@gmail.com',
        datetime: 'Jun 29, 2019 / 9:01 AM',
      },
      {
        status: 'Fulfilled',
        amount: '17,165.00',
        customerEmail: 'jameskane@gmail.com',
        datetime: 'Jun 29, 2019 / 9:01 AM',
      },
      {
        status: 'Awaiting',
        amount: '17,165.00',
        customerEmail: 'jameskane@gmail.com',
        datetime: 'Jun 29, 2019 / 9:01 AM',
      },
      {
        status: 'Fulfilled',
        amount: '17,165.00',
        customerEmail: 'jameskane@gmail.com',
        datetime: 'Jun 29, 2019 / 9:01 AM',
      },
      {
        status: 'Initial',
        amount: '17,165.00',
        customerEmail: 'jameskane@gmail.com',
        datetime: 'Jun 29, 2019 / 9:01 AM',
      },
    ],
  },
  {
    date: 'Jul 21, 2019',
    productId: '16835004G6739590D',
    productName: 'iTec 32" HD LED Television',
    dateCreated: 'January 21, 2019 / 15:00:23pm',
    transactions: '4',
    deliveryDate:
      '13th - 15th August ( Your expected delivery date is 2 days from payment date.)',
    amount: '530,600',
    productDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id nisl urna. Aenean eget blandit magna, sit amet posuere erat. Integer posuere odio tincidunt velit ornare, feugiat venenatis',
    recentTransactions: [
      {
        status: 'Initial',
        amount: '17,165.00',
        customerEmail: 'jameskane@gmail.com',
        datetime: 'Jun 29, 2019 / 9:01 AM',
      },
      {
        status: 'Fulfilled',
        amount: '17,165.00',
        customerEmail: 'jameskane@gmail.com',
        datetime: 'Jun 29, 2019 / 9:01 AM',
      },
      {
        status: 'Awaiting',
        amount: '17,165.00',
        customerEmail: 'jameskane@gmail.com',
        datetime: 'Jun 29, 2019 / 9:01 AM',
      },
      {
        status: 'Fulfilled',
        amount: '17,165.00',
        customerEmail: 'jameskane@gmail.com',
        datetime: 'Jun 29, 2019 / 9:01 AM',
      },
      {
        status: 'Initial',
        amount: '17,165.00',
        customerEmail: 'jameskane@gmail.com',
        datetime: 'Jun 29, 2019 / 9:01 AM',
      },
    ],
  },
  {
    date: 'Jul 21, 2019',
    productId: '16835004G6739590D',
    productName: 'iTec 32" HD LED Television',
    dateCreated: 'January 21, 2019 / 15:00:23pm',
    transactions: '4',
    deliveryDate:
      '13th - 15th August ( Your expected delivery date is 2 days from payment date.)',
    amount: '530,600',
    productDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id nisl urna. Aenean eget blandit magna, sit amet posuere erat. Integer posuere odio tincidunt velit ornare, feugiat venenatis',
    recentTransactions: [
      {
        status: 'Initial',
        amount: '17,165.00',
        customerEmail: 'jameskane@gmail.com',
        datetime: 'Jun 29, 2019 / 9:01 AM',
      },
      {
        status: 'Fulfilled',
        amount: '17,165.00',
        customerEmail: 'jameskane@gmail.com',
        datetime: 'Jun 29, 2019 / 9:01 AM',
      },
      {
        status: 'Awaiting',
        amount: '17,165.00',
        customerEmail: 'jameskane@gmail.com',
        datetime: 'Jun 29, 2019 / 9:01 AM',
      },
      {
        status: 'Fulfilled',
        amount: '17,165.00',
        customerEmail: 'jameskane@gmail.com',
        datetime: 'Jun 29, 2019 / 9:01 AM',
      },
      {
        status: 'Initial',
        amount: '17,165.00',
        customerEmail: 'jameskane@gmail.com',
        datetime: 'Jun 29, 2019 / 9:01 AM',
      },
    ],
  },
  {
    date: 'Jul 21, 2019',
    productId: '16835004G6739590D',
    productName: 'iTec 32" HD LED Television',
    dateCreated: 'January 21, 2019 / 15:00:23pm',
    transactions: '4',
    deliveryDate:
      '13th - 15th August ( Your expected delivery date is 2 days from payment date.)',
    amount: '530,600',
    productDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id nisl urna. Aenean eget blandit magna, sit amet posuere erat. Integer posuere odio tincidunt velit ornare, feugiat venenatis',
    recentTransactions: [
      {
        status: 'Initial',
        amount: '17,165.00',
        customerEmail: 'jameskane@gmail.com',
        datetime: 'Jun 29, 2019 / 9:01 AM',
      },
      {
        status: 'Fulfilled',
        amount: '17,165.00',
        customerEmail: 'jameskane@gmail.com',
        datetime: 'Jun 29, 2019 / 9:01 AM',
      },
      {
        status: 'Awaiting',
        amount: '17,165.00',
        customerEmail: 'jameskane@gmail.com',
        datetime: 'Jun 29, 2019 / 9:01 AM',
      },
      {
        status: 'Fulfilled',
        amount: '17,165.00',
        customerEmail: 'jameskane@gmail.com',
        datetime: 'Jun 29, 2019 / 9:01 AM',
      },
      {
        status: 'Initial',
        amount: '17,165.00',
        customerEmail: 'jameskane@gmail.com',
        datetime: 'Jun 29, 2019 / 9:01 AM',
      },
    ],
  },
];

const instagramProducts = [
  {
    imageUrl: '',
    date: 'Jun 21, 2019',
    product_name: 'Red shwad shoe',
    product_price: '450,000',
    hasImageUrl: false,
  },
  {
    imageUrl: '',
    date: 'Jun 21, 2019',
    product_name: 'Red shwad shoe',
    product_price: '450,000',
    hasImageUrl: false,
  },
  {
    imageUrl: '',
    date: 'Jun 21, 2019',
    product_name: 'Red shwad shoe',
    product_price: '450,000',
    hasImageUrl: false,
  },
  {
    imageUrl: '',
    date: 'Jun 21, 2019',
    product_name: 'Red shwad shoe',
    product_price: '450,000',
    hasImageUrl: false,
  },
  {
    imageUrl: '',
    date: 'Jun 21, 2019',
    product_name: 'Red shwad shoe',
    product_price: '450,000',
    hasImageUrl: false,
  },
  {
    imageUrl: '',
    date: 'Jun 21, 2019',
    product_name: 'Red shwad shoe',
    product_price: '450,000',
    hasImageUrl: false,
  },
  {
    imageUrl: '',
    date: 'Jun 21, 2019',
    product_name: 'Red shwad shoe',
    product_price: '450,000',
    hasImageUrl: false,
  },
  {
    imageUrl: '',
    date: 'Jun 21, 2019',
    product_name: 'Red shwad shoe',
    product_price: '450,000',
    hasImageUrl: false,
  },
  {
    imageUrl: '/assets/images/avatar.jpg',
    date: 'Jun 21, 2019',
    product_name: 'Lius Vulton Shade grey big bag',
    product_price: '450,000',
    hasImageUrl: true,
  },
  {
    imageUrl: '/assets/images/avatar.jpg',
    date: 'Jun 21, 2019',
    product_name: 'Lius Vulton Shade grey big bag',
    product_price: '450,000',
    hasImageUrl: true,
  },
  {
    imageUrl: '/assets/images/avatar.jpg',
    date: 'Jun 21, 2019',
    product_name: 'Lius Vulton Shade grey big bag',
    product_price: '450,000',
    hasImageUrl: true,
  },
  {
    imageUrl: '/assets/images/avatar.jpg',
    date: 'Jun 21, 2019',
    product_name: 'Lius Vulton Shade grey big bag',
    product_price: '450,000',
    hasImageUrl: true,
  },
  {
    imageUrl: '/assets/images/avatar.jpg',
    date: 'Jun 21, 2019',
    product_name: 'Lius Vulton Shade grey big bag',
    product_price: '450,000',
    hasImageUrl: true,
  },
  {
    imageUrl: '/assets/images/avatar.jpg',
    date: 'Jun 21, 2019',
    product_name: 'Lius Vulton Shade grey big bag',
    product_price: '450,000',
    hasImageUrl: true,
  },
  {
    imageUrl: '/assets/images/avatar.jpg',
    date: 'Jun 21, 2019',
    product_name: 'Lius Vulton Shade grey big bag',
    product_price: '450,000',
    hasImageUrl: true,
  },
  {
    imageUrl: '/assets/images/avatar.jpg',
    date: 'Jun 21, 2019',
    product_name: 'Lius Vulton Shade grey big bag',
    product_price: '450,000',
    hasImageUrl: true,
  },
];

export {
  payments, customers, products, instagramProducts,
};

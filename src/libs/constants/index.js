const payments = [
  {
    status: 'Pending',
    date: 'Jun 21, 2018',
    statusText: 'Pending, Due in 4 days',
    transaction_id: '16835004G6739590D',
    customer_name: 'James Blunt',
    transaction_date: 'Jun 21, 2018',
    transaction_datetime: 'January 21, 2019 / 15:00:23pm',
    payment_name: 'Ina Ankara Payment',
    delivery_datetime:
      '13th - 15th August ( Your expected delivery date is 2 days from payment date.)',
    amount: '530,600',
    customer_email: 'Tohbeey@gmail.com',
    payment_description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.Pellentesque id nisl urna. Aenean eget blandit magna, sit ametposuere erat. Integer posuere odio tincidunt velit ornare,feugiat venenatis`
  },
  {
    status: 'Open',
    date: 'Jun 21, 2018',
    statusText: 'Pending, Due in 4 days',
    transaction_id: '16835004G6739590D',
    customer_name: 'James Blunt',
    transaction_date: 'Jun 21, 2018',
    transaction_datetime: 'January 21, 2019 / 15:00:23pm',
    payment_name: 'Big sized shoe',
    delivery_datetime:
      '13th - 15th August ( Your expected delivery date is 2 days from payment date.)',
    amount: '530,600',
    customer_email: 'grriend@gmail.com',
    payment_description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.Pellentesque id nisl urna`
  },
  {
    status: 'Fulfilled',
    date: 'Jun 21, 2018',
    statusText: 'Pending, Due in 4 days',
    transaction_id: '16835004G6739590D',
    customer_name: 'James Blunt',
    transaction_date: 'Jun 21, 2018',
    transaction_datetime: 'January 21, 2019 / 15:00:23pm',
    payment_name: 'Big sized shoe',
    delivery_datetime:
      '13th - 15th August ( Your expected delivery date is 2 days from payment date.)',
    amount: '530,600',
    customer_email: 'grriend@gmail.com',
    payment_description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.Pellentesque id nisl urna`
  },
  {
    status: 'Flagged',
    date: 'Jun 21, 2018',
    statusText: 'Pending, Due in 4 days',
    transaction_id: '16835004G6739590D',
    customer_name: 'James Blunt',
    transaction_date: 'Jun 21, 2018',
    transaction_datetime: 'January 21, 2019 / 15:00:23pm',
    payment_name: 'Big sized shoe',
    delivery_datetime:
      '13th - 15th August ( Your expected delivery date is 2 days from payment date.)',
    amount: '530,600',
    customer_email: 'grriend@gmail.com',
    payment_description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.Pellentesque id nisl urna`
  },
  {
    status: 'Refund',
    date: 'Jun 21, 2018',
    statusText: 'Pending, Due in 4 days',
    transaction_id: '16835004G6739590D',
    customer_name: 'James Blunt',
    transaction_date: 'Jun 21, 2018',
    transaction_datetime: 'January 21, 2019 / 15:00:23pm',
    payment_name: 'Big sized shoe',
    delivery_datetime:
      '13th - 15th August ( Your expected delivery date is 2 days from payment date.)',
    amount: '530,600',
    customer_email: 'grriend@gmail.com',
    payment_description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.Pellentesque id nisl urna`
  },
  {
    status: 'Release',
    date: 'Jun 21, 2018',
    statusText: 'Pending, Due in 4 days',
    transaction_id: '16835004G6739590D',
    customer_name: 'James Blunt',
    transaction_date: 'Jun 21, 2018',
    transaction_datetime: 'January 21, 2019 / 15:00:23pm',
    payment_name: 'Big sized shoe',
    delivery_datetime:
      '13th - 15th August ( Your expected delivery date is 2 days from payment date.)',
    amount: '530,600',
    customer_email: 'grriend@gmail.com',
    payment_description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.Pellentesque id nisl urna`
  },
  {
    status: 'Stop',
    date: 'Jun 21, 2018',
    statusText: 'Pending, Due in 4 days',
    transaction_id: '16835004G6739590D',
    customer_name: 'James Blunt',
    transaction_date: 'Jun 21, 2018',
    transaction_datetime: 'January 21, 2019 / 15:00:23pm',
    payment_name: 'Big sized shoe',
    delivery_datetime:
      '13th - 15th August ( Your expected delivery date is 2 days from payment date.)',
    amount: '530,600',
    customer_email: 'grriend@gmail.com',
    payment_description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.Pellentesque id nisl urna`
  },
  {
    status: 'Initial',
    date: 'Jun 21, 2018',
    statusText: 'Pending, Due in 4 days',
    transaction_id: '16835004G6739590D',
    customer_name: 'James Blunt',
    transaction_date: 'Jun 21, 2018',
    transaction_datetime: 'January 21, 2019 / 15:00:23pm',
    payment_name: 'Big sized shoe',
    delivery_datetime:
      '13th - 15th August ( Your expected delivery date is 2 days from payment date.)',
    amount: '530,600',
    customer_email: 'grriend@gmail.com',
    payment_description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.Pellentesque id nisl urna`
  },
  {
    status: 'Awaiting',
    date: 'Jun 21, 2018',
    statusText: 'Pending, Due in 4 days',
    transaction_id: '16835004G6739590D',
    customer_name: 'James Blunt',
    transaction_date: 'Jun 21, 2018',
    transaction_datetime: 'January 21, 2019 / 15:00:23pm',
    payment_name: 'Big sized shoe',
    delivery_datetime:
      '13th - 15th August ( Your expected delivery date is 2 days from payment date.)',
    amount: '530,600',
    customer_email: 'grriend@gmail.com',
    payment_description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.Pellentesque id nisl urna`
  },
  {
    status: 'Blocked',
    date: 'Jun 21, 2018',
    statusText: 'Pending, Due in 4 days',
    transaction_id: '16835004G6739590D',
    customer_name: 'James Blunt',
    transaction_date: 'Jun 21, 2018',
    transaction_datetime: 'January 21, 2019 / 15:00:23pm',
    payment_name: 'Big sized shoe',
    delivery_datetime:
      '13th - 15th August ( Your expected delivery date is 2 days from payment date.)',
    amount: '530,600',
    customer_email: 'grriend@gmail.com',
    payment_description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.Pellentesque id nisl urna`
  }

];

const customers = [
  {
    status: 'Active',
    phone: '09020349834',
    customer_name: 'James Blunt',
    datetime: 'January 21, 2019 / 15:00:23pm',
    payment_name: 'Big sized shoe',
    amount: '530,600',
    customer_email: 'grriend@gmail.com',
    total_transactions: '4',
    total_spent: '5,030,600',
    recent_transactions: [
      {
        status: 'Initial',
        amount: '12,600',
        datetime: 'January 21, 2019 / 15:00:23pm'
      },
      {
        status: 'Fulfilled',
        amount: '18,600',
        datetime: 'January 21, 2019 / 15:00:23pm'
      },
      {
        status: 'Initial',
        amount: '130,600',
        datetime: 'January 21, 2019 / 15:00:23pm'
      },
      {
        status: 'Flagged',
        amount: '530,600',
        datetime: 'January 21, 2019 / 15:00:23pm'
      },
      {
        status: 'Awaiting',
        amount: '90,600',
        datetime: 'January 21, 2019 / 15:00:23pm'
      }
    ]
  },
  {
    status: 'Blocked',
    phone: '09020349834',
    customer_name: 'James Blunt',
    payment_name: 'Big sized shoe',
    customer_email: 'grriend@gmail.com',
    total_transactions: '4',
    total_spent: '5,030,600',
    recent_transactions: [
      {
        status: 'Initial',
        amount: '12,600',
        datetime: 'January 21, 2019 / 15:00:23pm'
      },
      {
        status: 'Fulfilled',
        amount: '18,600',
        datetime: 'January 21, 2019 / 15:00:23pm'
      },
      {
        status: 'Initial',
        amount: '130,600',
        datetime: 'January 21, 2019 / 15:00:23pm'
      },
      {
        status: 'Flagged',
        amount: '530,600',
        datetime: 'January 21, 2019 / 15:00:23pm'
      },
      {
        status: 'Awaiting',
        amount: '90,600',
        datetime: 'January 21, 2019 / 15:00:23pm'
      }
    ]
  },
  {
    status: 'Active',
    phone: '09020349834',
    customer_name: 'James Blunt',
    payment_name: 'Big sized shoe',
    customer_email: 'grriend@gmail.com',
    total_transactions: '4',
    total_spent: '5,030,600',
    recent_transactions: [
      {
        status: 'Initial',
        amount: '12,600',
        datetime: 'January 21, 2019 / 15:00:23pm'
      },
      {
        status: 'Fulfilled',
        amount: '18,600',
        datetime: 'January 21, 2019 / 15:00:23pm'
      },
      {
        status: 'Initial',
        amount: '130,600',
        datetime: 'January 21, 2019 / 15:00:23pm'
      },
      {
        status: 'Flagged',
        amount: '530,600',
        datetime: 'January 21, 2019 / 15:00:23pm'
      },
      {
        status: 'Awaiting',
        amount: '90,600',
        datetime: 'January 21, 2019 / 15:00:23pm'
      }
    ]
  },
  {
    status: 'Blocked',
    phone: '09020349834',
    customer_name: 'James Blunt',
    payment_name: 'Big sized shoe',
    customer_email: 'grriend@gmail.com',
    total_transactions: '4',
    total_spent: '5,030,600',
    recent_transactions: [
      {
        status: 'Initial',
        amount: '12,600',
        datetime: 'January 21, 2019 / 15:00:23pm'
      },
      {
        status: 'Fulfilled',
        amount: '18,600',
        datetime: 'January 21, 2019 / 15:00:23pm'
      },
      {
        status: 'Initial',
        amount: '130,600',
        datetime: 'January 21, 2019 / 15:00:23pm'
      },
      {
        status: 'Flagged',
        amount: '530,600',
        datetime: 'January 21, 2019 / 15:00:23pm'
      },
      {
        status: 'Awaiting',
        amount: '90,600',
        datetime: 'January 21, 2019 / 15:00:23pm'
      }
    ]
  },
  {
    status: 'Active',
    phone: '09020349834',
    customer_name: 'James Blunt',
    payment_name: 'Big sized shoe',
    customer_email: 'grriend@gmail.com',
    total_transactions: '4',
    total_spent: '5,030,600',
    recent_transactions: [
      {
        status: 'Initial',
        amount: '12,600',
        datetime: 'January 21, 2019 / 15:00:23pm'
      },
      {
        status: 'Fulfilled',
        amount: '18,600',
        datetime: 'January 21, 2019 / 15:00:23pm'
      },
      {
        status: 'Initial',
        amount: '130,600',
        datetime: 'January 21, 2019 / 15:00:23pm'
      },
      {
        status: 'Flagged',
        amount: '530,600',
        datetime: 'January 21, 2019 / 15:00:23pm'
      },
      {
        status: 'Awaiting',
        amount: '90,600',
        datetime: 'January 21, 2019 / 15:00:23pm'
      }
    ]
  },
  {
    status: 'Active',
    phone: '09020349834',
    customer_name: 'James Blunt',
    payment_name: 'Big sized shoe',
    customer_email: 'grriend@gmail.com',
    total_transactions: '4',
    total_spent: '5,030,600',
    recent_transactions: [
      {
        status: 'Initial',
        amount: '12,600',
        datetime: 'January 21, 2019 / 15:00:23pm'
      },
      {
        status: 'Fulfilled',
        amount: '18,600',
        datetime: 'January 21, 2019 / 15:00:23pm'
      },
      {
        status: 'Initial',
        amount: '130,600',
        datetime: 'January 21, 2019 / 15:00:23pm'
      },
      {
        status: 'Flagged',
        amount: '530,600',
        datetime: 'January 21, 2019 / 15:00:23pm'
      },
      {
        status: 'Awaiting',
        amount: '90,600',
        datetime: 'January 21, 2019 / 15:00:23pm'
      }
    ]
  }
];

export {
  payments,
  customers
}
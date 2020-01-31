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
    status: 'Closed',
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

export {
    payments
}
import PropTypes from 'prop-types';

import { TableHeading, Table, TableCells } from './TransactionHistory.styled';

export const TransactionHistory = ( {items} ) => {
    const capitalizeFirst = str => {
        return str.charAt(0).toUpperCase() + str.slice(1);
      };

    return <Table>
    <thead>
      <tr>
        <TableHeading>Type</TableHeading>
        <TableHeading>Amount</TableHeading>
        <TableHeading>Currency</TableHeading>
      </tr>
    </thead>
  
    <tbody>
    { items.map(item =>(
        <tr key={item.id}>
        <TableCells>{capitalizeFirst(item.type)}</TableCells>
        <TableCells>{item.amount}</TableCells>
        <TableCells>{item.currency}</TableCells>
      </tr>
    )) }
    </tbody>
  </Table>
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount:PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
    })).isRequired,
}
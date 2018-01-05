import React from 'react';
import { Link } from 'react-router-dom';

const ExpenseListItem = ({description, amount, createdAt, note, id }) => (
  <div>
    <Link to={`/edit/${id}`}>
      <h3>{description}</h3>
    </Link>
    <p>{amount} - {createdAt}</p>
    <p>{note}</p>
  </div>
);

export default ExpenseListItem;

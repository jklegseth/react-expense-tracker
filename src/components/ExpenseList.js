import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

export const ExpenseList = (props) => (
  <div>
    {
      props.expenses.length === 0 ? (
        <p>No expenses</p>
      ) : (
        props.expenses.map(expense => (<ExpenseListItem {...expense} key={expense.id} />))
      )
    }
  </div>
);

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  }
};


/**
 * The React-Redux connect function generates a wrapper component that subscribes to the store. That wrapper component calls store.getState() after each dispatched action, calls the supplied mapStateToProps function with the current store state, and if necessary, calls mapDispatchToProps with the store's dispatch function.
 */
export default connect(mapStateToProps)(ExpenseList);

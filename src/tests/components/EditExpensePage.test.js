import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';

let editExpense, removeExpense, onClick, history, wrapper;

beforeEach(() => {
  editExpense = jest.fn()
  removeExpense = jest.fn()
  onClick = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(
    <EditExpensePage
      removeExpense={removeExpense}
      editExpense={editExpense}
      expense={expenses[2]}
      history={history}
    />
  );
});

test('should render EditExpensePage correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit to edit expense', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2]);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(editExpense).toHaveBeenLastCalledWith(expenses[2].id, expenses[2]);
});

test('should handle onClick to remove expense', () => {
  wrapper.find('button').simulate('click');
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(removeExpense).toHaveBeenLastCalledWith({ id: expenses[2].id });
});

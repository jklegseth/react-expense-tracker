import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT'});
  expect(state).toEqual([]);
});

test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});


test('should not remove expense if id not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: -1
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});


test('should add expense', () => {
  const action = {
    type: 'ADD_EXPENSE',
    expense: {
      description: 'A new expense',
      note: 'A new note',
      amount: 195,
      id: '111',
      createdAt: 20000
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, action.expense])
});

test('should edit expense by id', () => {
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[1].id,
    updates: {
      name: 'My New Name'
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state[1].name).toBe('My New Name');
});

test('should not edit expense by invalid id', () => {
  const action = {
    type: 'EDIT_EXPENSE',
    id: -1,
    updates: {
      name: 'My New Name'
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('should set expenses', () => {
  const action = {
    type: 'SET_EXPENSES',
    expenses: [expenses[1]]
  }

  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[1]]);
});

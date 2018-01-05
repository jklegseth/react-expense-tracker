import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('should setup remove expense action object', () => {
  const action = removeExpense({ id: '123abc' });
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  });
});

test('should setup remove expense action object', () => {
  const action = editExpense('123abc', { note: 'I was edited', amount: 9200} );
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123abc',
    updates: {
      note: 'I was edited',
      amount: 9200
    }
  });
});

test('should setup remove expense action object', () => {
  const action = editExpense('123abc', { note: 'I was edited', amount: 9200} );
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123abc',
    updates: {
      note: 'I was edited',
      amount: 9200
    }
  });
});

test('should setup add expense action object', () => {
  const expenseData = {
    description: 'my new expense',
    note: 'my new note',
    amount: 1900,
    createdAt: 0
  }
  const action = addExpense(
    {
      description: 'my new expense',
      note: 'my new note',
      amount: 1900,
    }
  );
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  });
});

test('should setup add expense action object width default values', () => {
  const action = addExpense();
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      description: '',
      note: '',
      amount: 0,
      createdAt: 0,
      id: expect.any(String)
    }
  });
});

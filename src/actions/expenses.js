import database from '../firebase/firebase';
/**
 * actions:
 * component calls action generator
 * action generator returns object
 * component dispatches object
 * redux store changes
 *
 * with async/firebase
 * component calls action generator
 * action generator returns function
 * component dispatches function (?) (not supported by redux, expects object, so we use middleware)
 * function runs (has the ability to dispatch other actions and do whatever it wants)
 *
 * so below, we gutted addExpense because now startAddExpense does all the work,
 * pushes to firebase and IT then dispatches addExpense
 */

// ADD_EXPENSE
export const addExpense = (expense) => ({
  type: 'ADD_EXPENSE',
  expense
});

// only possible with thunk
export const startAddExpense = (expenseData = {}) => {
  return (dispatch) => {
    const {
      description = '',
      note = '',
      amount = 0,
      createdAt = 0
    } = expenseData;
    const expense = { description, note, amount, createdAt };
    // return added here for testing, to allow another .then
    return database.ref('expenses').push(expense).then((ref) => {
      dispatch(addExpense({
        id: ref.key,
        ...expense
      }));
    });
  };
};

// REMOVE_EXPENSE
export const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
});

export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../../app/store';

interface BubbleState {
  isOpen: boolean;
  data: any;
  isLoading: boolean;
}

const initialState: BubbleState = {
  isOpen: false,
  data: {},
  isLoading: false
};

export const bubbleSlice = createSlice({
  name: 'bubble',
  initialState,
  reducers: {
    open: state => {
      state.isOpen = true;
    },
    close: state => {
      state.isOpen = false;
    },
    toggle: state => {
      state.isOpen = !state.isOpen;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    setData: (state, action: PayloadAction<any>) => {
      state.data = action.payload;
      state.isLoading = false;
      state.isOpen = true;
    },
    setLoading: (state, {payload}: PayloadAction<boolean>) => {
      state.isLoading = payload;
    }
  },
});

export const { open, close, toggle, setData, setLoading} = bubbleSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const getTodos = (amount: number): AppThunk => dispatch => {
  dispatch(setLoading(true));
  fetch('https://jsonplaceholder.typicode.com/todos/'+amount)
  .then(response => response.json())
  .then(json => dispatch(setData(json)))
};

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectIsOpen = (state: RootState) => ({ isOpen: state.bubble.isOpen, isLoading: state.bubble.isLoading, data: state.bubble.data });

export default bubbleSlice.reducer;

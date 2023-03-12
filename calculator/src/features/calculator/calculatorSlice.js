import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	sequence: '',
};

export const calculatorSlice = createSlice({
	name: 'calculator',
	initialState,
	reducers: {
		pressButton: (state, action) => {
			state.sequence += action.payload;
		},

		backspace: (state) => {
			state.sequence = state.sequence.slice(0, -1);
		},

        clear: (state) => {
            state.sequence = '';
        },

		getResult: (state) => {
			try {
				const result = eval(state.sequence).toString();
                state.sequence = result;
			} catch (err) { state.sequence = 'Error'; }
		},
	},
});

// Action creators are generated for each case reducer function
export const { pressButton, backspace, clear, getResult } = calculatorSlice.actions;

export default calculatorSlice.reducer;

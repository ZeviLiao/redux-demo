import { createAction } from 'redux-actions';

// action types
export const PLUS = 'PLUS';
export const MINUS = 'MINUS';

export const add = createAction(PLUS, () => 1);
export const sub = createAction(MINUS, () => 1);


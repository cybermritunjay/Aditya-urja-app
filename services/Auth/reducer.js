import * as actionTypes from './actionTypes';

const initialState = {
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.LOGIN:
			return {
                    user:action.items.user,
                    token:action.items.token
			};
		case actionTypes.LOGOUT:
			return {
			};
		default:
			return state;
	}
};

export default reducer
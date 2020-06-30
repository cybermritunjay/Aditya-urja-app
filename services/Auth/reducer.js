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
		case actionTypes.UPDATE:
			return{
				...state,
				user:action.items.user
			};
		default:
			return state;
	}
};

export default reducer
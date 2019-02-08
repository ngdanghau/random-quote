import {
	QUOTE_GET_ITEM,
	QUOTE_GET_ITEM_SUCCESS,
	QUOTE_GET_ITEM_ERROR
} from 'Constants/actionTypes';

const INIT_STATE = {
	quoteItem: null,
	error: '',
	loading: false
};

export default (state = INIT_STATE, action) => {
	switch (action.type) {

		case QUOTE_GET_ITEM:
			return { ...state, loading: false };

		case QUOTE_GET_ITEM_SUCCESS:
			return { ...state, loading: true, quoteItem: action.payload };

		case QUOTE_GET_ITEM_ERROR:
			return { ...state, loading: true, error: action.payload };

		default: return { ...state };
	}
}

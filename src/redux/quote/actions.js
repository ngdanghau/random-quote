import {
    QUOTE_GET_ITEM,
    QUOTE_GET_ITEM_SUCCESS,
    QUOTE_GET_ITEM_ERROR
} from 'Constants/actionTypes';


export const getQuoteItem = () => ({
    type: QUOTE_GET_ITEM
});

export const getQuoteItemSuccess = (items) => ({
    type: QUOTE_GET_ITEM_SUCCESS,
    payload: items
});

export const getQuoteItemError = (error) => ({
    type: QUOTE_GET_ITEM_ERROR,
    payload: error
});
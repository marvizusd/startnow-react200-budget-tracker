const defaultState = {
    description: '',
    amount: '',
    lineItems: []
};

export default function ExpenseReducer (state = defaultState, action){
    // the 'state = defaultState' above is new ES6 syntax
    // for defining a default value on a parameter
    const { type, payload } = action;

    switch (type) {
        // Here in the case of the update description action
        case 'UPDATE_EXPENSE_DESCRIPTION' : {
            // we'll return an object
            return {
                // with all the previos state
                ...state,
                // but overwriting the description
                description: payload.description
            };
        }

        case 'UPDATE_EXPENSE_AMOUNT': {
            return {
                ...state,
                amount: payload.amount
            };
        }

        case 'ADD_EXPENSE': {
            const { description, amount, key } = action.payload;
            return {
                description: '',
                amount:'',
                action: '',
                lineItems: [
                    // here we have all the previous line items
                    ...state.lineItems,
                    // plus a new object
                    { description, amount, key }
                ]
            };
        }

        default: {
            return state;
        }
    }
}
const defaultState = {
    description: '',
    amount: '',
    lineItems: []
};

export default function IncomeReducer (state = defaultState, action){
      // the `state = defaultState` above is new ES6 syntax
      // for defining a default value on a parameter
      const { type, payload } = action;

      switch (type) {
          case 'UPDATE_INCOME_DESCRIPTION': {
              return {
                  ...state,
                  description: payload.description
              };
          }

          case 'UPDATE_INCOME_AMOUNT': {
              return {
                  ...state,
                  amount: payload.amount
              };
          }
          
          case 'ADD_INCOME': {
              const { description, amount, key } = action.payload;
              console.log(action.payload)
              return {
                  description: '',
                  amount:'',
                  action: '',
                  lineItems: [
                      ...state.lineItems,
                      { description, amount, key }
                  ]
              };
          }
          default: {
              return state;
          }
      }
}
import { connect } from 'react-redux';
import IncomeEntries from './IncomeEntries';

// this function takes the store and returns an object
// that's passed to the props of the component.
function mapStoreToProps(store) {
    return {
        description: store.income.description,
        amount: store.income.amount,
        lineItems: store.income.lineItems
    };
}

export default connect(mapStoreToProps)(IncomeEntries);
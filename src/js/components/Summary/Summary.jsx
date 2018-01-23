import React from 'react';

function calculateSum(lineItems) {
    return lineItems.reduce((acc, lineItem) => acc + lineItem.amount, 0);
}

function formatCurrency(amount) {
    if(amount >= 0){
        const dollars = Math.floor(amount);
        const cents = Math.floor((amount - dollars)* 100).toString().padEnd(2, '0');
        return `$${dollars.toLocaleString()}.${cents}`;
    }

    const dollars = Math.ceil(amount);
    const cents = Math.floor((amount - dollars)* 100 * -1).toString().padEnd(2, '0');
    return `-$${(dollars * -1).toLocaleString()}.${cents}`;
}

export default class Summary extends React.Component {
    render(){
        const { incomeItems, expenseItems } = this.props;
        console.log(this.props, incomeItems)

        const incomeTotal = calculateSum(incomeItems);
        const expenseTotal = calculateSum(expenseItems);
        const difference = (incomeTotal - expenseTotal).toFixed(2);
        
        return (
            <div className='card border-info mb-3'>
                <div className='card-header text-white bg-info'>Summary</div>
                <div className='card-body'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-6 text-center'>
                                <h6 className='h6 strong'>Total Income</h6>
                                <p>${incomeTotal}</p>
                            </div>
                            <div className='col-6 text-center'>
                                <h6 className='h6 strong'>Total Expenses</h6>
                                <p>${expenseTotal}</p>
                            </div>
                        </div>
                        <div className='row justify-content-center'>
                            <div className='col-6 text-center'>
                                <h6 className='h6 strong'>Left after spending</h6>
                                <p>${difference}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
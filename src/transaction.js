import React from 'react'
import {withRouter} from 'react-router'
import Bank from './bank'

class Transaction extends React.Component{
    state = {
        history:[]
    }
    render(){
      
        
        return(
            <div className="container">
                <h1>Transaction History</h1>
                <table className="table">
                    <tr>
                        <th>Type of Transaction</th>
                        <th>Amount</th>
                    </tr>
                    {
                        this.state.history.length==0?
                        <tr><td>No transaction</td></tr>:null
                    }
                    
                   {
                        this.state.history.map(h=><tr>
                            <td>{h.TypeOfTransaction}</td>
                            <td>{h.amount1}</td>
                        </tr>)
                    }
                   
                </table>

            </div>
        )
    }

    componentDidMount(){
        Bank.transaction()
        .then(response=>{
            this.setState({history:response.data.history})
           

        })
       

    }
}

export default withRouter(Transaction);
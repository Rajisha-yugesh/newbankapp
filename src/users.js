import React from 'react'
import {withRouter} from 'react-router';
import Bank from './bank'

class Users extends  React.Component{
    state={
        users:[]

    }
    deleteuser=(acno)=>{
        Bank.deleteUser(acno);
        alert("successfully deleted");
        this.setState({
            
            
        })

    }

    componentDidMount(){

        Bank.getUser()
        .then(response=>{
            this.setState({
                users:response.data.users
            }
            )
        })
    }


    render(){
        // let users=Bank.getUser();
        return(
            <div className="container">
                <h1>Users list</h1>
                <table className="table">
                    <thead>
                        
                    <tr>
                        <th>User Name</th>
                        <th>Balance</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        // object.keys -converts object to array
                        users.map(key=><tr> 
                            <td>{users.name}</td>
                            <td>{users.balance}</td>
                            <td onClick={()=>{this.deleteuser(key)}}>Delete</td>
                        </tr>)
                    }
                    </tbody>
                   
                </table>

            </div>
        )

    }

}

export default withRouter(Users);
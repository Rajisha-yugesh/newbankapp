import React from 'react'
import Bank from './bank'
import { Link } from 'react-router-dom'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'

const depositSchema = Yup.object().shape({
    acno: Yup.string()
        .min(2, 'too short')
        .max(10, 'too long')
        .required('required'),
    dpamount: Yup.string()
        .min(2, 'too short')
        .max(10, 'too long')
        .required('required'),
   


})

const withdrawSchema = Yup.object().shape({
    acno: Yup.string()
        .min(2, 'too short')
        .max(10, 'too long')
        .required('required'),
    wtamount: Yup.string()
        .min(2, 'too short')
        .max(10, 'too long')
        .required('required'),
   


})


class Home extends React.Component {
    state = {
        acno: "",
        dpamount: "",
        wtamount: "",
        balance: ""
    }





    onacnoChange = (event) => {
        this.setState({
            acno: event.target.value
        })
    }

    dpamountChange = (event) => {
        this.setState({
            dpamount: event.target.value
        })
    }

    wtamountChange = (event) => {
        this.setState({
            wtamount: event.target.value
        })
    }

    onDeposit = (values) => {
        // event.preventDefault();
        let acno = values.acno;
        let amount = Number(values.dpamount);
        // let data=Bank.getaccountDetails();

        Bank.deposit(acno,amount)

            .then(response => {
                this.setState({ balance: response.data.balance })
                alert("deposi sucessfull", response.data.message, "sucess")

            })
            .catch(err => {
                alert("deposit failed", err.response.data.message, "failed")
            })

        // if(acno in data){
        //     data[acno].balance+=amount;
        //     let bal=data[acno].balance;

        //     data[acno].history.push({
        //         TypeofTransaction:"credit",
        //         amount1:amount
        //     })
        //     this.setState({balance:bal});
        //     alert("acno number"+acno+" has been credited  "+amount+"rs successfully");
        // }
        // else{
        //     alert("incorrect details")
        // }
    }

    onWithdraw = (values) => {
        // event.preventDefault();
        let acno = values.acno;
        let amount = parseInt(values.wtamount);

        Bank.withdraw(acno,amount)

            .then(response => {
                alert("withdraw sucessfull", response.data.message, "sucess")

            })
            .catch(err => {
                alert("withdraw failed", err.response.data.message, "failed")
            })
        // let data=Bank.getaccountDetails();
        // if(acno in data){
        //     let am=data[acno].balance;
        //     if(amount<am){
        //     data[acno].balance-=amount;

        //     // this.setState({balance:amount});
        //     alert("acno number"+acno+" has been debited  "+amount+"rs successfully");
        //     let bal=data[acno].balance;

        //     data[acno].history.push({
        //         TypeofTransaction:"debit",
        //         amount1:amount
        //     })
        //     this.setState({balance:bal});
        //     }
        //     else{
        //         alert("insufficient balance");
        //     }
        // }
        // else{
        //     alert("incorrect details")
        // }
    }




    render() {
        return (
            <div className="container">
                balance:{this.state.balance}

                <Link to="/transaction">History</Link>
                <div className="row">
                    <div className="col-4"></div>
                    <div className="col-4"><strong></strong>WELCOME USER</div>
                    <div className="col-4"></div>
                </div>



                <div className="jumbotron">
                    <div className="row">
                        <div className="col-5">
                            <Formik
                                initialValues={{
                                    acno: "",
                                    dpamount: ""
                                }}
                                validationSchema={depositSchema}
                                onSubmit={this.onDeposit}
                            >
                                {({ errors }) => (

                                    <Form>
                                        acno
                                        <Field name="acno" />
                                        {errors.acno ? (<div>{errors.acno}</div>) : null}<br></br>
                                         amount
                                        <Field name="dpamount" />
                                        {errors.password ? (<div>{errors.password}</div>) : null}<br></br>
                                        <button type="submit">submit</button>



                                    </Form>
                                )}
                            </Formik>

                        </div>
                        <div className="col-2"></div>

                        <div className="col-5">
                            <Formik
                                initialValues={{
                                    acno: "",
                                    wtamount: ""
                                }}
                                validationSchema={withdrawSchema}
                                onSubmit={this.onWithdraw}
                            >
                                {({ errors }) => (

                                    <Form>
                                        acno
                                        <Field name="acno" />
                                        {errors.acno ? (<div>{errors.acno}</div>) : null}<br></br>
                                        amount
                                        <Field name="wtamount" />
                                        {errors.password ? (<div>{errors.password}</div>) : null}<br></br>
                                        <button type="submit">submit</button>



                                    </Form>
                                )}
                            </Formik>

                        </div>

                    </div>
                </div>
            </div>


        );
    }
}

export default Home;
import React from 'react'
import Bank from './bank'
import Swal from 'sweetalert' 
import {withRouter} from 'react-router';//withrouter-higher order component --its a function that takes a componen and reurn new component
import {Formik,Form,Field} from 'formik'
import * as Yup from 'yup'

const LoginSchema=Yup.object().shape({
    acno:Yup.string()
    .min(2,'too short')
    .max(10,'too long')
    .required('required'),
    password:Yup.string()
    .min(2,'too short')
    .max(10,'too long')
    .required('required')


    
})
class Login extends React.Component{
    state={
        acno:"",
        password:""
    }
   



    onacnoChange=(event)=>{
        this.setState({
            acno:event.target.value
        })
    }

    onpwdChange=(event)=>{
        this.setState({
            password:event.target.value
        })
    }

    onSubmit=(values)=>{
        // event.preventDefault();
        let acno=values.acno;
        let pwd=values.password;

        Bank.login(acno,pwd)
        .then(response=>{
            alert("api response",response.data.message,"sucess")
            this.props.history.push("/home")
        })
        .catch(err=>{
            alert("api response error","u provided invalid msg","error")
        })
        // let data=Bank.getaccountDetails();

        // let password = data[acno].password;
        // if (acno in data) {
        //     if (password == pwd) {
        //         Swal("login successfull");

        //         Bank.setCurrentUser(acno);
        //         // Bank.currentUser=acno;
        //         // console.log(this.props)
        //         this.props.history.push("/home")

        //         // setTimeout(()=>window.location.href="/home",5000);
              

        //     }
        //     else{
        //         alert("incorrect details");
        //     }
           

        // }

    }

    // static deposit(){
    //     let acno=document.querySelector("#acno").value;
    //     let bal=Number(document.querySelector("#amount").value)
    //     let data=Bank.getaccountDetails();
    //     if(acno in data){
    //         data[acno].balance+=bal;
    //         alert("acno number"+acno+" has been credited  "+bal+"rs successfully");
    //     }
    //     else{
    //         alert("incorrect details")
    //     }
        

    // }

    

    render(){
        return (
            <div classNameName="container">
                <div className="row">
                    <div className="col-4"></div>
                    <div className="col-4"><strong></strong>WELCOME TO YESBANK</div>
                    <div className="col-4"></div>
                </div>



                <div className="jumbotron">
                    <div className="row">
                        <div className="col-4"></div>
                        <div className="col-4">
                            <Formik
                            initialValues={{
                                acno:"",
                                password:""
                            }}
                            validationSchema={LoginSchema}
                            onSubmit={this.onSubmit}
                            >
                            {({errors})=>(

                            <Form >
                                acno
                                <Field name="acno" />
                                {errors.acno?(<div>{errors.acno}</div>):null}<br></br>
                                password
                                <Field name="password" />
                                {errors.password?(<div>{errors.password}</div>):null}<br></br>
                                <button type="submit">submit</button>

                               
                                
                            </Form>
                            )}
                           </Formik>
                        </div>
                    </div>
                    <div className="col-4"></div>
                </div>
                </div>
        );
    }
}

export default withRouter(Login);
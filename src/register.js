import React from 'react'
// import Swal from 'sweetalert' 
import {withRouter} from 'react-router';
// import swal from 'sweetalert';
import Bank from './bank';
import {Formik,Form,Field} from 'formik'
import * as Yup from 'yup'

const RegisterSchema=Yup.object().shape({
    acno:Yup.string()
    .min(2,'too short')
    .max(10,'too long')
    .required('required'),
    password:Yup.string()
    .min(2,'too short')
    .max(10,'too long')
    .required('required'),
    

})

class Register extends React.Component{
    state={
        acno:"",
        password:"",
        cpassword:"",
        name:"",

    }

  
    
    onacnoChange=(event)=>{
        this.setState({
            acno:event.target.value
        })
    }

    onnameChange=(event)=>{
        this.setState({
           name:event.target.value
        })
    }

    onpwdChange=(event)=>{
        this.setState({
            password:event.target.value
        })
    }

    oncpwdChange=(event)=>{
        this.setState({
           cpassword:event.target.value
        })
    }

    onSubmit=(values)=>{
        // event.preventDefault();
        let acno=values.acno;
        let pwd=values.password;
        let name=values.name;
        let cpwd=values.cpassword;

        Bank.register(acno,pwd,name,cpwd)
        .then(response=>{
            alert("register sucess",response.data.message,"sucess")
            this.props.history.push("/")

        })
        .catch(err=>{
            alert("register failed",err.response.data.message,"failed")
        })


        // let data=Bank.getaccountDetails();

        // // let password = data[acno].password;
        // if (acno in data) {
            
        //         Swal("account already exists");
        // }else if(pwd!=cpwd){
        //     swal("password mismatch")
        // }
        // else{
        //     Bank.addUser(name,acno,pwd)
        //     swal("successfully registered")
        // }
        //         // console.log(this.props)
        //         this.props.history.push("/")

        //         // setTimeout(()=>window.location.href="/home",5000);
              

        
           

        

    }

    render(){
        return (
            <div classNameName="container">
                <div className="row">
                    <div className="col-4"></div>
                    <div className="col-4"><strong></strong>REGISTER</div>
                    <div className="col-4"></div>
                </div>



                <div className="jumbotron">
                    <div className="row">
                        <div className="col-4"></div>
                        <div className="col-4">

                        <Formik
                            initialvalues={{
                                acno:"",
                                password:"",
                                cpassword:"",
                                name:""
                            }}
                            validationSchema={RegisterSchema}
                            onSubmit={values=>{
                                console.log(values)

                            }}
                            >
                            {({errors})=>(

                            <Form >
                                acno
                                <Field name="acno" />
                                {errors.acno?(<div>{errors.acno}</div>):null}<br></br>
                                password
                                <Field name="password" />
                                {errors.password?(<div>{errors.password}</div>):null}<br></br>
                                confirm password
                                <Field name="cpassword" />
                                {errors.cpassword?(<div>{errors.cpassword}</div>):null}<br></br>
                                Name
                                <Field name="name" />
                                {errors.name?(<div>{errors.name}</div>):null}<br></br>
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

export default withRouter(Register);
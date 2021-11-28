import React, {useState} from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { BrowserRouter, Route, Switch,Link,useNavigate } from 'react-router-dom';
import {signIn} from './signIn';
import {auth} from './config';

function SignUp(){

const navigate = useNavigate();
const [email,setemail] = useState('');
const [password,setpassword] = useState('');
const [username,setusername] = useState('');
const onSubmit =  (e)=>{
                   
                       e.preventDefault()
                       auth.createUserWithEmailAndPassword(email,password)
                       navigate('/signin')
                     
                       }
                                                             
return(
     
     
     
     <>
 <Form 
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      autoComplete="off"
    >
      <Form.Item onChange={(e)=>{return setemail(e.target.value)}} value={email}
        label="Email"
        name="Email"
        rules={[{ required: true, message: 'Please input your Email!' }]}
      >
        <Input />
      </Form.Item>
       
      <Form.Item onChange={(e)=>{return setusername(e.target.value)}} value={username}
        label="Username"
        name="Username"
        rules={[{ required: true, message: 'Please input your Username!' }]}
      >
        <Input />
      </Form.Item>
       

      <Form.Item onChange={(e)=>{return setpassword(e.target.value)}} value={password}
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
        <Checkbox>Remember me</Checkbox>
      </Form.Item>
      
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
      <Button type="primary" htmlType="submit" onClick={onSubmit}>
       SignUP
        </Button>
        <Button type="primary" htmlType="submit">
        <Link to="/signin">Signin</Link>
        </Button> 
      </Form.Item>


      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
        <Link to="/signin">Signin</Link>
        </Button>
      </Form.Item>
     
      
   
    </Form>







                </>






)






}

export {SignUp}
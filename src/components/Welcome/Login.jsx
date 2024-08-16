import React, { useState } from 'react'
import 'src/assets/css/Login.css'
import { useRef } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useNavigate, Link } from 'react-router-dom'
import { login } from 'src/services/auth'
import { usernameRule, emailRule, passwordRule, rePasswordRule } from 'src/common/rules'
import { Button, Checkbox, Form, Input } from 'antd'
import { Spin } from 'antd'

function Login() {
  const [loading, setLoading] = useState(false)

  const nav = useNavigate()
  const onFinish = async (values) => {
    setLoading(true) // Set loading to true when API call starts

    try {
      var data = await login(values)
      const token = data.jwt
      const user = data.user
      localStorage.setItem('token', token)
      localStorage.setItem('user', JSON.stringify(user))
      toast.success('Logged in successfully!')
      nav('/home')
    } catch (err) {
      toast.error('Login failed, try again please !')

      console.log(err)
    }
    setLoading(false) // Set loading to false if API call fails
  }
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  // const login = (e) => {
  //   e.preventDefault()
  //   auth
  //     .signInWithEmailAndPassword(emailRef.current.value, passwordRef.current.value)
  //     .then((authUser) => {
  //       toast.success('Logged in successfully!')
  //     })
  //     .catch((error) => {
  //       toast.error('Login failed, try again please !')
  //     })
  // }
  return (
    <>
      <Spin
        className='spin-custom'
        spinning={loading}
        // indicator={<LoadingOutlined />}
        size='large'
      >
        <div className='page'>
          <div className='container  max-w-1/2 rounded-lg	 bg-white my-6 p-2 flex align-center justify-center  h-2/4	w-2/3	 mx-auto'>
            <Form
              className='	flex flex-col	'
              name='basic'
              labelCol={{
                span: 8
              }}
              wrapperCol={{
                span: 16
              }}
              initialValues={{
                remember: true
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete='off'
            >
              <h1 className='text-center text-3xl mb-4	font-bold	'>Sign In</h1>

              <Form.Item label='Email' name='identifier' rules={emailRule}>
                <Input />
              </Form.Item>

              <Form.Item label='Password' name='password' rules={passwordRule}>
                <Input.Password />
              </Form.Item>

              <Form.Item
                wrapperCol={{
                  offset: 8,
                  span: 16
                }}
              >
                <Button type='primary' htmlType='submit'>
                  Đăng nhập
                </Button>
              </Form.Item>
              <h4 className='my-5 	'>
                <span className='container-footer-question text-xl text-red-600'>New to Netflix?</span>
                <Link to='/' className='signup-link text-xl mx-3'>
                  Sign up now
                </Link>
              </h4>
            </Form>
          </div>
        </div>
      </Spin>
      <ToastContainer />
    </>
  )
}

export default Login

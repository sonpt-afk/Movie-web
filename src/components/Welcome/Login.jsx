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
import { setUserAccess } from 'src/redux/auth'
import { useDispatch } from 'react-redux'
function Login() {
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()
  const nav = useNavigate()
  const onFinish = async (values) => {
    setLoading(true) // Set loading to true when API call starts

    try {
      let response = await login(values)
      let { jwt, user } = await response?.data
      dispatch(
        setUserAccess({
          token: jwt,
          user: user
        })
      )
      toast.success('Đăng nhập thành công!')

      nav('/home')
    } catch (err) {
      toast.error('Đăng nhập không thành công, kiểm tra email/pass và thử lại!')

      console.log(err)
    }
    setLoading(false) // Set loading to false if API call fails
  }
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <>
      <Spin
        className='spin-custom'
        spinning={loading}
        // indicator={<LoadingOutlined />}
        size='large'
      >
        <div className='page'>
          <div className='container  pt-5 pb-5 max-w-1/2 rounded-lg	 bg-white my-6  flex align-center justify-center  h-1/2	w-1/2	 mx-auto'>
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
              <h1 className='text-center text-5xl mb-10	font-bold	'>Sign In</h1>

              <Form.Item
                label='Email'
                name='email'
                rules={emailRule}
                labelCol={{ className: 'text-4xl font-semibold ' }}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label='Password'
                name='password'
                rules={passwordRule}
                labelCol={{ className: 'text-4xl font-semibold ' }}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item
                wrapperCol={{
                  offset: 8,
                  span: 16
                }}
              >
                <Button type='primary' htmlType='submit' className=' text-3xl w-6/10 absolute right-1/2	text-center'>
                  Đăng nhập
                </Button>
              </Form.Item>
              <h4 className='my-5  '>
                <span className='container-footer-question sm:text-2xl lg:text-4xl text-center text-red-600'>
                  Mới sử dụng Netflix?
                </span>
                <br />
                <Link to='/' className='signup-link sm:text-2xl lg:text-4xl mx-3 text-center'>
                  Đăng ký ngay
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

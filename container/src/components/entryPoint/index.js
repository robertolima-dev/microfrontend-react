import React, { useState, useEffect } from "react";
import { LoadingOutlined } from '@ant-design/icons'
import axios from 'axios'
import Header from '../header'

const RedirectComponent = (props) => {
//   const [path] = useState(props.match.params.path)
//   const [role] = useState(props.match.params.role)
  const [token] = useState(props.match.params.token)

  useEffect(() => {
        async function authUser() {
          getUserMe()
        }
        authUser()
    // eslint-disable-next-line
    }, [])
  const getUserMe = async () => {
    const config = {
        headers: { Authorization: `Bearer ${token}` },
    };
    const data = { token }
    await axios.post(`${process.env.REACT_APP_API_MASTER}/admin/user/data-user-new-route`, data, config)
    .then(async res => {
        if(res.data && res.status === 200) {
            window.sessionStorage.setItem('authority', JSON.stringify(res.data.authority))
            window.sessionStorage.setItem('authority_roles', JSON.stringify(res.data.authority_roles))
            await axios.get(`${process.env.REACT_APP_API_MASTER}/user/me`, config)
            .then(res => {
                if(res.data && res.status === 200) {
                    window.sessionStorage.setItem('user', JSON.stringify(res.data))
                    // window.location.href = `/${role}/${path}`
                    window.location.href = `/`
                } else {
                    // window.location.href = '/'
                }    
            })
        } else {
            // window.location.href = '/'
        }
    })
    .catch(err => {
        if(err) {
            // window.location.href = '/'
        }
    })
  }

  return (
    <div>
      <Header />

      <div style={{ marginTop: '250px' }}>
        <div style={{ width: '80px', margin: 'auto', textAlign: 'center' }}>
          <LoadingOutlined style={{ fontSize: '3rem' }} />
        </div>
      </div>
    </div>
  )
}

export default RedirectComponent;
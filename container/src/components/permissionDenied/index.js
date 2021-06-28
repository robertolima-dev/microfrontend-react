import React from "react";
import { Result } from 'antd'

const PermissionDenied = () => {
  return (
    <Result
      style={{ marginTop: '100px' }}
      status="403"
      title="403"
      subTitle="Desculpe, você não tem acesso a essa página."
    />
  )
}

export default PermissionDenied;
import React from "react";
import { Result } from 'antd'

const ErrorPage = () => {
  return (
    <Result
      style={{ marginTop: '100px' }}
      status="404"
      title="404"
      subTitle="Desculpe, a página que você visitou não existe."
    />
  )
}

export default ErrorPage;
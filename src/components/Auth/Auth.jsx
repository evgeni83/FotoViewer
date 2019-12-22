import React, { useEffect } from "react";

const Auth = ({ authorize }) => {
  useEffect(() => authorize());
  return <div>REDIRECT TO AUTH PAGE</div>;
};

export default Auth;

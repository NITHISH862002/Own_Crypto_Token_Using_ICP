import ReactDOM from 'react-dom'
import React from 'react'
import App from "./components/App";
import { AuthClient } from '../../../node_modules/@dfinity/auth-client/lib/cjs/index';

const init = async () => { 

  const authClient= await AuthClient.create();

  if(await authClient.isAuthenticated())
  {
    handleAuthentication(authClient);
  }else{
    await authClient.login(
      {
        identityProvider:"https://identity.ic0.app/#authorize",
        onSucess:()=>{
          handleAuthentication(authClient);
        }}
    );

  }
 
  
};
// async function handleAuthentication(authClient)
// {
//   const identity= await authClient.getIdentity();
//   const userPrincipal=identity._Principal.toString();
//   console.log(userPrincipal);
//   ReactDOM.render(<App  LoggedInPrincipal={userPrincipal}/>, document.getElementById("root"));
// };
async function handleAuthentication(authClient) {
  const identity = await authClient.getIdentity();
  const userPrincipal = identity._principal.toString();
  console.log(userPrincipal);
  ReactDOM.render(
    <App loggedInPrincipal={userPrincipal} />,
    document.getElementById("root")
  );
};

init();



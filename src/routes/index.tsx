import React from "react";

import {View} from 'react-native';

import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';

function Routes(){
  const isAuthenticated = false;
  const loading = false;

  if(loading){
    return(
      <View style={{ flex:1 }}>

      </View>
    )
  }


  return(
    isAuthenticated ? <AppRoutes/> : <AuthRoutes/>
  )
}


export default Routes;
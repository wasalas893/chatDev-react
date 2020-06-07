import * as actionTypes from "./types";
/*user Action Type*/
export const setUser = user => {
  return {
    type: actionTypes.SET_USER,
    payload: {
      currentUser: user
    }
  };
};
     //signout
export const clearUser=()=>{
  return {
    type: actionTypes.CLEAR_USER
  }
};

/*Channel Action Type*/
export const setCurrentChannel=channel=>{
  return {
     type:actionTypes.SET_CURRENT_CHANNEL,
     payload:{
       currentChannel:channel
     }
  }
}

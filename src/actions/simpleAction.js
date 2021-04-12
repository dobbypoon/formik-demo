export const simpleAction = (payload) => dispatch => {
    dispatch({
     type: 'register/updateResult',
     payload: payload
    })
   }

import {GET_USER} from './userType'

const authReducer = (state=null,action) => {
    switch (action.type) {
        case GET_USER: return action.payload
        //  {
        //     ...state,
        //     name: action.payload,
        //     photo:action.photo,
        //     address:action.address,
        //     email:action.email 
        // }
         ||false
        default:
            return state
    }
}

export default authReducer
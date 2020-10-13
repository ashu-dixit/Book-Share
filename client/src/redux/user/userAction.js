import axios from 'axios'

export const fetchUsername = () => {
    return (dispatch) => {

        axios.get('/login/user')
            .then((user) => {
                console.log(user + " User Action");
                dispatch({
                   type: 'GET_USER',
                    payload: user.data,
                })

            })

    }
}
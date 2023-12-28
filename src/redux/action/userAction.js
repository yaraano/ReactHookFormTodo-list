import axios from "axios";

export const addUser = (user) => {
    return dispatch => {
        axios.post('https://656426d1ceac41c0761d83f4.mockapi.io/users', user)
          .then(({data}) => {
              console.log(data)
            })
    }
}
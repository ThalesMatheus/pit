import axios from 'axios';

export const jwtcheck = async (token) => {
    await axios.post("http://localhost:8800/valida", {
    token
  }).then(data  => {
    if( data.data === false ){
        return{
            redirect: {
                destination: '/login',
                permanent: false
            }
    }}
    else {
        return null;
    } 
})};
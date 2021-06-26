import {useState, useEffect} from 'react'
import axios from 'axios';
import Card from './Card';


const UserList = () => {
    const [userList, setUserList] = useState([]);

    useEffect(() =>{
        axios.get('https://jsonplaceholder.typicode.com/users').then(
            res => setUserList(res.data)
        )
    }, [setUserList])

    return(
        <div style = {{display : 'grid', gridColumnGap :'20px', gridTemplateColumns:'repeat(4, 1fr)',gridRowGap : '40px', gridColumn : '2 / span 1', gridRow : '2 / span 1'}}>
            {userList.map(item =>  
                <div>
                        <Card user = {item}/>
                </div>
            )}
                
        </div>
    )
}

export default UserList;
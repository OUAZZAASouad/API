import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser , faPhone, faEnvelope, faGlobe, faBuilding} from '@fortawesome/free-solid-svg-icons'

const Card = ({user}) => {
    return(
        <div style = {{boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', width : '250px', position: 'relative', padding : '10px'}}>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiXi8wID4TbrNfdFrXLICEuaOa7G6kaP5oAZmq5JCxZfx0Gz0mWrR38dp4zKNCSySkAQ0&usqp=CAU' width = '50px' height = '50px' style = {{borderRadius : '50px', position : 'absolute', left : '35%', top : '-30px' }}/>
            <div style = {{display : 'flex'}}><p><FontAwesomeIcon icon = {faUser} color = '#0097A7'/></p><p style = {{paddingLeft : '10px'}}>{user.name}</p></div>
            <div style = {{display : 'flex'}}><p><FontAwesomeIcon icon = {faUser} color = '#0097A7'/></p><p style = {{paddingLeft : '10px'}}>{user.username}</p></div>
            <div style = {{display : 'flex'}}><p><FontAwesomeIcon icon = {faPhone} color = '#0097A7'/></p><p style = {{paddingLeft : '10px'}}>{user.phone}</p></div>
            <div style = {{display : 'flex'}}><p><FontAwesomeIcon icon = {faEnvelope} color = '#0097A7'/></p><p style = {{paddingLeft : '10px'}}>{user.email}</p></div>
            <div style = {{display : 'flex'}}><p><FontAwesomeIcon icon = {faGlobe} color = '#0097A7'/></p><p style = {{paddingLeft : '10px'}}>{user.website}</p></div>
            <div style = {{display : 'flex'}}><p><FontAwesomeIcon icon = {faBuilding} color = '#0097A7'/></p><p style = {{paddingLeft : '10px'}}>{user.company.name}</p></div>

        </div>
    )
}

export default Card;
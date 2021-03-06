import React from 'react';
import IconLabel from './IconLabel.js';

//компонент информации о пользователе
class UserFrame extends React.Component{
    render(){
       return <div>
           <img className="userAvatar" src={this.props.image} alt={this.props.alt}/>
           <h2 className="userName">{this.props.name}</h2>
           <h3 className="userAlias">{this.props.alias}</h3>
           <h3 className="userDescription">{this.props.desc}</h3>
           <hr/>
           <IconLabel icon="address-book-o" text={this.props.company}/>
           <IconLabel  icon="map-marker" text={this.props.address}/>
           <IconLabel  icon="envelope" href={"mailto:"+this.props.mail} text={this.props.mail} />
           <IconLabel  icon="twitter" href={this.props.blog} text={this.props.blog}/>

           <IconLabel icon="history" text={new Date(this.props.created).toLocaleString()}/>
        </div>
    }
}

UserFrame.defaultProps = {alt:"Картинка"};

export default UserFrame;
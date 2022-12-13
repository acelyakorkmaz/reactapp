import React, { Component } from 'react'
import PropTypes from 'prop-types'//impt tab

  class User extends Component {
    state = {
        isVisible:true
    }
//     constructor(props){
//         super(props);
//         this.state={
//           isVisible:false
//         }
//     } ctrl-k-c

  render() {
    
    //Destructing
    const{name, department, sallary}=this.props;
    const{isVisible}=this.state;
    return (
      <div className='col-md-8 mb-4'>
      <div className="card">
        <div className="card-header d-flex justify-content-between">
           <h4 className='d-inline'>{name}</h4>
           <i className="fa fa-trash-o" aria-hidden="true"></i>

        </div>
        {
            isVisible ?
            <div className="card-body">
            <p className="card-text">Maaş:{sallary}</p>
            <p className="card-text">Departman:{department}</p>
            
        </div>
        :null
        }
        
      </div>
      </div>
    )
  }
}
User.defaultProps={
    name:"Bilgi Yok",
    department:"Bilgi yok",
    sallary:"Bilgi YOK"


}
User.propTypes={
    name:PropTypes.string.isRequired,
    sallary:PropTypes.string.isRequired,
    department:PropTypes.string.isRequired

}
export default User;


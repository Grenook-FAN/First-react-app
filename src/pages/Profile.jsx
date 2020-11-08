import React from 'react'
import {Redirect} from 'react-router-dom'
import { connect } from 'react-redux'

function Profile({isAuth}) {
    console.log(isAuth);
    if(isAuth === false){
        return(
            <Redirect to='/login'></Redirect>
        )   
    }
    else{
        return (
            <div>
                <h1>HEllo git</h1>
            </div>
        )
    }
    
    
}

const mapStateToProps = state => ({
    isAuth: state.isLogined
})


export default connect(mapStateToProps)(Profile) 

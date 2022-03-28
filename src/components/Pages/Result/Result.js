import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './Result.css'

const Result = () => {

    const userInfo= JSON.parse(sessionStorage.getItem('userInfo'))

    const [horoscopeInfo,setHoroscopeInfo]=useState()

    let myStyle={};

    const fetchHoroscopeDetails=async(sign,date)=>{
        const {data}= await axios.get(`https://sandipbgt.com/theastrologer/api/horoscope/${sign}/${date}/`)

        

        setHoroscopeInfo(data)
    }

    useEffect(() => {
        
        fetchHoroscopeDetails(userInfo.sign,userInfo.date)
            
    }, [userInfo.sign,userInfo.date]);

    if(!horoscopeInfo){
        return(
            <h4 style={{textAlign:'center' , margin:'1rem 0rem'}} >Loading...</h4>
        )
    }

    if(userInfo.date==='today'){
        myStyle={
            backgroundColor:'#a4f7a4',
            padding:'1rem'
        }
    }

    return (
        <div className='result'>
            <div className="greeting">
                Welcome, {userInfo.name}
            </div>
            <div className="details">
                <h1>Your {userInfo.date} horoscope is: </h1>
                <p className='description' style={myStyle}>{horoscopeInfo.horoscope}</p>
            </div>
        </div>
    )
}

export default Result
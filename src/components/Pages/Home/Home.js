import { Button, MenuItem, TextField } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Signs } from '../../../Data/HoroscopeSigns'
import Banner from '../../../images/banner.svg'
import ErrorMessage from '../../../ui/ErrorMessage'
import './Home.css'


const Home = () => {

    const [error,setError]=useState()

    const [name,setName]=useState('')

    const [email,setEmail]=useState('')

    const [sign,setSign]=useState('')

    const [date,setDate]=useState('')

    const history= useHistory()

    const handleHoroscope=()=>{
        if(!name || !sign || !date){
            setError('Please Specify All The Fields')
            return;
        }

        if(!email || !email.includes('@')){
            setError('Please Enter A Valid Email !')
            return;
        }

        sessionStorage.setItem('userInfo',JSON.stringify({name,email,sign,date}))

        history.push('/result')
    }

    useEffect(() => {

        if(error){
            let timer= setTimeout(() => {
                setError(null)
            },2000);

            return()=>{
               
                clearTimeout(timer)
            }
        }
        
        // eslint-disable-next-line

    }, [error]);

    return(
        <div className="home">
            <div className="settings">
                <h1>Horoscope Settings</h1>
                {error && <ErrorMessage>{error}</ErrorMessage>}
                <TextField label='Name' variant='outlined' required style={{margin:'1rem 0rem'}}
                value={name} onChange={(e)=>setName(e.target.value)}/>
                <TextField label='Email Address' variant='outlined' type='email' required value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <TextField select variant='outlined' label='Signs' required style={{margin:'1rem 0rem'}} value={sign} onChange={(e)=>setSign(e.target.value)}>
                    {Signs.map((sign,index)=>{
                        return(
                            <MenuItem key={index} value={sign}>
                                {sign}
                            </MenuItem>
                        )
                    })}
                </TextField>
                <TextField select variant='outlined' label='Date' required value={date} onChange={(e)=>setDate(e.target.value)}>
                    <MenuItem value='yesterday'>Yesterday</MenuItem>
                    <MenuItem value='today'>Today</MenuItem>
                    <MenuItem value='tomorrow'>Tomorrow</MenuItem>
                </TextField>
                <Button variant='contained' color='primary' size='large' style={{margin:'1rem 0rem'}}onClick={handleHoroscope}>Submit</Button>
            </div>
            <img src={Banner} alt="banner" />
        </div>
    )
  
}

export default Home
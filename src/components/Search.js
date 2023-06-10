import React from 'react'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import SettingsVoiceRoundedIcon from '@mui/icons-material/SettingsVoiceRounded';
import styled from 'styled-components';
import { Button } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {useStateValue} from './StateProvider'
import {actionTypes} from './reducer'
const Search = ({hideButtons=false}) => {

    const [{},dispatch] = useStateValue();

const [input,setIinput] = useState('')
const navigate = useNavigate()
    const search = (e) =>{
e.preventDefault();
console.log("i m working")

dispatch({
    //  eslint-disable-next-line
    type:actionTypes.SET_SEARCH_TERM,
    term:input
})

navigate("/search");
    }
  return (
    <form>
        { !hideButtons ? (
        <SearchInput>
<SearchRoundedIcon/>
<input value={ input} onChange={(e) => setIinput( e.target.value)}type="text" />
<SettingsVoiceRoundedIcon/>
        </SearchInput>
        ) :( <RE>
            <SearchRoundedIcon/>
            <input value={ input} onChange={(e) => setIinput( e.target.value)}type="text" />
            <SettingsVoiceRoundedIcon/>
                    </RE>)
}
      
       {/* Search Button */}
{ !hideButtons ?(
<SearchButton>
    <Button type='submit' onClick={search}variant='outlined'> Google Search</Button>
    <Button variant='outlined'> I 'm Felling Lucky</Button>
</SearchButton>
) : 
(
    <SearchButtonhidden>
    <Button type='submit' onClick={search}variant='outlined'> Google Search</Button>
    <Button variant='outlined'> I 'm Felling Lucky</Button>
</SearchButtonhidden>
)
}
    </form>
  )
}

// const ContainerSearch = styled.div`

// `
const RE = styled.div`
display:flex;
align-items:center;
border:1px solid lightgrey;
height:50px;
padding:10px 20px;
border-radius:999px;
width:unset;
margin: unset;
margin-top:0px;
max-width:unset;
input{
    flex:1;
    padding:10px 20px;
    font-size:medium;
    border:none;
    &:focus{
        outline-width:0;
    }
}

`
 export const SearchInput =styled.div`
display:flex;
align-items:center;
border:1px solid lightgrey;
height:50px;
padding:10px 20px;
border-radius:999px;
width:85vw;
margin: 0 auto;
margin-top:30px;
max-width:560px;
input{
    flex:1;
    padding:10px 20px;
    font-size:medium;
    border:none;
    &:focus{
        outline-width:0;
    }
}

`

const SearchButton = styled.div`
margin-top:30px;
display:flex;
justify-content:center;
button{
    margin:5px;
    padding :7px 14px;
    background-color:#f8f8f8;
    border:1px solid white;
    color:#5f6368;
    text-transform:inherit;
    &:hover{
        box-shadow: 0 1px 1px rgba(0,0,0,0.1);
        background-color:#f8f8f8;
    }
}
`
const SearchButtonhidden = styled.div`
display:none  !important;
`
export default Search

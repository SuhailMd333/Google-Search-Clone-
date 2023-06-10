import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import AppsIcon from "@mui/icons-material/Apps";
import { Avatar } from "@mui/material";
import Search from "./Search";
const Home = () => {
  return (
    <HomeContainer>
      <HomeHeader>
        <LeftHeader>
          <Link to="/about"> About </Link>
          <Link to="/store"> Store </Link>
        </LeftHeader>
        <RightHeader className="home_headerRight">
          <Link to="/gmail"> Gmail </Link>
          <Link to="/images"> Images </Link>
           
          <AppsIcon />
          <Avatar />
          
        </RightHeader>
      </HomeHeader>

      <HomeBody>
        <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="google logo" />
        <HomeInputContainer>
          <Search />
        </HomeInputContainer>
      </HomeBody>
    </HomeContainer>
  );
};

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;
const HomeHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 30px;
  align-items: center;
  font-size: 15px;
  a{
  margin-right: 20px;
  }
`;
const LeftHeader = styled.div`
  a {
    text-decoration: inherit;
    margin-right: 10px;
    color: #000;
    &:hover {
      text-decoration: underline;
    }
  }
`;
const RightHeader = styled.div`
  a {
    text-decoration: inherit;

    color: #000;
    &:hover {
      text-decoration: underline;
    }
  }
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 13vw;
  svg{
    margin-right:20px;
  }
`;

const HomeBody = styled.div`

flex:1;
display:flex;
flex-direction:column;
margin-top:5%;
img{
  object-fit:contain;
   height:100px;
}
@media (max-width:480px){
  img{
    height:50px;
    margin-top:30px
  }
}
`;

const HomeInputContainer = styled.div`

`
export default Home;

import React from "react";
import styled from "styled-components";
import { useStateValue } from "./StateProvider";
import useGoogleSearch from "./useGoogleSearch";
import { Link } from "react-router-dom";
import res from "./res";
import Search from "./Search";
import { SearchInput } from "./Search";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import ArticleIcon from "@mui/icons-material/Article";
import CropOriginalIcon from "@mui/icons-material/CropOriginal";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MoreVertIcon from "@mui/icons-material/MoreVert";
const SearchPage = () => {
  const [{ term }, dispatch] = useStateValue();
  const {data} = useGoogleSearch(term)
  // const data = res;
  console.log(data);
  return (
    <SearchPages>
      <SearchpageHeader>
        <Link to="/">
          <img
            src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
            alt="google Logo"
          />
        </Link>

        <SearchHeadBody>
          <Search hideButtons />

          <SearchPageOptions>
            <OptionsRight>
              <SearchRoundedIcon />
              <Link to="/all"> All</Link>

              <ArticleIcon />
              <Link to="/news"> News</Link>
              <CropOriginalIcon />
              <Link to="/images"> Images</Link>
              <LocalOfferIcon />
              <Link to="/shopping"> Shopping</Link>
              <LocationOnIcon />
              <Link to="/location"> Location</Link>
              <MoreVertIcon />
              <Link to="/more"> More</Link>
            </OptionsRight>
            <OptionsLeft>
              <Link to="/tools">Tools</Link>
            </OptionsLeft>
          </SearchPageOptions>
        </SearchHeadBody>
      </SearchpageHeader>
{term && (
      <SearchpageResult>

      <p className="resultCounter">
        About {data?.searchInformation.formattedTotalResults} results ({data?.searchInformation.formattedSearchTime}seconds) for {term}
      </p>

      {data?.items.map( item =>{

        return(
           <div className="searchResults">
            <a href={item.link}>
            {item.pagemap?.cse_image?.length>0 && item.pagemap?.cse_image[0].src && (
                      <img className="searchPage__resultImage" src={
                          item.pagemap?.cse_image?.length>0 && item.pagemap?.cse_image[0]?.src
                      }
                      alt=""
                      />
                  )}
                   {item.displayLink}  </a>
            <a className="searchTitle" href={item.link}> <h2>{item.title}</h2>  </a>
            <p className="searchSnippet"> {item.snippet}</p>
           </div>
        )
      }


        
        
        )}
      </SearchpageResult>
)}
    </SearchPages>
  );
};
const SearchPages = styled.div``;
const SearchpageHeader = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 100;
  align-items: flex-start;
  padding: 30px;
  border: 1px solid lightgray;
  img {
    object-fit: contain;
    height: 50px;
    margin-right: 50px;
  }
`;
const SearchPageOptions = styled.div`
  display: flex;
  align-items: center;
  color: gray;
  margin-top: 20px;
  margin-left: 5px;
`;
const OptionsLeft = styled.div`
a{
  text-decoration:none;
  color:gray;
  
}
display:flex;
align-items:center
margin-left:80px;
`;
const OptionsRight = styled.div`
  a {
    text-decoration: none;
    color: gray;
    margin-right: 20px;
  }
  display: flex;
  align-items: center;
`;
const SearchHeadBody = styled.div``;
const SearchpageResult = styled.div`
max-width:80vw;
margin-top:20px;
margin-left:240px;
margin-bottom:100px
@media(max-width:420px){
  margin-left:40px;
}
.resultCounter{
  color:gray;
  font-size:14px;
}
.searchResults{
  margin:40px 0 ;
}
.searchTitle{
  text-decoration:none;
  &:hover{
    text-decoration:underline;
  }
  h2{
    font-weight:500;
    margin-top:5px;
  }
}
.searchSnippet{
  margin-top:10px;
}
.searchPage__resultImage{
  object-fit: contain;
  height: 20px;
  width: 20px;
  margin-right: 10px;
}
`;
export default SearchPage;

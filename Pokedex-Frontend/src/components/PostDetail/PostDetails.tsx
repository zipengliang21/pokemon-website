import React, {useEffect, useState} from "react";
import styled from "styled-components";
import moment from "moment";
const axios = require('axios');

const InfoWrapper = styled.div`
  width: 750px;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  text-align: center;
  background: inherit;
  header{
    font-weight: 600;
    font-size: 28px;
    color: #04266D;
  }
   @media(max-width: 875px){
     width: 418px;
   }
   @media(max-width: 576px){
     width: 100%;
   }
`;

const DateWrapper = styled.div`
    width: 750px;
    background: #DAE4F4;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    padding: 0 50px;
   @media(max-width: 875px){
     width: 418px;
   }
   @media(max-width: 576px){
      width: 100%;
      padding: 0 20px;
    }
`;

const ContentWrapper = styled.div`
    width: 750px;
    display: flex;
    justify-items: center;
    @media(max-width: 875px){
     width: 418px;
    }
    @media(max-width: 576px){
      width: 100%;
    }
`;

const UserWrapper = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    padding-left: 50px;
    margin-top: 10px;
    @media(max-width: 875px){
      padding-left: 20px;
    }
    @media(max-width: 576px){
      padding-left: 0;
    }
`;

const Content = styled.div`
    width: 500px;
    margin: 0 auto;
`;

const PostDetails = (props: any) => {
   const logo = "http://3.bp.blogspot.com/-fZ-FTGBT_OI/V87me3nL3PI/AAAAAAAAAkQ/" +
       "ornK37y9NRgbYhQB1sjANbXUX2HxrISbgCK4B/s1600/068_Machamp.png";
   return (
       <InfoWrapper>
          <header>{props.rootPost.title}</header>
          <DateWrapper>
             <span>{moment(props.rootPost.date).format('YYYY-MM-DD HH:mm:ss')}</span>
             <span>#1</span>
          </DateWrapper>
          <ContentWrapper>
             <UserWrapper>
                <img src={props.rootPost.avatar} alt="logo" className="logo" width={100} height = {100}/>
                <div className="userName">{props.rootPost.userName}</div>
             </UserWrapper>
             <Content>{props.rootPost.content}</Content>
          </ContentWrapper>
       </InfoWrapper>
   );
};

export default PostDetails;

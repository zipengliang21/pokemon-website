import React from "react";
import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {NavLink} from "react-router-dom";


const HeaderWrapper = styled.div`
   width: 850px;
   margin: 0 auto;
   letter-spacing: 0;   
   display: flex;
   align-items: center;
   justify-content: flex-end;
   font-size: 16px;
   font-weight: 600;
   line-height: 1.8;
   font-family: 'Poppins', sans-serif;
   color: rgba(71, 32, 121, 0.9);
   height: 40px;
   background: linear-gradient(90.07deg, rgba(177, 209, 202, 0.83) 0.07%, rgba(207, 233, 229, 0.79) 99.95%);
   #login{
       margin-right: 50px;
   }
   @media(max-width: 875px){
      width: 418px;
      #login{
          margin-right: 20px;
      }
   }
   @media(max-width: 576px){
      width: 100%;
      justify-content: center;
      #login{
       margin: 0 0 0 5px;
      }
   }
`;

const Wrapper = styled.div`
  .user{
      margin-right: 5px;
  }
  .dropdown-content {
     display: none;
     position: absolute;
     background-color: rgba(207, 233, 229);
     min-width: 80px;
     box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
     z-index: 1;
     .logout{
        cursor: pointer;
     }
     .admin{
        border-bottom: 1px solid rgba(71, 32, 121, 0.9);
     }
  }
  .dropdown-content a {
     color: rgba(71, 32, 121, 0.9);
     font-size: 14px;
     font-weight: normal;
     padding: 12px 16px;
     display: block;
     text-align: left;
  }
  :hover .dropdown-content{
     display: block;
  }
  .dropdown-content a:hover {
     background-color: #B2E6DF;
  }
`;

function Header(props: any) {
   let admin = props.currentUser && props.currentUser.isAdmin?
       <NavLink className="admin" exact to="/admin/add">Admin</NavLink> :
       null;
   let value = props.currentUser?
       <Wrapper id="login">
          <NavLink exact to="/profile">
             <FontAwesomeIcon icon="user" className="user"/>
             <span className="span">{props.currentUser.userName}</span>
          </NavLink>
          <div className="dropdown-content">
             {admin}
             <a className="logout" onClick={() => props.logout()}>Logout</a>
          </div>
       </Wrapper> :
       <NavLink exact to="/login">
          <Wrapper id="login">
             <FontAwesomeIcon icon="user" className="user"/>
             <span className="span">login</span>
          </Wrapper>
       </NavLink>;
   return (
       <HeaderWrapper>
          {value}
       </HeaderWrapper>
   );
}


export default Header;

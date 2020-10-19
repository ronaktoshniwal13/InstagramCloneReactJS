import React from 'react';
import axios from 'axios';
import Logo from '../images/blackLogo.png';
import './account.css';
import { Link } from "react-router-dom";

import {Search, GetApp, BookmarkBorder, MoreHoriz, Home, SendOutlined, ChatBubbleOutline, ExploreOutlined, FavoriteBorderOutlined, AccountCircle} from '@material-ui/icons/';

export default class account extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            instagramData: [],
            user:[],
            mainDomain:"https://www.instagram.com/",
            searchQuery: "ronaktoshniwal.18" ,
            lastPartoflink: "/?__a=1",
        }
      }
    
      componentDidMount() {
          //this.completeURL
          //"https://www.instagram.com/ronaktoshniwal.18/?__a=1"
          const search = this.state.searchQuery.trim();
            axios.get(this.state.mainDomain + search + this.state.lastPartoflink)
             .then(res => {
              const instagramData = res.data.graphql.user.edge_owner_to_timeline_media.edges;
              const user = res.data.graphql.user;
              this.setState( { instagramData, user});
          })
      }
    
      

    handleKeyPress = (event) => {
        if(event.key === 'Enter'){
            this.setState( { searchQuery: event.target.value} );
            this.componentDidMount()
        }
      }

      iconClickHandler = (event) => {
          console.log("download clicked")
      }
    

render(){
   const data = this.state.instagramData;
   const user = this.state.user;
  
   console.log("img",data);
    console.log("private:",user.is_private)

  
  
   // { user.is_private ? 'Account is private' :  ''}
    return (
        <div className="main">
                        
                    
                        <div className="header">
                                        <div className="Logo">
                                            <img src={Logo} alt="logo"/>
                                        </div>     
                                        <div className="searchInput">
                                           
                                            <input type="text" placeholder="Search" className="inputType"  onKeyPress={this.handleKeyPress}  />
                                            <Search className="searchIcon" style={{ fill: 'gray', fontSize: 15 }}  color="disabled"/>                   
                                        </div>
                                        <div className="icons">
                                        
                                        <Link to="/account"> <Home /> </Link>
                                                <SendOutlined className="inboxIcon"/>
                                                <ExploreOutlined />
                                                <FavoriteBorderOutlined   />
                                        <Link to="/profile"><AccountCircle  color="disabled"  /></Link>
                                          </div>
                                 </div>
                      
               
                            { user.is_private ? `This account is Private` : ''}
                            <div className="storyData">
                            {data.map((item, index) =>
                                            <div className="Images" key={index} >
                                            <img src={item.node.thumbnail_src} alt={index} className="storyDP"/>
                                            </div>
                                    )}   
                            </div>
                        
                        {data.map((item,index) =>
                              <div className="feed" key={index}>
                                <div className="postHead">
                                    <div>
                                        <img src={user.profile_pic_url} alt="ronak" className="postHeadImage"/>
                                    </div>
                                    <div>
                                        <p className="usernameText">
                                            {item.node.owner.username}
                                        </p>
                                    </div>
                                        <div className="usernameIcon">
                                            <p> <MoreHoriz /></p>
                                            <a href={item.node.thumbnail_src} download="1.jpg"> <GetApp onClick={this.iconClickHandler}/></a>
                                        </div>
                                    
                                  </div>
                                  <div>
                                        <img src={item.node.thumbnail_src} alt="postImg" className="postImg" />
                                </div> 
                                <div className="likeComment">
                                    <div className="postIcon">
                                        <FavoriteBorderOutlined fontSize="large" />
                                        <ChatBubbleOutline fontSize="large" />
                                        <SendOutlined fontSize="large" className="inboxIcon"/>
                                    </div>
                                    <div className="bookmark">
                                        <BookmarkBorder fontSize="large" />
                                    </div>
                                 </div>
                                <div className="likesCounter">
                                    <p className="likes">  {item.node.edge_liked_by.count} Likes</p>
                                </div>
                             </div>
                            )}
                        
                <div className="sidebar">
                    <h1>sidebar</h1>
                </div>
                
        </div>
    )
    }
}
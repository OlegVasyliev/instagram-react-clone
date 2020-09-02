import React from "react";
import './Post.css';
import Avatar from "@material-ui/core/Avatar";


function Post({username, caption, imageUrl}) {
    return (
        <div className="post">
            <div className="post__header">
                <Avatar className="post__avatar"
                        alt='Oleh'
                        src="https://instagram.fiev4-1.fna.fbcdn.net/v/t51.2885-19/s150x150/65524650_628984520927225_4947007365200216064_n.jpg?_nc_ht=instagram.fiev4-1.fna.fbcdn.net&_nc_ohc=CzwRpc-Lma8AX-2WUaG&oh=28ed9eb901b55cf83fd8390a43469c8b&oe=5F7A8E87"
                />
                <h3>{username}</h3>
            </div>
            <img className="post__image"
                 src={imageUrl}/>
            <h4 className="post__text"><strong>{username}</strong> {caption}</h4>
        </div>
    )
}

export default Post;
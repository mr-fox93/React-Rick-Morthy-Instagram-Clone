import { Avatar } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./Post.css";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import TelegramIcon from "@mui/icons-material/Telegram";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

function Post() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const number = Math.floor(Math.random() * 671);
    fetch(`https://rickandmortyapi.com/api/character/${number}`)
      .then((res) => res.json())
      .then((data) => {
        const name = data.name;
        const img = data.image;
        setData({ name, img });
        setLoading(false);
      });
  }, []);

  // add new API req when scroll.

  useEffect(() => {
    function handleScroll() {
      if (
        window.innerHeight + window.pageYOffset >= document.body.offsetHeight &&
        !loading
      ) {
        setLoading(true);
        const number = Math.floor(Math.random() * 671);
        fetch(`https://rickandmortyapi.com/api/character/${number}`)
          .then((res) => res.json())
          .then((data) => {
            const name = data.name;
            const img = data.image;
            setData({ name, img });
            setLoading(false);
            window.scrollTo(0, 0); // wraca do pozycji 0, na górę strony po jej ponownym załadowaniu przy scroll.
          });
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading]);

  //////////

  return (
    <div className="post">
      <div className="post__header">
        <div className="post__headerAuthor">
          <Avatar /> {data.name} <span>2h</span>
        </div>
        <MoreHorizIcon />
      </div>
      <div className="post__image">
        <img src={data.img} alt="image"></img>
      </div>
      <div className="post__footer">
        <div className="post__footerIcons">
          <div className="post__footerIconMain">
            <FavoriteBorder className="post__icon" />
            <ChatBubbleOutlineIcon className="post__icon" />
            <TelegramIcon className="post__icon" />
          </div>
          <div className="post__iconSave">
            <BookmarkBorderIcon className="post__icon" />
          </div>
        </div>
        <span className="likes">Likes:{Math.floor(Math.random() * 671)}</span>
      </div>
    </div>
  );
}

export default Post;

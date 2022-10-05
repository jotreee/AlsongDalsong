import MainPlaylist from "../../mainpages/MainPlaylist";
import './HappyPlaylist.css';
import { emotionMusic, makeLike } from "../../../api/musicApi";
import { useState, useMemo } from "react";
import { FcMusic } from 'react-icons/fc';

const HappyPlaylist = () => {

    const [musicBtn, setMusicBtn] = useState(false);
    const [musics, setMusics] = useState([]);
    const [youtube, setYoutube] = useState("");
    const [videos, setVideos] = useState("");
    const [musicList, setMusicList] = useState([]);

    emotionMusic(1)
    .then((res) => {
        var list = [];
        let video = "";
        for (let i in [...Array(res.data.length).keys()]) {
          let test = {
            id: res.data[i].id,
            like: res.data[i].like,
            name: res.data[i].track_name,
            artist: res.data[i].artist_name,
            // heart: heart,
          }
          video += (res.data[i].videoid + ",");
          list.push(test)
        }
        setVideos(video);
        setMusics(list);
        setMusicBtn(true)
      })
      .catch((e) => {
        console.log("err", e);
      });

      function MyPlaylist(x) {
        useMemo(() => setMusicList(musics), setYoutube("https://www.youtube.com/embed?playlist="+videos.slice(0,-1)));
      }
    
      const likeMusic = (music_id, i) => {
        const txt = document.getElementById("heart"+i);
        if(txt.innerText === "♥"){
          txt.innerText = "♡";
        }else{
          txt.innerText = "♥";
        }
        makeLike(music_id)
        .then((res) => {
          console.log("성공?");
        })
        .catch((e) => {
          console.log("err", e);
        });
    }
    return(<div className="happy-playlist">
        <div className="work-area">
            <h2>당신이 행복했을 때 들었던 음악</h2>
            {youtube==="https://www.youtube.com/embed?playlist="?
            (<>음악이 없어요!</>):
            (<iframe
              className="playlist-iframe"
              src={youtube}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>)}
          { musicBtn
          ? (
            <>
              {musics.map((ele, i) => {
                var idName = "heart" + i;
                return (
                  <>
                    <div className="detail-diary-playlist">
                      <div className="heart-wrapper" >
                      {ele.like === true ? (
                        <>
                          <div  
                            // className="fill-heart"
                            id={idName}
                            style={{
                              cursor: "pointer", color:"red"
                            }}
                            onClick={(e) => likeMusic(ele.id, i)}
                          >
                            ♥
                          </div>
                        </>
                      ) : (
                        <>
                          <div
                            id={idName}
                            style={{
                              cursor: "pointer", color:"red"
                            }}
                            onClick={(e) => likeMusic(ele.id, i)}
                          >
                            ♡
                          </div>
                        </>
                      )}
                        <div className="music-name-wrapper">
                         {ele.name} 
                        </div>
                      </div>

                      <div className="artist-wrapper">
                        <div>{ele.artist} <FcMusic style={{marginTop:"-0.5vh"}} /></div>
                      </div>
                    </div>
                  </>
                );
              })}
            </>
          ) : (
            <>
              <div>아직 음악없음</div>
            </>
          )}
        </div>
        <MainPlaylist className="main-playlist"></MainPlaylist>
    </div>)
}

export default HappyPlaylist
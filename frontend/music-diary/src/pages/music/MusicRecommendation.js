import MainNote from "../mainpages/MainNote"
import './MusicRecommendation.css'
import {musicRecommend} from '../../api/musicApi'
import { useEffect, useState } from "react"
import {useNavigate} from 'react-router-dom'

import { useSelector } from "react-redux";
import { setNormalChoiceValue } from "../../store/store";
import { useDispatch } from "react-redux";

const MusicRecommendation = () => {
     
    const navigate = useNavigate()

    return(<div className="music-recommendation">
        <div className="work-area">
            <h1 style={{marginTop:'5vh'}}>플레이리스트 추천</h1>
            <h5 style={{marginTop:"0vh", color:"grey"}}>그날 그날 바뀌는 나의 감정, 다르게 음악을 추천 받을 수 없을까?</h5>
            <h5 style={{marginTop:"-1vh", color:"grey"}}>순간의 감정에 어울리는 음악을 추천 받아 보세요</h5>
        
            <div className="playlist">
                <div style={{display:"flex", justifyContent:"space-around", marginTop:"6vh"}}>
                    <div className="happy animate__animated animate__bounceIn" 
                    onClick={()=>{navigate('/recommendation/happy')}}>
                        <img src="/assets/img/happy_emoji.png" style={{width:"6vw", marginTop:'2vh'}}></img>
                        <h4>행복한 순간</h4>
                    </div> 
                    <div className="sad animate__animated animate__bounceIn"
                    onClick={()=>{navigate('/recommendation/sad')}}>
                        <img src="/assets/img/sad_emoji.png" style={{width:"6vw", marginTop:'2vh'}}></img>
                        <h4>슬픈 순간</h4>
                    </div>
                    <div className="normal animate__animated animate__bounceIn"
                    onClick={()=>{navigate('/recommendation/normal')}}>
                        <img src="/assets/img/normal_emoji.png" style={{width:"6vw", marginTop:'-0.2vh'}}></img>
                        <h4 style={{marginTop:'-1.1vh'}}>평온한 순간</h4>
                    </div>
                </div>
                <div style={{display:"flex", justifyContent:"space-around", marginTop:"4vh"}}>
                    <div className="anxious animate__animated animate__bounceIn"
                    onClick={()=>{navigate('/recommendation/anxious')}}>
                        <img src="/assets/img/anxious_emoji.png" style={{width:"6vw", marginTop:'2vh'}}></img>
                        <h4>불안한 순간</h4>
                    </div>
                    <div className="depressed animate__animated animate__bounceIn"
                    onClick={()=>{navigate('/recommendation/depressed')}}>
                        <img src="/assets/img/depressed_emoji.png" style={{width:"6vw", marginTop:'1vh'}}></img>
                        <h4>우울한 순간</h4>
                    </div>
                    <div className="angry animate__animated animate__bounceIn"
                    onClick={()=>{navigate('/recommendation/angry')}}>
                        <img src="/assets/img/angry_emoji.png" style={{width:"6vw", marginTop:'2vh'}}></img>
                        <h4>화난 순간</h4>
                    </div>
                </div>
            </div>

        </div>
        <MainNote className="main-note"></MainNote>
    </div>
    )
}

export default MusicRecommendation;
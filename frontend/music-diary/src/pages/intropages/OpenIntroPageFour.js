import React from "react";
import "../../css/intropages/OpenIntroPage.css";
import { useNavigate } from "react-router-dom";

import Button from '../../components/Common/Button'

import {CgChevronDoubleLeft} from 'react-icons/cg'

function OpenIntroPageTwo() {

  const navigate = useNavigate()

  const onMoveLoginPage = () => {
    navigate('/')
  }


  return (
    <>
      <div id="wrapper">
        <div id="container">
          <section className="open-book">
            <header>
              <h1>D204</h1>
              <h6>Project</h6>
            </header>
            <article>
              <h2 className="chapter-title">알쏭달쏭</h2>
              <div className="hidden-area-left-1"></div>
              <dl>
                <dt>
                  <strong>&bull;o&bull; 알쏭달쏭 사용법</strong>
                </dt>
              </dl>

              <div className="hidden-area-left-2"></div>

              <div className="hidden-area-right-1"></div>

              <div className="intro-ment-1">그날의 감정을 음악으로 들어보세요</div>
              <div className="hidden-area-right-2"></div>
            </article>
            <footer>
              <ol id="page-numbers">
                <li>7</li>
                <li>8</li>
              </ol>
            </footer>
          </section>
        </div>
        <div>
      <Button name="돌아가기" color="#AC5050" size="lg" onClick={onMoveLoginPage} />
      
      </div>
      </div>


    </>
  );
}

export default OpenIntroPageTwo;

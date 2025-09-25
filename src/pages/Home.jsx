import React, { useEffect, useState } from 'react';
import '../style/home.scss';
import logoImg from '../images/logo1.svg';
import bannerImg from '../images/banner_image_1.png';
import Button from '../Components/Button';
// 按鈕圖片
import cow1Img from '../images/cow1.avif';
import pig2Img from '../images/pig1.avif';
import sheep3Img from '../images/sheep1.avif';
import Alpaca4Img from '../images/Alpaca.avif';
// Cow Cuddling圖片
import cow2Img from '../images/cow_cuddling1.svg';
// kune kune圖片
import kune1 from '../images/kune1.svg';
import kune2 from '../images/kune2.svg';
import kune3 from '../images/kune3.svg';
// sheep Area圖片
import sheep1 from '../images/sheep_area1.svg';
import sheep2 from '../images/sheep_area2.svg';
// Alpaca Area圖片
import alpaca1 from '../images/Alpaca_area.svg';


// 123



const Home = () => {
  const [imageScale, setImageScale] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const newScale = 1 + scrollPosition * 0.0003;
      setImageScale(newScale);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (

    /* banner區 */
    <div id="home-page">
      <section className='page-section'> {/* 新增一個容器來管理主要佈局 */}
        {/* 左上角品牌 */}
        <div className='Logo'>
          <img src={logoImg} alt="LOGO" />
        </div>

        {/* 中央的圖片與文字容器 */}
        <div className='main-content-wrapper'>
          {/* 圖片容器 */}
          <figure className='bannerImg' style={{ transform: `scale(${imageScale})` }}>
            <img src={bannerImg} alt="牛站在草地上，藍天白雲背景" />
          </figure>

          {/* 右側大字與副標 */}
          <div className='banner_side_title'>
            <p className='title'>PARK</p>
            <p className='title2'>自由漫步</p>
            {/* 右下角文案 */}
            <div className='title_closing_box'>
              <p className='title_closing'>在這裡，時間會放慢腳步</p>
            </div>
          </div>

        </div>
      </section>




      {/* list區 */}
      <div className='list-page'>
        <section className='list-section'>
          <div className='list-title-box'>
            <p className='list-title'>
              踏上小徑，你會遇見一隻正盯著你看的棉羊、一群吵鬧的小豬，以及忙著吃草、完全不理你的牛。這些場景提醒著你：你只是牠們日常裡的過客。這才是享受「Honey Moo」的唯一秘訣。
            </p>
          </div>

          <div className='button-container-main'>
            {/* 第一排按鈕 */}
            <div className='button-row-top'>
              {/* 傳入不同的圖片和文字 */}
              <Button imgSrc={cow1Img} text="與牛共處" />
              <Button imgSrc={pig2Img} text="漫步對策" />
              <Button imgSrc={sheep3Img} text="自由放牧" />
            </div>

            {/* 第二排按鈕 */}
            <div className='button-row-bottom'>
              {/* 傳入不同的圖片和文字 */}
              <Button imgSrc={Alpaca4Img} text="探索綠洲" />
            </div>
          </div>
        </section>
      </div>


      {/* Cow Cuddling區 */}
      <div id='Cow_Cuddling_page'>
        <section className='cow_TC'>
          <div className='cow_title'>
            <p className='cow_title1'>Cow Cuddling</p>
            <p className='cow_title2'>與牛共處</p>
          </div>
          <div className='cow_content'>
            <p className='cow_content_1'>我們為您準備了一處心靈的歸所。在這裡，你可以放慢腳步，沉浸在一場前所未有的柔軟療癒之旅。 當您輕輕地走近那些有著好奇雙眼的小牛，牠們毛茸茸的身體散發著溫暖的氣息。伸出手，感受牠們柔軟的鼻尖輕觸您的掌心，那份細膩的觸感，是來自大自然的純粹饋贈。</p>
          </div>
        </section>
        {/* 圖片 */}
        <div className='main-cowImg'>
          <figure className='cc_Img'>
            <img src={cow2Img} alt="圖片" />
          </figure>
        </div>
      </div>

      {/* Kune kune區 */}

      <div className='Kune_kune_page'>
        <section className='Kune_kune_section'>
          <div className='kune_title'>
            <p className='kune_title_eg'>Kune Kune</p>
            <p className='kune_title_ch'>漫步對策</p>
          </div>
          <div className='kune_content'>
            <p className='kune_main_content'>小豬們在園區裡熱鬧不停：爭食、翻滾、跌倒、再爬起，日子就這樣吵吵鬧鬧卻充滿樂趣。你可以試著餵食牠們，但要小心，因為「飼料強盜」這個綽號，正是牠們的最佳寫照。</p>
          </div>
        </section>
        {/* 圖片 */}
        <div className='kuneImg_container'>
          <figure className='kuneImg_box'>
            <img src={kune1} alt="小豬圖片" />
            <img src={kune2} alt="小豬圖片" />
            <img src={kune3} alt="小豬圖片" />
          </figure>
        </div>
      </div>

      {/* Sheep Area區 */}

      <div className='Sheep_page'>
        <section className='Sheep_section'>
          <div className='sheep_title'>
            <p className='sheep_title_eg'>Sheep Area</p>
            <p className='sheep_title_ch'>自由放牧</p>
          </div>
          <div className='sheep_content'>
            <p className='sheep_main_content'>綠意盎然的牧場裡，住著一群毛茸茸的溫柔使者。牠們有著雪白蓬鬆的羊毛，像一朵朵會移動的雲朵，輕盈地漫步在青草地上。</p>
          </div>
        </section>
        {/* 圖片 */}
        <div className='sheepImg_container'>
          <figure className='sheep_box1'>
            <img src={sheep1} alt="綿羊圖片" />
          </figure>

          <figure className='sheep_box2'>
            <img src={sheep2} alt="綿羊圖片" />
          </figure>
        </div>
      </div>



      {/* Alpaca Area區 */}

      <div className='Alpaca_page'>
        {/* 圖片 */}
        <div className='alpacaImg_container'>
          <figure className='alpaca_box'>
              <img src={alpaca1} alt="圖片" />
          </figure>
        </div>

        <section className='Alpaca__section'>
          <div className='alpaca_title'>
            <p className='alpaca_title_eg'>Alpaca Area</p>
            <p className='alpaca_title_ch'>探索綠洲</p>
          </div>
          <div className='alpaca_content'>
            <p className='alpaca_main_content'>牧場的一隅，有一群來自安第斯山脈的旅者，牠們以其獨有的溫柔姿態，靜靜地織就著牧場的詩意篇章。牠們是羊駝，目光深邃而純粹，仿佛蘊藏著高山曠野的寧靜。</p>
          </div>
        </section>
      </div>


      {/* Footer */}

      <footer className='footer_container'>
        <div className='inner'>
          <div className='footer_main'>
            <div className='fnav'>
              <div className='row'>
                <div className='activity'>
                  <p className='parent'>
                    <span className='ACTIVITY LIST'></span>
                    <span className='活動清單'></span>
                  </p>
                  <ul className='child_list'>
                    <li><a href="#Cow_Cuddling_page">
                      <span className='en'>
                        Cow Cuddling
                      </span>
                      <span className='ch'>
                        與牛共處
                      </span>
                    </a>
                    </li>

                  </ul>
                </div>

              </div>

            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
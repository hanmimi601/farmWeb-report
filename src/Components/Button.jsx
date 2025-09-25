import '../style/_Button.scss';
import btnImg from '../images/pig1.avif';
import { FaArrowDown } from "react-icons/fa";

const Button = ({ imgSrc, text }) => { // 接收 imgSrc 和 text 兩個屬性
  return (
    <div className='btn-container'>
      <button className='btn-box'>
        <div className='btn-image'>
          <img src={imgSrc} alt="按鈕" />
        </div>
        <div className='btn-text-box'>
          <div className='btn-text'>
            <p>{text}</p> {/* 這裡使用傳入的文字 */}
          </div>
          <div className='btn-arrow'>
            <FaArrowDown/>
          </div>
        </div>
      </button>
      <hr className="divider" />
    </div>
  );
}

export default Button
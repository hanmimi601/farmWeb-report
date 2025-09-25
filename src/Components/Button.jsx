import '../style/_Button.scss';
import btnImg from '../images/pig1.avif';
import { FaArrowDown } from "react-icons/fa";

// 1. 關鍵修改：新增 targetId 屬性
const Button = ({ imgSrc, text, targetId }) => { 
  
  // 構造連結的 href 屬性值，例如 "Cow_Cuddling_page" 會變成 "#Cow_Cuddling_page"
  const linkHref = `#${targetId}`; 

  return (
    <div className='btn-container'>
      {/* 2. 關鍵修改：將 <button> 替換為 <a> 標籤，並設置 href */}
      <a href={linkHref} className='btn-box'> 
        <div className='btn-image'>
          <img src={imgSrc} alt="按鈕" /> 
        </div> 
        <div className='btn-text-box'> 
          <div className='btn-text'> 
            <p>{text}</p>
          </div> 
          <div className='btn-arrow'> 
            <FaArrowDown/> 
          </div> 
        </div> 
      </a> 
      <hr className="divider" />
    </div>
  );
}

export default Button
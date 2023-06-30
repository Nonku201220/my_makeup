import React from 'react';
import css from './Virtual.module.css';
import shade from '../../assets/shade.jpeg';
import Before from '../../assets/Before.jpg';
import After from '../../assets/After.jpg';

import ReactCompareImage from 'react-compare-image'; 

const Virtual = () => {
  return (
    <div className={css.Virtual}>
      <div className={css.wrapper}>
           <ReactCompareImage leftImage={Before} rightImage={After} /> 
        </div>
   {/*    <ReactCompareImage leftImage={Before} rightImage={After} /> */}

      <div className={css.left}>
        <span>Virtual Try-On</span>
        <span>Never Buy The Wrong Shade Again</span>
        <span>Try Now!</span>
        <img src={shade} alt='' />  
      </div>

      <div
        className={css.right}>
       
      </div>
    </div>
  );
};

export default Virtual;




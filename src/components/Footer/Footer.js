import React from 'react';
import css from './Footer.module.css';
import { InboxIcon, PhoneIcon, LocationMarkerIcon, LoginIcon, UserIcon, LinkIcon } from '@heroicons/react/outline';
import Logo from '../../assets/logo.jpg';

const Footer = () => {
  return (
    <div className={css.cFooterWrapper}>
      <hr />

      <div className={css.cFooter}>
        <div className={css.logo}>
          <img src={Logo} alt='' />
          <span></span>
        </div>

        <div className={css.block}>
          <div className={css.detail}>
            <span>Contact Us</span>
            <span className={css.pngLine}>
              <LocationMarkerIcon className={css.icon} />
              <span>3193 radium place Migson Manor, LS 1881</span>
            </span>

            <span className={css.pngLine}>
              <PhoneIcon className={css.icon} />
              <a href='tel:011-211-0730'>011-211-0730</a>
            </span>

            <span className={css.pngLine}>
              <InboxIcon className={css.icon} />
              <a href='mailto:support@amazon'>support@amazon</a>
            </span>
          </div>
        </div>

        <div className={css.block}>
          <div className={css.detail}>
            <span>Account</span>
            <span className={css.pngLine}>
              <LoginIcon className={css.icon} />
              Sign In
            </span>
          </div>
        </div>

        <div className={css.block}>
          <div className={css.detail}>
            <span>Company</span>
            <span className={css.pngLine}>
              <UserIcon className={css.icon} />
              <a href='/About'>
                <p>About us</p>
              </a>
            </span>
          </div>
        </div>
      </div>

      <div className={css.copyright}>
        <span>Copyright 2023 by Amazon, Inc.</span>
        <span>All rights reserved</span>
      </div>
    </div>
  );
};

export default Footer;


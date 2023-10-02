import React from 'react';

export const IconSvg = (props: { name: string }) => {
  switch (props.name) {
    case 'loginIn':
      return <svg enableBackground="new 0 0 32 32" width="100%" height="100%" id="Layer_1" version="1.1"
                  viewBox="0 0 32 32">
        <g>
          <polyline fill="none"
                    points="   649,137.999 675,137.999 675,155.999 661,155.999  "
                    stroke="#FFFFFF" strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit="10"
                    strokeWidth="2"/>
          <polyline
            fill="none"
            points="   653,155.999 649,155.999 649,141.999  "
            stroke="#FFFFFF" strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="2"/>
          <polyline fill="none"
                    points="   661,156 653,162 653,156  "
                    stroke="#FFFFFF"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit="10"
                    strokeWidth="2"/>
        </g>
        <path
          fill={'#FFF'}
          d="M21.947,16.332C23.219,14.915,24,13.049,24,11c0-4.411-3.589-8-8-8s-8,3.589-8,8s3.589,8,8,8  c1.555,0,3.003-0.453,4.233-1.224c4.35,1.639,7.345,5.62,7.726,10.224H4.042c0.259-3.099,1.713-5.989,4.078-8.051  c0.417-0.363,0.46-0.994,0.097-1.411c-0.362-0.416-0.994-0.46-1.411-0.097C3.751,21.103,2,24.951,2,29c0,0.553,0.448,1,1,1h26  c0.553,0,1-0.447,1-1C30,23.514,26.82,18.615,21.947,16.332z M10,11c0-3.309,2.691-6,6-6s6,2.691,6,6s-2.691,6-6,6S10,14.309,10,11z  "/>
      </svg>
    case 'password':
      return <svg id="Layer_1_1_" version="1.1" viewBox="0 0 16 16" width={'100%'} height={'100%'}>
        <path
          fill={'#fff'}
          d="M0,11.864c0,2.209,1.791,4,4,4c2.209,0,4-1.791,4-4c0-0.554-0.113-1.082-0.317-1.562l8.181-8.181L13.743,0l-2.2,2.2  L9.439,0.096L8.732,0.803l2.104,2.104L10.043,3.7L7.939,1.596L7.232,2.303l2.104,2.104L5.562,8.181C5.082,7.977,4.554,7.864,4,7.864  C1.791,7.864,0,9.655,0,11.864z M3,11.864c0.552,0,1,0.448,1,1s-0.448,1-1,1c-0.552,0-1-0.448-1-1S2.448,11.864,3,11.864z"/>
      </svg>
    default:
      return <svg></svg>
  }
};

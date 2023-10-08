import React, {memo} from 'react';

export const IconSvg = memo((props: { name: string }) => {
  console.log('iconSVG')
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

    case 'gitHub':
      return <svg viewBox="0 0 30 30" width="100%" height="100%">
        <path
          d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"/>
      </svg>

    case 'vk':
      return <svg viewBox="0 0 48 48" width="100%" height="100%">
        <circle fill={'#1976D2'} cx="24" cy="24" r="20"/>
        <path
          fill={'#fff'}
          d="M35.937,18.041c0.046-0.151,0.068-0.291,0.062-0.416C35.984,17.263,35.735,17,35.149,17h-2.618  c-0.661,0-0.966,0.4-1.144,0.801c0,0-1.632,3.359-3.513,5.574c-0.61,0.641-0.92,0.625-1.25,0.625C26.447,24,26,23.786,26,23.199  v-5.185C26,17.32,25.827,17,25.268,17h-4.649C20.212,17,20,17.32,20,17.641c0,0.667,0.898,0.827,1,2.696v3.623  C21,24.84,20.847,25,20.517,25c-0.89,0-2.642-3-3.815-6.932C16.448,17.294,16.194,17,15.533,17h-2.643  C12.127,17,12,17.374,12,17.774c0,0.721,0.6,4.619,3.875,9.101C18.25,30.125,21.379,32,24.149,32c1.678,0,1.85-0.427,1.85-1.094  v-2.972C26,27.133,26.183,27,26.717,27c0.381,0,1.158,0.25,2.658,2c1.73,2.018,2.044,3,3.036,3h2.618  c0.608,0,0.957-0.255,0.971-0.75c0.003-0.126-0.015-0.267-0.056-0.424c-0.194-0.576-1.084-1.984-2.194-3.326  c-0.615-0.743-1.222-1.479-1.501-1.879C32.062,25.36,31.991,25.176,32,25c0.009-0.185,0.105-0.361,0.249-0.607  C32.223,24.393,35.607,19.642,35.937,18.041z"/>
      </svg>

    case 'faceBook':
      return <svg version="1.1" id="Layer_2" x="0px" y="0px"
                  viewBox="0 0 48 48">
        <g>
          <path fill="#1976D2" d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"/>
          <path fill="#fff" d="M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46
		c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.452
		C21.988,43.9,22.981,44,24,44c0.921,0,1.82-0.084,2.707-0.204V29.301z"/>
        </g>
      </svg>

    case 'like':
      return <svg width="100%" height="100%" viewBox="0 0 24 24">
        <path
          fill={'black'}

          d="M4 21h1V8H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2zM20 8h-7l1.122-3.368A2 2 0 0 0 12.225 2H12L7 7.438V21h11l3.912-8.596L22 12v-2a2 2 0 0 0-2-2z"/>
      </svg>
    case 'delete':
      return <svg height="100%" viewBox="0 0 48 48" width="100%">
        <path d="M0 0h48v48H0V0z" fill="none"/>
        <path
          d="M12 38c0 2.2 1.8 4 4 4h16c2.2 0 4-1.8 4-4V14H12v24zm4.93-14.24l2.83-2.83L24 25.17l4.24-4.24 2.83 2.83L26.83 28l4.24 4.24-2.83 2.83L24 30.83l-4.24 4.24-2.83-2.83L21.17 28l-4.24-4.24zM31 8l-2-2H19l-2 2h-7v4h28V8z"/>
        <path d="M0 0h48v48H0z" fill="none"/>
      </svg>

    case 'message':
      return <svg version="1.1" viewBox="0 0 24 24">
        <g id="info"/>
        <g id="icons">
          <path
            d="M20,1H4C1.8,1,0,2.8,0,5v10c0,2.2,1.8,4,4,4v3c0,0.9,1.1,1.3,1.7,0.7L9.4,19H20c2.2,0,4-1.8,4-4V5   C24,2.8,22.2,1,20,1z M14,13H8c-0.6,0-1-0.4-1-1c0-0.6,0.4-1,1-1h6c0.6,0,1,0.4,1,1C15,12.6,14.6,13,14,13z M16,9H8   C7.4,9,7,8.6,7,8c0-0.6,0.4-1,1-1h8c0.6,0,1,0.4,1,1C17,8.6,16.6,9,16,9z"
            id="message"/>
        </g>
      </svg>

    case '5-music':
      return <svg enableBackground="new 0 0 32 32" height="100%" id="svg2" version="1.1" viewBox="0 0 32 32"
                  width="100%" xmlns="http://www.w3.org/2000/svg">
        <g id="background">
          <rect fill="none" height="32" width="32"/>
        </g>
        <g id="music">
          <path
            d="M8,0v16.35C7.373,16.127,6.702,16,6,16c-3.316,0-6,2.691-6,6c0,3.314,2.684,6,6,6c3.311,0,6-2.686,6-6V6l12,2v12.35   C23.373,20.127,22.703,20,22,20c-3.316,0-6,2.691-6,6c0,3.314,2.684,6,6,6c3.309,0,6-2.686,6-6V4L8,0z"/>
        </g>
      </svg>

    case '4-news':
      return <svg viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg"><title/>
        <g>
          <path
            d="M84,0H12A5.9966,5.9966,0,0,0,6,6V90a5.9966,5.9966,0,0,0,6,6H84a5.9966,5.9966,0,0,0,6-6V6A5.9966,5.9966,0,0,0,84,0ZM78,84H18V12H78Z"/>
          <path d="M36,36H60a6,6,0,0,0,0-12H36a6,6,0,0,0,0,12Z"/>
          <path d="M36,60H60a6,6,0,0,0,0-12H36a6,6,0,0,0,0,12Z"/>
        </g>
      </svg>

    case 'setting':
      return <svg version="1.1" viewBox="0 0 24 24">
        <g id="info"/>
        <g id="icons">
          <path
            d="M22.2,14.4L21,13.7c-1.3-0.8-1.3-2.7,0-3.5l1.2-0.7c1-0.6,1.3-1.8,0.7-2.7l-1-1.7c-0.6-1-1.8-1.3-2.7-0.7   L18,5.1c-1.3,0.8-3-0.2-3-1.7V2c0-1.1-0.9-2-2-2h-2C9.9,0,9,0.9,9,2v1.3c0,1.5-1.7,2.5-3,1.7L4.8,4.4c-1-0.6-2.2-0.2-2.7,0.7   l-1,1.7C0.6,7.8,0.9,9,1.8,9.6L3,10.3C4.3,11,4.3,13,3,13.7l-1.2,0.7c-1,0.6-1.3,1.8-0.7,2.7l1,1.7c0.6,1,1.8,1.3,2.7,0.7L6,18.9   c1.3-0.8,3,0.2,3,1.7V22c0,1.1,0.9,2,2,2h2c1.1,0,2-0.9,2-2v-1.3c0-1.5,1.7-2.5,3-1.7l1.2,0.7c1,0.6,2.2,0.2,2.7-0.7l1-1.7   C23.4,16.2,23.1,15,22.2,14.4z M12,16c-2.2,0-4-1.8-4-4c0-2.2,1.8-4,4-4s4,1.8,4,4C16,14.2,14.2,16,12,16z"
            id="settings"/>
        </g>
      </svg>

    case 'users':
      return <svg enableBackground="new 0 0 24 24" id="Layer_1" version="1.0" viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
        <g>
          <path
            d="M9,9c0-1.7,1.3-3,3-3s3,1.3,3,3c0,1.7-1.3,3-3,3S9,10.7,9,9z M12,14c-4.6,0-6,3.3-6,3.3V19h12v-1.7C18,17.3,16.6,14,12,14z   "/>
        </g>
        <g>
          <g>
            <circle cx="18.5" cy="8.5" r="2.5"/>
          </g>
          <g>
            <path d="M18.5,13c-1.2,0-2.1,0.3-2.8,0.8c2.3,1.1,3.2,3,3.2,3.2l0,0.1H23v-1.3C23,15.7,21.9,13,18.5,13z"/>
          </g>
        </g>
        <g>
          <g>
            <circle cx="18.5" cy="8.5" r="2.5"/>
          </g>
          <g>
            <path d="M18.5,13c-1.2,0-2.1,0.3-2.8,0.8c2.3,1.1,3.2,3,3.2,3.2l0,0.1H23v-1.3C23,15.7,21.9,13,18.5,13z"/>
          </g>
        </g>
        <g>
          <g>
            <circle cx="5.5" cy="8.5" r="2.5"/>
          </g>
          <g>
            <path d="M5.5,13c1.2,0,2.1,0.3,2.8,0.8c-2.3,1.1-3.2,3-3.2,3.2l0,0.1H1v-1.3C1,15.7,2.1,13,5.5,13z"/>
          </g>
        </g>
      </svg>
    case 'logo':
      return <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                  width="100%" height="100%" viewBox="0 0 489.000000 508.000000"
                  preserveAspectRatio="xMidYMid meet">
        <g transform="translate(0.000000,508.000000) scale(0.100000,-0.100000)"
           fill="#000000" stroke="none">
          <path d="M1090 5034 c-143 -38 -276 -148 -342 -284 -49 -101 -61 -165 -56
-291 5 -124 26 -188 93 -289 181 -272 560 -322 814 -107 68 58 151 178 178
260 28 80 25 282 -4 360 -63 168 -224 315 -383 351 -85 20 -227 20 -300 0z"/>
          <path d="M2695 4303 c-38 -9 -65 -44 -65 -84 0 -67 28 -87 153 -109 191 -33
355 -88 537 -180 94 -47 145 -52 178 -17 34 36 38 77 11 111 -30 38 -245 141
-405 195 -158 52 -364 95 -409 84z"/>
          <path d="M3837 3908 c-111 -14 -218 -92 -265 -192 -70 -148 -43 -298 72 -411
172 -167 460 -118 565 98 40 81 48 154 27 237 -48 185 -208 293 -399 268z"/>
          <path d="M2893 3670 c-93 -19 -117 -41 -724 -647 l-597 -596 -1 472 c-2 370
-5 481 -16 517 -19 64 -77 148 -128 185 -72 53 -104 62 -207 63 -85 1 -101 -2
-152 -27 -72 -35 -149 -119 -180 -195 l-23 -57 -3 -1415 c-2 -1017 0 -1434 9
-1483 12 -74 63 -163 122 -213 98 -83 248 -103 362 -49 75 36 143 103 181 180
l29 60 3 558 3 558 197 -188 c108 -103 332 -314 497 -468 165 -154 391 -369
503 -478 112 -109 229 -215 259 -235 l56 -37 126 0 c145 0 175 11 262 92 92
86 127 204 95 319 -16 56 -25 67 -169 208 -84 82 -399 382 -702 666 -302 284
-559 527 -569 539 l-19 21 74 77 c41 42 293 295 560 562 530 530 535 536 546
659 20 214 -184 396 -394 352z"/>
          <path d="M4314 3183 c-57 -47 -53 -79 21 -199 198 -317 302 -697 293 -1069 -3
-119 -2 -124 21 -149 18 -19 35 -26 62 -26 92 0 99 19 99 257 0 265 -33 459
-117 683 -59 158 -187 403 -250 478 -35 41 -96 53 -129 25z"/>
          <path d="M3510 2747 c-62 -17 -109 -48 -160 -103 -68 -74 -85 -122 -85 -239 0
-117 15 -154 96 -241 191 -201 519 -111 595 163 31 113 -4 237 -94 328 -65 66
-137 98 -232 102 -41 1 -95 -3 -120 -10z"/>
          <path d="M164 2572 c-37 -6 -63 -45 -84 -127 -35 -138 -52 -302 -48 -487 l3
-170 28 -24 c36 -31 87 -32 121 -1 26 22 26 23 30 217 4 207 15 300 47 418 12
42 18 85 14 101 -11 49 -60 81 -111 73z"/>
          <path d="M3850 471 c0 -124 -12 -118 291 -153 253 -29 312 -30 426 -7 104 21
136 83 61 121 -66 34 -589 118 -737 118 l-41 0 0 -79z"/>
          <path d="M450 480 c-133 -25 -173 -37 -204 -61 -54 -42 -13 -92 89 -109 135
-22 242 -7 259 35 8 21 8 69 0 118 -8 43 -6 43 -144 17z"/>
        </g>
      </svg>

    default:
      return <svg></svg>
  }
});

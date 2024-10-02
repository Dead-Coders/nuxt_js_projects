<template>
  <div class="mt-8 mb-4">
    <a href="mailto:brandon.air.web@gmail.com" id="btn-animated">
      <svg width="278" height="62">
        <defs>
            <linearGradient id="grad1">
                <stop offset="0%" stop-color="#BFFF80"/>
                <stop offset="100%" stop-color="#80FFFF" />
            </linearGradient>
        </defs>
        <rect x="5" y="5" rx="25" fill="none" stroke="url(#grad1)" width="266" height="50"></rect>
      </svg>

      <span>Contact Me</span>
    </a>
  </div>
</template>

<style>
/* Contact Button (Home & About pages) */
#btn-animated {
    position: relative;
    display: inline-block;
    width: 278px;
    height: 50px;
    font-size: 1em;
    font-weight: bold;
    line-height: 60px;
    text-align: center;
    text-transform: uppercase;
    background-color: transparent;
    cursor: pointer;
    text-decoration:none;
    font-family: 'Roboto', sans-serif;
    font-weight:900;
    font-size:17px;
    letter-spacing: 0.045em;
    left: 50%;
    margin-left: -142px;
}

#btn-animated svg {
    position: absolute;
    top: 0;
    left: 0;
  }
  
  #btn-animated svg rect {
    /* stroke: #BFFF80; */
    stroke-width: 4;
    stroke-dasharray: 353, 0;
    stroke-dashoffset: 0;
    -webkit-transition: all 600ms ease;
    transition: all 600ms ease;
}

#btn-animated span {
  background: rgb(23,23,23);
  background: -moz-linear-gradient(left,  rgba(23,23,23,1) 0%, rgba(38,38,38,1) 100%);
  background: -webkit-linear-gradient(left,  rgba(23,23,23,1) 0%,rgba(38,38,38,1) 100%);
  background: linear-gradient(to right,  rgba(23,23,23,1) 0%,rgba(38,38,38,1) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#171717', endColorstr='#262626',GradientType=1 );
  background-clip: text;

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.dark-mode #btn-animated span {
  background: rgb(250,250,250);
  background: -moz-linear-gradient(left,  rgba(250,250,250,1) 0%, rgba(245,245,245,1) 100%);
  background: -webkit-linear-gradient(left,  rgba(250,250,250,1) 0%,rgba(245,245,245,1) 100%);
  background: linear-gradient(to right,  rgba(250,250,250,1) 0%,rgba(245,245,245,1) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#fafafa', endColorstr='#f5f5f5',GradientType=1 );
  background-clip: text;

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

#btn-animated:hover svg rect {
    stroke-width: 4;
    stroke-dasharray: 196, 543;
    stroke-dashoffset: 437;
}
</style>
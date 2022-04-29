import React, { useState, useEffect, useRef } from "react";

export default function Story (){
    const [height, setHeight] = useState(0)
  const ref = useRef(null)

  useEffect(() => {
    setHeight(ref.current.clientHeight)
  })

return(
    <div id='story' className="story" style={{paddingBottom: (height +131)+ 'px'}}>
        <div className="story-head">
        The <span style={{color: ' #ec4b6a;'}}> OG</span>   NFT Story
        </div>
        <div className="row w-100 align-items-center justify-content-between">
            <div className="col-12 col-md-4" data-aos="zoom-in-up">The OG NFT goal is to connect individuals making huge and developing impacts in our society via their actions and ideas.</div>
            
            <div className="col-12 col-md-3 text-center mt-2 mt-md-0">
            <svg width="197" height="141" viewBox="0 0 197 141" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M95.2721 0.860166C93.3791 1.79966 91.8714 3.49153 91.3368 5.27657C90.9139 6.68792 90.9661 8.9517 91.4546 10.3853C92.2006 12.5744 94.5734 14.7075 96.7276 15.1248C97.2093 15.218 97.2498 15.4048 97.1775 17.2039C97.0275 20.9422 95.5177 29.1825 93.3725 37.9703C90.7877 48.5598 83.5933 70.938 79.0504 82.5194L77.8735 85.5191L77.3421 84.7688C72.8656 78.4486 65.3637 62.4701 59.1012 45.916C57.3799 41.3665 55.5753 36.3287 55.5753 36.0736C55.5753 36.031 56.0331 35.7626 56.5929 35.4771C57.8055 34.8583 59.1933 33.3435 59.7459 32.0351C60.272 30.7892 60.2468 27.9215 59.6985 26.6501C59.1901 25.4711 57.7147 24.0105 56.3888 23.3735C55.1662 22.786 52.8349 22.6156 51.3802 23.0073C50.0495 23.3656 48.0824 25.0583 47.3837 26.4463C46.0862 29.0245 46.566 31.9478 48.6358 34.0726C49.8386 35.3074 51.7189 36.2501 52.9791 36.2501C53.3856 36.2501 53.4441 36.411 53.3393 37.2425C53.2708 37.7885 53.1453 39.7236 53.0612 41.543C52.7333 48.6109 51.2222 60.4038 49.5845 68.6692C49.0068 71.5853 48.2401 74.9497 46.5236 82.0999C46.3577 82.7912 46.1407 83.357 46.0415 83.357C45.9422 83.357 45.288 82.4934 44.5875 81.4383C42.2846 77.9693 36.4057 70.8199 32.6986 66.9805C27.4901 61.5857 17.3391 52.7801 12.2397 49.2331C11.3301 48.6003 10.5856 48.048 10.5856 48.0057C10.5856 47.9636 10.7145 47.5936 10.8722 47.1839C11.7141 44.9956 10.7746 42.0686 8.81303 40.7695C6.74165 39.3973 4.55806 39.3668 2.48113 40.6808C-0.60146 42.631 -0.862137 47.3316 1.98253 49.6761C3.7681 51.148 6.48389 51.3926 8.36366 50.2506L9.18512 49.7515L11.2605 53.1019C17.2801 62.82 21.1124 79.4122 21.624 97.9712C21.7965 104.23 21.8934 103.719 20.4532 104.145C20.2118 104.216 20.2018 104.44 20.413 105.046C20.5675 105.489 20.794 105.852 20.9163 105.852C21.0386 105.852 23.0216 105.309 25.3232 104.646C47.3575 98.2967 69.5147 95.266 93.8973 95.266C115.639 95.266 136.634 97.3795 156.934 101.612C165.852 103.471 167.769 103.909 171.589 104.957C173.463 105.471 175.09 105.794 175.205 105.673C175.51 105.355 175.573 104.47 175.33 103.909C175.021 103.193 175.36 92.3261 175.835 87.7236C177.33 73.2367 180.636 61.4277 185.447 53.3859C186.558 51.5302 187.593 50.0154 187.748 50.0201C187.903 50.0246 188.252 50.1964 188.523 50.4017C188.794 50.6068 189.643 50.8532 190.41 50.949C191.525 51.0885 192.061 51.0094 193.089 50.5545C195.504 49.4863 196.631 47.84 196.631 45.3804C196.631 41.0923 192.253 38.4133 188.42 40.3561C186.913 41.1196 185.934 42.4246 185.542 44.1911C185.3 45.2872 185.358 45.8803 185.896 47.7622C186.013 48.1713 185.762 48.5005 184.789 49.2132C182.235 51.0845 175.303 57.0692 171.012 61.1088C164.145 67.5738 157.787 74.5668 152.651 81.306C151.792 82.4339 150.989 83.357 150.868 83.357C150.618 83.357 150.464 82.8187 148.973 76.7408C146.253 65.6464 144.142 51.139 143.583 39.6905L143.421 36.3824L144.951 35.9355C149.691 34.5498 151.466 28.8972 148.329 25.1766C147.012 23.6138 145.651 22.9445 143.512 22.8072C141.833 22.6995 141.423 22.7704 140.163 23.387C137.801 24.5425 136.482 26.6797 136.474 29.3648C136.466 32.159 137.735 34.2939 140.129 35.512C140.712 35.8082 141.221 36.0792 141.262 36.1143C141.521 36.3364 134.212 54.9854 130.718 63.0171C127.269 70.9472 119.794 85.2095 119.088 85.2095C118.397 85.2095 109.364 58.0341 106.289 46.7036C102.896 34.2002 100.805 24.1646 100.169 17.328L99.9963 15.4755L101.733 14.7202C103.576 13.9186 104.667 12.8938 105.655 11.0352C106.513 9.42118 106.508 5.90695 105.645 4.28335C104.246 1.64907 101.476 -0.012369 98.5039 6.93564e-05C97.3411 0.00483297 96.5956 0.203052 95.2721 0.860166ZM100.586 2.14819C103.919 3.14723 105.477 6.99676 103.86 10.2413C102.815 12.3386 100.982 13.4906 98.6916 13.4906C94.7799 13.4906 91.9336 9.81947 93.0205 6.17636C94.0203 2.82516 97.1977 1.13328 100.586 2.14819ZM100.452 30.2816C101.666 36.3591 105.034 49.4723 106.913 55.4369C110.746 67.5976 114.201 77.9701 116.302 83.6216C116.979 85.441 117.716 87.4359 117.939 88.0544C118.163 88.6729 118.424 89.1776 118.52 89.1757C118.857 89.1688 123.031 82.6443 125.178 78.7677C129.483 70.9972 135.929 56.1819 140.66 43.1862C141.206 41.6883 141.694 40.5048 141.745 40.5559C141.796 40.607 141.968 42.428 142.127 44.6026C142.753 53.1623 144.664 65.7448 146.766 75.153C147.901 80.2323 149.864 87.1353 150.2 87.2308C150.338 87.27 151.478 85.9084 152.733 84.2049C158.652 76.1745 167.175 66.9416 176.031 58.9667C180.797 54.6752 183.399 52.4874 183.399 52.7719C183.399 52.8595 182.702 54.3283 181.851 56.0363C176.632 66.5091 173.342 83.5258 173.342 100.05V103.532L172.747 103.369C164.396 101.088 150.035 98.2189 139.6 96.747C129.968 95.3883 129.454 95.3282 121.34 94.6181C102.464 92.9662 82.8446 93.0525 65.6893 94.8629C51.847 96.3238 35.5628 99.5419 24.0164 103.098C23.594 103.228 23.5532 102.975 23.5532 100.209C23.5532 83.1011 20.0366 65.5903 14.4878 55.069C13.6134 53.4113 13.0627 52.1513 13.2636 52.2691C14.0437 52.7267 18.8018 56.5907 21.7007 59.1213C25.2628 62.2306 33.3089 70.184 35.7772 73.0358C38.6819 76.3915 42.378 81.265 44.4602 84.4844C45.5519 86.1723 46.5125 87.5616 46.5948 87.5722C46.9704 87.6199 49.773 76.7657 51.3053 69.3308C52.7052 62.5373 54.3272 50.4968 54.6663 44.3811C54.7695 42.5217 54.9312 40.9523 55.0256 40.8941C55.1768 40.8007 56.0355 42.9533 59.4018 51.8642C61.9805 58.6904 68.12 72.375 70.839 77.3572C74.1777 83.4753 77.9918 89.3739 78.3578 88.9857C78.9115 88.399 84.6537 72.6584 87.9899 62.5823C92.6431 48.5291 96.2563 35.0237 97.7963 25.9289C98.1782 23.6728 98.5574 21.6483 98.6389 21.43C98.7202 21.2116 99.0076 22.343 99.2775 23.9441C99.5472 25.5452 100.076 28.397 100.452 30.2816ZM55.8712 25.0188C59.0525 26.6639 59.2179 31.5815 56.1596 33.5825C54.6663 34.5596 52.9889 34.6186 51.2261 33.7561C49.9879 33.1503 49.6772 32.8396 49.0714 31.6016C48.499 30.4314 48.3973 29.9436 48.54 29.051C48.8972 26.8174 50.1845 25.1858 52.0516 24.6002C52.963 24.3143 54.9245 24.5292 55.8712 25.0188ZM145.853 25.261C150.25 28.1575 147.72 34.9192 142.46 34.3264C140.305 34.0835 138.137 31.5945 138.15 29.3794C138.158 28.215 138.919 26.5231 139.802 25.7109C141.352 24.2844 144.064 24.0828 145.853 25.261ZM193.078 42.0633C194.709 43.0819 195.331 45.6863 194.343 47.3589C193.814 48.2547 192.086 49.2177 191.007 49.2177C188.58 49.2177 186.739 46.7232 187.4 44.3287C188.079 41.8712 190.942 40.729 193.078 42.0633ZM7.5954 42.0617C10.0405 43.5525 9.82556 47.5939 7.23601 48.8229C5.12546 49.8243 2.46392 48.5781 1.851 46.3013C1.43022 44.7394 2.28582 42.695 3.67653 41.9392C4.68483 41.3911 6.59371 41.4507 7.5954 42.0617ZM80.9969 97.4125C61.9779 98.2456 41.0606 101.707 24.173 106.816L20.1618 108.03L20.4278 108.794C20.5741 109.213 20.8472 109.557 21.0346 109.557C21.222 109.557 22.9075 109.085 24.7799 108.509C36.4346 104.921 52.5102 101.761 66.5581 100.297C77.2259 99.1851 84.2568 98.9078 98.1522 99.0502C113.358 99.206 118.677 99.5628 134.704 101.503C145.788 102.845 165.5 106.766 173.544 109.229C175.004 109.676 175.27 109.593 175.57 108.597C175.777 107.908 175.281 107.728 168.446 106.02C156.637 103.069 140.104 100.163 127.691 98.8556C112.746 97.2818 95.8811 96.7607 80.9969 97.4125ZM93.6244 104.197L89.4666 108.366L93.6263 112.678L97.7862 116.989L102.018 112.743L106.251 108.496L102.016 104.262L97.782 100.027L93.6244 104.197ZM64.3742 103.174C62.5016 103.82 61.555 104.632 60.6324 106.381C59.012 109.453 60.2246 113.142 63.4848 115.058C66.5438 116.857 70.9488 115.281 72.3668 111.881C72.5925 111.34 72.7762 110.208 72.7746 109.367C72.7696 106.408 70.9509 103.891 68.2341 103.084C66.5052 102.571 66.0905 102.581 64.3742 103.174ZM100.703 105.476C102.155 107.016 103.374 108.357 103.411 108.457C103.448 108.556 102.196 109.916 100.628 111.479L97.7775 114.321L94.8751 111.409L91.973 108.498L94.8751 105.587C96.4712 103.986 97.8413 102.676 97.9196 102.676C97.9979 102.676 99.2502 103.936 100.703 105.476ZM125.971 103.07C121.497 104.508 119.933 110.403 123.14 113.748C124.245 114.902 125.708 115.638 127.246 115.816C129.795 116.11 132.767 114.266 133.825 111.735C134.337 110.509 134.314 108.021 133.779 106.737C132.54 103.767 128.989 102.1 125.971 103.07ZM67.9522 104.938C72.2678 106.741 72.0818 112.611 67.6709 113.817C65.6559 114.368 63.349 113.424 62.463 111.688C61.6354 110.065 61.5492 108.963 62.1441 107.617C63.2572 105.101 65.6742 103.986 67.9522 104.938ZM130.256 105.309C132.29 106.51 133.081 109.723 131.837 111.736C130.069 114.597 125.653 114.701 124.017 111.922C123.216 110.562 123.059 109.391 123.484 107.961C124.36 105.01 127.599 103.742 130.256 105.309ZM35.3474 109.434C34.0432 109.927 33.4245 110.482 32.7878 111.73C31.757 113.749 32.4517 116.376 34.3428 117.611C35.7597 118.535 37.02 118.695 38.6404 118.157C41.642 117.16 42.6559 113.603 40.7237 110.846C39.7376 109.44 37.1396 108.757 35.3474 109.434ZM155.255 109.414C153.897 109.898 153.119 110.673 152.464 112.197C151.965 113.356 151.949 113.576 152.275 114.833C152.702 116.479 153.695 117.592 155.275 118.195C158.097 119.273 161.433 117.016 161.433 114.029C161.433 111.754 160.089 109.87 158.066 109.308C156.802 108.957 156.504 108.968 155.255 109.414ZM19.9856 111.571C19.5441 112.245 19.5515 112.263 20.721 113.384C22.5457 115.132 23.3391 116.687 23.4913 118.811C23.662 121.197 23.0639 123.064 21.2524 125.802C19.7275 128.106 19.6497 128.418 20.2452 129.843C20.4635 130.366 20.6421 131.007 20.6421 131.269C20.6421 132.061 22.704 133.572 24.9797 134.448C35.8637 138.636 68.581 141.365 103.079 140.96C118.27 140.783 125.276 140.521 136.557 139.711C157.853 138.181 171.042 135.673 174.448 132.507C175.378 131.642 176.016 129.51 175.728 128.23C175.493 127.188 175.416 127.067 173.538 124.744C171.199 121.853 170.644 119.031 171.913 116.485C172.291 115.726 172.827 114.984 173.104 114.836C173.728 114.502 173.733 114.102 173.121 113.307L172.647 112.691L171.642 113.804C169.454 116.226 168.831 119.383 169.98 122.226C170.493 123.496 170.558 123.851 170.255 123.735C169.428 123.418 165.685 122.536 162.924 122.009C149.936 119.527 131.919 117.992 109.695 117.475C77.3175 116.722 43.4876 119.269 26.9936 123.7C25.6109 124.072 24.4623 124.376 24.4411 124.376C24.4199 124.377 24.6285 123.652 24.9042 122.766C26.0181 119.186 25.0318 115.309 22.262 112.381C20.843 110.88 20.5148 110.764 19.9856 111.571ZM38.9683 111.942C39.9546 112.928 40.0195 113.083 39.8797 114.125C39.4121 117.611 34.6114 117.535 34.2171 114.035C34.1025 113.019 34.1867 112.717 34.7813 112.01C35.1659 111.553 35.7441 111.128 36.0667 111.066C37.5363 110.781 37.9248 110.899 38.9683 111.942ZM158.853 111.954C160.59 113.832 159.22 116.702 156.586 116.702C154.722 116.702 153.281 114.424 154.119 112.802C154.528 112.013 155.239 111.307 155.876 111.059C156.697 110.74 158.127 111.17 158.853 111.954ZM116.708 119.48C126.073 119.898 137.827 120.597 138.939 120.802C139.302 120.87 141.148 121.053 143.041 121.21C149.743 121.767 159.833 123.223 165.932 124.512C169.111 125.184 172.094 126.241 172.879 126.973C173.829 127.858 173.807 128.199 172.835 127.696C164.826 123.555 139.176 120.877 103.873 120.498C65.6959 120.087 32.6951 122.999 23.4948 127.591C21.7412 128.466 21.6653 128.483 21.8725 127.943C22.628 125.974 34.035 123.423 50.1501 121.619C70.2663 119.367 95.7813 118.547 116.708 119.48ZM122.531 122.653C131.075 123.051 132.681 123.147 138.409 123.605C153.147 124.783 163.618 126.329 169.548 128.202C176.413 130.37 174.217 132.548 163.021 134.677C150.977 136.967 138.391 138.131 116.973 138.933C107.925 139.273 86.3909 139.268 78.0702 138.925C69.6457 138.578 55.0937 137.689 52.1744 137.344C50.9154 137.195 47.7418 136.834 45.1218 136.541C42.5018 136.249 38.2741 135.648 35.7269 135.208C27.412 133.769 23.2682 132.439 22.4732 130.953C21.5763 129.277 28.1504 127.209 39.9612 125.451C45.9734 124.556 46.4482 124.508 59.6773 123.461C62.2973 123.254 67.5373 122.954 71.3217 122.795C75.1061 122.635 78.8575 122.472 79.658 122.431C85.0846 122.157 115.226 122.312 122.531 122.653Z" fill="url(#paint0_linear_2405_2663)"/>
<defs>
<linearGradient id="paint0_linear_2405_2663" x1="0" y1="0" x2="196.893" y2="30.0297" gradientUnits="userSpaceOnUse">
<stop stop-color="#FF7448"/>
<stop offset="0.567708" stop-color="#FF4848"/>
<stop offset="1" stop-color="#6248FF"/>
</linearGradient>
</defs>
</svg>

</div>
        </div>
        <div className="images w-100 row">
            <div className="img1 col-12 col-md-4">
                <img src="/img/carou.png"/>
            

                <p data-aos="zoom-in-right">The “OG NFT” Character draws its ideology from the traditional “OG” keyword in our society, commonly referred to as Original Gangster. </p>
            </div>
            <div className="img2 col-md-5 col-12 position-relative">
            <img src="/img/carou1.png" className="abso d-none d-md-block"/>
            <img src="/img/carou2.png"/>
<p className='text col-12'ref={ref} data-aos="zoom-in-up">The use of the word OG has transcended across continents, races, and societies, with each sphere attributing to different definitions and narratives as to what the “OG” phenomenon connotes most of which revolves around being Accomplished, Experienced, Kingly or Queenly, Bosslike, Tough, disciplined, Ruthless, and More!!
The OG brand recognizes notable personalities and individuals that have gone on to influence and shape modern societies. 
</p>

            </div>
            <div className="img3 col-12 col-md-3">
            <img src="/img/carou.png"/>
<p data-aos="zoom-in-left" className='mt-3'>The OG NFT collection is targeted to reach all global lovers of art worldwide, consisting of a collection of artistic masterpieces selling every art piece to a global ecosystem of art loving nft collectors.
</p>
            </div>
        </div>
    </div>
)
}
import React, { useState, useEffect, useRef } from "react";

export default function Story (){
    const [height, setHeight] = useState(0)
  const ref = useRef(null)

  useEffect(() => {
    setHeight(ref.current.clientHeight)
  })

return(
    <div className="story" style={{paddingBottom: (height +131)+ 'px'}}>
        <div className="story-head">
        The <span style={{color: ' #9CFF00;'}}> OG</span>   NFT Story
        </div>
        <div className="row w-100 align-items-center justify-content-between">
            <div className="col-6 col-md-3">The OG NFT goal is to connect individuals making huge and developing impacts in our society via their actions and ideas.</div>
            <svg className="col-md-3 col-5" width="201" height="145" viewBox="0 0 201 145" fill="none" xmlns="http://www.w3.org/2000/svg">
<mask id="path-1-outside-1_1952_1987" maskUnits="userSpaceOnUse" x="0" y="0" width="201" height="145" fill="black">
<rect fill="white" width="201" height="145"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M97.2721 2.86017C95.3791 3.79966 93.8714 5.49153 93.3368 7.27657C92.9139 8.68792 92.9661 10.9517 93.4546 12.3853C94.2006 14.5744 96.5734 16.7075 98.7276 17.1248C99.2093 17.218 99.2498 17.4048 99.1775 19.2039C99.0275 22.9422 97.5177 31.1825 95.3725 39.9703C92.7877 50.5598 85.5933 72.938 81.0504 84.5194L79.8735 87.5191L79.3421 86.7688C74.8656 80.4486 67.3637 64.4701 61.1012 47.916C59.3799 43.3665 57.5753 38.3287 57.5753 38.0736C57.5753 38.031 58.0331 37.7626 58.5929 37.4771C59.8055 36.8583 61.1933 35.3435 61.7459 34.0351C62.272 32.7892 62.2468 29.9215 61.6985 28.6501C61.1901 27.4711 59.7147 26.0105 58.3888 25.3735C57.1662 24.786 54.8349 24.6156 53.3802 25.0073C52.0495 25.3656 50.0824 27.0583 49.3837 28.4463C48.0862 31.0245 48.566 33.9478 50.6358 36.0726C51.8386 37.3074 53.7189 38.2501 54.9791 38.2501C55.3856 38.2501 55.4441 38.411 55.3393 39.2425C55.2708 39.7885 55.1453 41.7236 55.0612 43.543C54.7333 50.6109 53.2222 62.4038 51.5845 70.6692C51.0068 73.5853 50.2401 76.9497 48.5236 84.0999C48.3577 84.7912 48.1407 85.357 48.0415 85.357C47.9422 85.357 47.288 84.4934 46.5875 83.4383C44.2846 79.9693 38.4057 72.8199 34.6986 68.9805C29.4901 63.5857 19.3391 54.7801 14.2397 51.2331C13.3301 50.6003 12.5856 50.048 12.5856 50.0057C12.5856 49.9636 12.7145 49.5936 12.8722 49.1839C13.7141 46.9956 12.7746 44.0686 10.813 42.7695C8.74165 41.3973 6.55806 41.3668 4.48113 42.6808C1.39854 44.631 1.13786 49.3316 3.98253 51.6761C5.7681 53.148 8.48389 53.3926 10.3637 52.2506L11.1851 51.7515L13.2605 55.1019C19.2801 64.82 23.1124 81.4122 23.624 99.9712C23.7965 106.23 23.8934 105.719 22.4532 106.145C22.2118 106.216 22.2018 106.44 22.413 107.046C22.5675 107.489 22.794 107.852 22.9163 107.852C23.0386 107.852 25.0216 107.309 27.3232 106.646C49.3575 100.297 71.5147 97.266 95.8973 97.266C117.639 97.266 138.634 99.3795 158.934 103.612C167.852 105.471 169.769 105.909 173.589 106.957C175.463 107.471 177.09 107.794 177.205 107.673C177.51 107.355 177.573 106.47 177.33 105.909C177.021 105.193 177.36 94.3261 177.835 89.7236C179.33 75.2367 182.636 63.4277 187.447 55.3859C188.558 53.5302 189.593 52.0154 189.748 52.0201C189.903 52.0246 190.252 52.1964 190.523 52.4017C190.794 52.6068 191.643 52.8532 192.41 52.949C193.525 53.0885 194.061 53.0094 195.089 52.5545C197.504 51.4863 198.631 49.84 198.631 47.3804C198.631 43.0923 194.253 40.4133 190.42 42.3561C188.913 43.1196 187.934 44.4246 187.542 46.1911C187.3 47.2872 187.358 47.8803 187.896 49.7622C188.013 50.1713 187.762 50.5005 186.789 51.2132C184.235 53.0845 177.303 59.0692 173.012 63.1088C166.145 69.5738 159.787 76.5668 154.651 83.306C153.792 84.4339 152.989 85.357 152.868 85.357C152.618 85.357 152.464 84.8187 150.973 78.7408C148.253 67.6464 146.142 53.1391 145.583 41.6905L145.421 38.3824L146.951 37.9355C151.691 36.5498 153.466 30.8972 150.329 27.1766C149.012 25.6138 147.651 24.9445 145.512 24.8072C143.833 24.6995 143.423 24.7704 142.163 25.387C139.801 26.5425 138.482 28.6797 138.474 31.3648C138.466 34.159 139.735 36.2939 142.129 37.512C142.712 37.8082 143.221 38.0792 143.262 38.1144C143.521 38.3364 136.212 56.9854 132.718 65.0171C129.269 72.9472 121.794 87.2095 121.088 87.2095C120.397 87.2095 111.364 60.0341 108.289 48.7036C104.896 36.2002 102.805 26.1646 102.169 19.328L101.996 17.4755L103.733 16.7202C105.576 15.9186 106.667 14.8938 107.655 13.0352C108.513 11.4212 108.508 7.90695 107.645 6.28335C106.246 3.64907 103.476 1.98763 100.504 2.00007C99.3411 2.00483 98.5956 2.20305 97.2721 2.86017ZM102.586 4.14819C105.919 5.14723 107.477 8.99676 105.86 12.2413C104.815 14.3386 102.982 15.4906 100.692 15.4906C96.7799 15.4906 93.9336 11.8195 95.0205 8.17636C96.0203 4.82516 99.1977 3.13328 102.586 4.14819ZM102.452 32.2816C103.666 38.3592 107.034 51.4723 108.913 57.4369C112.746 69.5976 116.201 79.9701 118.302 85.6216C118.979 87.441 119.716 89.4359 119.939 90.0544C120.163 90.6729 120.424 91.1776 120.52 91.1757C120.857 91.1688 125.031 84.6443 127.178 80.7677C131.483 72.9972 137.929 58.1819 142.66 45.1862C143.206 43.6883 143.694 42.5048 143.745 42.5559C143.796 42.607 143.968 44.428 144.127 46.6026C144.753 55.1623 146.664 67.7448 148.766 77.153C149.901 82.2323 151.864 89.1353 152.2 89.2308C152.338 89.27 153.478 87.9084 154.733 86.2049C160.652 78.1745 169.175 68.9416 178.031 60.9667C182.797 56.6752 185.399 54.4874 185.399 54.7719C185.399 54.8595 184.702 56.3283 183.851 58.0363C178.632 68.5091 175.342 85.5258 175.342 102.05V105.532L174.747 105.369C166.396 103.088 152.035 100.219 141.6 98.747C131.968 97.3883 131.454 97.3282 123.34 96.6181C104.464 94.9662 84.8446 95.0525 67.6893 96.8629C53.847 98.3238 37.5628 101.542 26.0164 105.098C25.594 105.228 25.5532 104.975 25.5532 102.209C25.5532 85.1011 22.0366 67.5903 16.4878 57.069C15.6134 55.4113 15.0627 54.1513 15.2636 54.2691C16.0437 54.7267 20.8018 58.5907 23.7007 61.1213C27.2628 64.2306 35.3089 72.184 37.7772 75.0358C40.6819 78.3915 44.378 83.2649 46.4602 86.4844C47.5519 88.1723 48.5125 89.5617 48.5948 89.5722C48.9704 89.6199 51.773 78.7657 53.3053 71.3308C54.7052 64.5373 56.3272 52.4968 56.6663 46.3811C56.7695 44.5217 56.9312 42.9523 57.0256 42.8941C57.1768 42.8007 58.0355 44.9533 61.4018 53.8642C63.9805 60.6904 70.12 74.375 72.839 79.3572C76.1778 85.4753 79.9918 91.3739 80.3578 90.9857C80.9115 90.399 86.6537 74.6584 89.9899 64.5823C94.6431 50.5291 98.2563 37.0237 99.7963 27.9289C100.178 25.6728 100.557 23.6483 100.639 23.43C100.72 23.2116 101.008 24.343 101.278 25.9441C101.547 27.5452 102.076 30.397 102.452 32.2816ZM57.8712 27.0188C61.0525 28.6639 61.2179 33.5815 58.1596 35.5825C56.6663 36.5596 54.9889 36.6186 53.2261 35.7561C51.9879 35.1503 51.6772 34.8396 51.0714 33.6016C50.499 32.4314 50.3973 31.9436 50.54 31.051C50.8972 28.8174 52.1845 27.1858 54.0516 26.6002C54.963 26.3143 56.9245 26.5292 57.8712 27.0188ZM147.853 27.261C152.25 30.1575 149.72 36.9192 144.46 36.3264C142.305 36.0835 140.137 33.5945 140.15 31.3794C140.158 30.215 140.919 28.5231 141.802 27.7109C143.352 26.2844 146.064 26.0828 147.853 27.261ZM195.078 44.0633C196.709 45.0819 197.331 47.6863 196.343 49.3589C195.814 50.2547 194.086 51.2177 193.007 51.2177C190.58 51.2177 188.739 48.7232 189.4 46.3287C190.079 43.8712 192.942 42.729 195.078 44.0633ZM9.5954 44.0617C12.0405 45.5525 11.8256 49.5939 9.23601 50.8229C7.12546 51.8243 4.46392 50.5781 3.851 48.3013C3.43022 46.7394 4.28582 44.695 5.67653 43.9392C6.68483 43.3911 8.59371 43.4507 9.5954 44.0617ZM82.9969 99.4125C63.9779 100.246 43.0606 103.707 26.173 108.816L22.1618 110.03L22.4278 110.794C22.5741 111.213 22.8472 111.557 23.0346 111.557C23.222 111.557 24.9075 111.085 26.7799 110.509C38.4346 106.921 54.5102 103.761 68.5581 102.297C79.2259 101.185 86.2568 100.908 100.152 101.05C115.358 101.206 120.677 101.563 136.704 103.503C147.788 104.845 167.5 108.766 175.544 111.229C177.004 111.676 177.27 111.593 177.57 110.597C177.777 109.908 177.281 109.728 170.446 108.02C158.637 105.069 142.104 102.163 129.691 100.856C114.746 99.2818 97.881 98.7607 82.9969 99.4125ZM95.6244 106.197L91.4666 110.366L95.6263 114.678L99.7862 118.989L104.018 114.743L108.251 110.496L104.016 106.262L99.782 102.027L95.6244 106.197ZM66.3742 105.174C64.5016 105.82 63.555 106.632 62.6324 108.381C61.012 111.453 62.2246 115.142 65.4848 117.058C68.5438 118.857 72.9488 117.281 74.3668 113.881C74.5925 113.34 74.7762 112.208 74.7746 111.367C74.7696 108.408 72.9509 105.891 70.2341 105.084C68.5052 104.571 68.0905 104.581 66.3742 105.174ZM102.703 107.476C104.155 109.016 105.374 110.357 105.411 110.457C105.448 110.556 104.196 111.916 102.628 113.479L99.7775 116.321L96.8751 113.409L93.973 110.498L96.8751 107.587C98.4712 105.986 99.8413 104.676 99.9196 104.676C99.9979 104.676 101.25 105.936 102.703 107.476ZM127.971 105.07C123.497 106.508 121.933 112.403 125.14 115.748C126.245 116.902 127.708 117.638 129.246 117.816C131.795 118.11 134.767 116.266 135.825 113.735C136.337 112.509 136.314 110.021 135.779 108.737C134.54 105.767 130.989 104.1 127.971 105.07ZM69.9522 106.938C74.2678 108.741 74.0818 114.611 69.6709 115.817C67.6559 116.368 65.349 115.424 64.463 113.688C63.6354 112.065 63.5492 110.963 64.1441 109.617C65.2572 107.101 67.6742 105.986 69.9522 106.938ZM132.256 107.309C134.29 108.51 135.081 111.723 133.837 113.736C132.069 116.597 127.653 116.701 126.017 113.922C125.216 112.562 125.059 111.391 125.484 109.961C126.36 107.01 129.599 105.742 132.256 107.309ZM37.3474 111.434C36.0432 111.927 35.4245 112.482 34.7878 113.73C33.757 115.749 34.4517 118.376 36.3428 119.611C37.7597 120.535 39.02 120.695 40.6404 120.157C43.642 119.16 44.6559 115.603 42.7237 112.846C41.7376 111.44 39.1396 110.757 37.3474 111.434ZM157.255 111.414C155.897 111.898 155.119 112.673 154.464 114.197C153.965 115.356 153.949 115.576 154.275 116.833C154.702 118.479 155.695 119.592 157.275 120.195C160.097 121.273 163.433 119.016 163.433 116.029C163.433 113.754 162.089 111.87 160.066 111.308C158.802 110.957 158.504 110.968 157.255 111.414ZM21.9856 113.571C21.5441 114.245 21.5515 114.263 22.721 115.384C24.5457 117.132 25.3391 118.687 25.4913 120.811C25.662 123.197 25.0639 125.064 23.2524 127.802C21.7275 130.106 21.6497 130.418 22.2452 131.843C22.4635 132.366 22.6421 133.007 22.6421 133.269C22.6421 134.061 24.704 135.572 26.9797 136.448C37.8637 140.636 70.581 143.365 105.079 142.96C120.27 142.783 127.276 142.521 138.557 141.711C159.853 140.181 173.042 137.673 176.448 134.507C177.378 133.642 178.016 131.51 177.728 130.23C177.493 129.188 177.416 129.067 175.538 126.744C173.199 123.853 172.644 121.031 173.913 118.485C174.291 117.726 174.827 116.984 175.104 116.836C175.728 116.502 175.733 116.102 175.121 115.307L174.647 114.691L173.642 115.804C171.454 118.226 170.831 121.383 171.98 124.226C172.493 125.496 172.558 125.851 172.255 125.735C171.428 125.418 167.685 124.536 164.924 124.009C151.936 121.527 133.919 119.992 111.695 119.475C79.3175 118.722 45.4876 121.269 28.9936 125.7C27.6109 126.072 26.4623 126.376 26.4411 126.376C26.4199 126.377 26.6285 125.652 26.9042 124.766C28.0181 121.186 27.0318 117.309 24.262 114.381C22.843 112.88 22.5148 112.764 21.9856 113.571ZM40.9683 113.942C41.9546 114.928 42.0195 115.083 41.8797 116.125C41.4121 119.611 36.6114 119.535 36.2171 116.035C36.1025 115.019 36.1867 114.717 36.7813 114.01C37.1659 113.553 37.7441 113.128 38.0667 113.066C39.5363 112.781 39.9248 112.899 40.9683 113.942ZM160.853 113.954C162.591 115.832 161.22 118.702 158.586 118.702C156.722 118.702 155.281 116.424 156.119 114.802C156.528 114.013 157.239 113.307 157.876 113.059C158.697 112.74 160.127 113.17 160.853 113.954ZM118.708 121.48C128.073 121.898 139.827 122.597 140.939 122.802C141.302 122.87 143.148 123.053 145.041 123.21C151.743 123.767 161.833 125.223 167.932 126.512C171.111 127.184 174.094 128.241 174.879 128.973C175.829 129.858 175.807 130.199 174.835 129.696C166.826 125.555 141.176 122.877 105.873 122.498C67.6959 122.087 34.6951 124.999 25.4948 129.591C23.7412 130.466 23.6653 130.483 23.8725 129.943C24.628 127.974 36.035 125.423 52.1501 123.619C72.2663 121.367 97.7813 120.547 118.708 121.48ZM124.531 124.653C133.075 125.051 134.681 125.147 140.409 125.605C155.147 126.783 165.618 128.329 171.548 130.202C178.413 132.37 176.217 134.548 165.021 136.677C152.977 138.967 140.391 140.131 118.973 140.933C109.925 141.273 88.3909 141.268 80.0702 140.925C71.6457 140.578 57.0937 139.689 54.1744 139.344C52.9154 139.195 49.7418 138.834 47.1218 138.541C44.5018 138.249 40.2741 137.648 37.7269 137.208C29.412 135.769 25.2682 134.439 24.4732 132.953C23.5763 131.277 30.1504 129.209 41.9612 127.451C47.9735 126.556 48.4482 126.508 61.6773 125.461C64.2973 125.254 69.5373 124.954 73.3217 124.795C77.1061 124.635 80.8575 124.472 81.658 124.431C87.0846 124.157 117.226 124.312 124.531 124.653Z"/>
</mask>
<path fill-rule="evenodd" clip-rule="evenodd" d="M97.2721 2.86017C95.3791 3.79966 93.8714 5.49153 93.3368 7.27657C92.9139 8.68792 92.9661 10.9517 93.4546 12.3853C94.2006 14.5744 96.5734 16.7075 98.7276 17.1248C99.2093 17.218 99.2498 17.4048 99.1775 19.2039C99.0275 22.9422 97.5177 31.1825 95.3725 39.9703C92.7877 50.5598 85.5933 72.938 81.0504 84.5194L79.8735 87.5191L79.3421 86.7688C74.8656 80.4486 67.3637 64.4701 61.1012 47.916C59.3799 43.3665 57.5753 38.3287 57.5753 38.0736C57.5753 38.031 58.0331 37.7626 58.5929 37.4771C59.8055 36.8583 61.1933 35.3435 61.7459 34.0351C62.272 32.7892 62.2468 29.9215 61.6985 28.6501C61.1901 27.4711 59.7147 26.0105 58.3888 25.3735C57.1662 24.786 54.8349 24.6156 53.3802 25.0073C52.0495 25.3656 50.0824 27.0583 49.3837 28.4463C48.0862 31.0245 48.566 33.9478 50.6358 36.0726C51.8386 37.3074 53.7189 38.2501 54.9791 38.2501C55.3856 38.2501 55.4441 38.411 55.3393 39.2425C55.2708 39.7885 55.1453 41.7236 55.0612 43.543C54.7333 50.6109 53.2222 62.4038 51.5845 70.6692C51.0068 73.5853 50.2401 76.9497 48.5236 84.0999C48.3577 84.7912 48.1407 85.357 48.0415 85.357C47.9422 85.357 47.288 84.4934 46.5875 83.4383C44.2846 79.9693 38.4057 72.8199 34.6986 68.9805C29.4901 63.5857 19.3391 54.7801 14.2397 51.2331C13.3301 50.6003 12.5856 50.048 12.5856 50.0057C12.5856 49.9636 12.7145 49.5936 12.8722 49.1839C13.7141 46.9956 12.7746 44.0686 10.813 42.7695C8.74165 41.3973 6.55806 41.3668 4.48113 42.6808C1.39854 44.631 1.13786 49.3316 3.98253 51.6761C5.7681 53.148 8.48389 53.3926 10.3637 52.2506L11.1851 51.7515L13.2605 55.1019C19.2801 64.82 23.1124 81.4122 23.624 99.9712C23.7965 106.23 23.8934 105.719 22.4532 106.145C22.2118 106.216 22.2018 106.44 22.413 107.046C22.5675 107.489 22.794 107.852 22.9163 107.852C23.0386 107.852 25.0216 107.309 27.3232 106.646C49.3575 100.297 71.5147 97.266 95.8973 97.266C117.639 97.266 138.634 99.3795 158.934 103.612C167.852 105.471 169.769 105.909 173.589 106.957C175.463 107.471 177.09 107.794 177.205 107.673C177.51 107.355 177.573 106.47 177.33 105.909C177.021 105.193 177.36 94.3261 177.835 89.7236C179.33 75.2367 182.636 63.4277 187.447 55.3859C188.558 53.5302 189.593 52.0154 189.748 52.0201C189.903 52.0246 190.252 52.1964 190.523 52.4017C190.794 52.6068 191.643 52.8532 192.41 52.949C193.525 53.0885 194.061 53.0094 195.089 52.5545C197.504 51.4863 198.631 49.84 198.631 47.3804C198.631 43.0923 194.253 40.4133 190.42 42.3561C188.913 43.1196 187.934 44.4246 187.542 46.1911C187.3 47.2872 187.358 47.8803 187.896 49.7622C188.013 50.1713 187.762 50.5005 186.789 51.2132C184.235 53.0845 177.303 59.0692 173.012 63.1088C166.145 69.5738 159.787 76.5668 154.651 83.306C153.792 84.4339 152.989 85.357 152.868 85.357C152.618 85.357 152.464 84.8187 150.973 78.7408C148.253 67.6464 146.142 53.1391 145.583 41.6905L145.421 38.3824L146.951 37.9355C151.691 36.5498 153.466 30.8972 150.329 27.1766C149.012 25.6138 147.651 24.9445 145.512 24.8072C143.833 24.6995 143.423 24.7704 142.163 25.387C139.801 26.5425 138.482 28.6797 138.474 31.3648C138.466 34.159 139.735 36.2939 142.129 37.512C142.712 37.8082 143.221 38.0792 143.262 38.1144C143.521 38.3364 136.212 56.9854 132.718 65.0171C129.269 72.9472 121.794 87.2095 121.088 87.2095C120.397 87.2095 111.364 60.0341 108.289 48.7036C104.896 36.2002 102.805 26.1646 102.169 19.328L101.996 17.4755L103.733 16.7202C105.576 15.9186 106.667 14.8938 107.655 13.0352C108.513 11.4212 108.508 7.90695 107.645 6.28335C106.246 3.64907 103.476 1.98763 100.504 2.00007C99.3411 2.00483 98.5956 2.20305 97.2721 2.86017ZM102.586 4.14819C105.919 5.14723 107.477 8.99676 105.86 12.2413C104.815 14.3386 102.982 15.4906 100.692 15.4906C96.7799 15.4906 93.9336 11.8195 95.0205 8.17636C96.0203 4.82516 99.1977 3.13328 102.586 4.14819ZM102.452 32.2816C103.666 38.3592 107.034 51.4723 108.913 57.4369C112.746 69.5976 116.201 79.9701 118.302 85.6216C118.979 87.441 119.716 89.4359 119.939 90.0544C120.163 90.6729 120.424 91.1776 120.52 91.1757C120.857 91.1688 125.031 84.6443 127.178 80.7677C131.483 72.9972 137.929 58.1819 142.66 45.1862C143.206 43.6883 143.694 42.5048 143.745 42.5559C143.796 42.607 143.968 44.428 144.127 46.6026C144.753 55.1623 146.664 67.7448 148.766 77.153C149.901 82.2323 151.864 89.1353 152.2 89.2308C152.338 89.27 153.478 87.9084 154.733 86.2049C160.652 78.1745 169.175 68.9416 178.031 60.9667C182.797 56.6752 185.399 54.4874 185.399 54.7719C185.399 54.8595 184.702 56.3283 183.851 58.0363C178.632 68.5091 175.342 85.5258 175.342 102.05V105.532L174.747 105.369C166.396 103.088 152.035 100.219 141.6 98.747C131.968 97.3883 131.454 97.3282 123.34 96.6181C104.464 94.9662 84.8446 95.0525 67.6893 96.8629C53.847 98.3238 37.5628 101.542 26.0164 105.098C25.594 105.228 25.5532 104.975 25.5532 102.209C25.5532 85.1011 22.0366 67.5903 16.4878 57.069C15.6134 55.4113 15.0627 54.1513 15.2636 54.2691C16.0437 54.7267 20.8018 58.5907 23.7007 61.1213C27.2628 64.2306 35.3089 72.184 37.7772 75.0358C40.6819 78.3915 44.378 83.2649 46.4602 86.4844C47.5519 88.1723 48.5125 89.5617 48.5948 89.5722C48.9704 89.6199 51.773 78.7657 53.3053 71.3308C54.7052 64.5373 56.3272 52.4968 56.6663 46.3811C56.7695 44.5217 56.9312 42.9523 57.0256 42.8941C57.1768 42.8007 58.0355 44.9533 61.4018 53.8642C63.9805 60.6904 70.12 74.375 72.839 79.3572C76.1778 85.4753 79.9918 91.3739 80.3578 90.9857C80.9115 90.399 86.6537 74.6584 89.9899 64.5823C94.6431 50.5291 98.2563 37.0237 99.7963 27.9289C100.178 25.6728 100.557 23.6483 100.639 23.43C100.72 23.2116 101.008 24.343 101.278 25.9441C101.547 27.5452 102.076 30.397 102.452 32.2816ZM57.8712 27.0188C61.0525 28.6639 61.2179 33.5815 58.1596 35.5825C56.6663 36.5596 54.9889 36.6186 53.2261 35.7561C51.9879 35.1503 51.6772 34.8396 51.0714 33.6016C50.499 32.4314 50.3973 31.9436 50.54 31.051C50.8972 28.8174 52.1845 27.1858 54.0516 26.6002C54.963 26.3143 56.9245 26.5292 57.8712 27.0188ZM147.853 27.261C152.25 30.1575 149.72 36.9192 144.46 36.3264C142.305 36.0835 140.137 33.5945 140.15 31.3794C140.158 30.215 140.919 28.5231 141.802 27.7109C143.352 26.2844 146.064 26.0828 147.853 27.261ZM195.078 44.0633C196.709 45.0819 197.331 47.6863 196.343 49.3589C195.814 50.2547 194.086 51.2177 193.007 51.2177C190.58 51.2177 188.739 48.7232 189.4 46.3287C190.079 43.8712 192.942 42.729 195.078 44.0633ZM9.5954 44.0617C12.0405 45.5525 11.8256 49.5939 9.23601 50.8229C7.12546 51.8243 4.46392 50.5781 3.851 48.3013C3.43022 46.7394 4.28582 44.695 5.67653 43.9392C6.68483 43.3911 8.59371 43.4507 9.5954 44.0617ZM82.9969 99.4125C63.9779 100.246 43.0606 103.707 26.173 108.816L22.1618 110.03L22.4278 110.794C22.5741 111.213 22.8472 111.557 23.0346 111.557C23.222 111.557 24.9075 111.085 26.7799 110.509C38.4346 106.921 54.5102 103.761 68.5581 102.297C79.2259 101.185 86.2568 100.908 100.152 101.05C115.358 101.206 120.677 101.563 136.704 103.503C147.788 104.845 167.5 108.766 175.544 111.229C177.004 111.676 177.27 111.593 177.57 110.597C177.777 109.908 177.281 109.728 170.446 108.02C158.637 105.069 142.104 102.163 129.691 100.856C114.746 99.2818 97.881 98.7607 82.9969 99.4125ZM95.6244 106.197L91.4666 110.366L95.6263 114.678L99.7862 118.989L104.018 114.743L108.251 110.496L104.016 106.262L99.782 102.027L95.6244 106.197ZM66.3742 105.174C64.5016 105.82 63.555 106.632 62.6324 108.381C61.012 111.453 62.2246 115.142 65.4848 117.058C68.5438 118.857 72.9488 117.281 74.3668 113.881C74.5925 113.34 74.7762 112.208 74.7746 111.367C74.7696 108.408 72.9509 105.891 70.2341 105.084C68.5052 104.571 68.0905 104.581 66.3742 105.174ZM102.703 107.476C104.155 109.016 105.374 110.357 105.411 110.457C105.448 110.556 104.196 111.916 102.628 113.479L99.7775 116.321L96.8751 113.409L93.973 110.498L96.8751 107.587C98.4712 105.986 99.8413 104.676 99.9196 104.676C99.9979 104.676 101.25 105.936 102.703 107.476ZM127.971 105.07C123.497 106.508 121.933 112.403 125.14 115.748C126.245 116.902 127.708 117.638 129.246 117.816C131.795 118.11 134.767 116.266 135.825 113.735C136.337 112.509 136.314 110.021 135.779 108.737C134.54 105.767 130.989 104.1 127.971 105.07ZM69.9522 106.938C74.2678 108.741 74.0818 114.611 69.6709 115.817C67.6559 116.368 65.349 115.424 64.463 113.688C63.6354 112.065 63.5492 110.963 64.1441 109.617C65.2572 107.101 67.6742 105.986 69.9522 106.938ZM132.256 107.309C134.29 108.51 135.081 111.723 133.837 113.736C132.069 116.597 127.653 116.701 126.017 113.922C125.216 112.562 125.059 111.391 125.484 109.961C126.36 107.01 129.599 105.742 132.256 107.309ZM37.3474 111.434C36.0432 111.927 35.4245 112.482 34.7878 113.73C33.757 115.749 34.4517 118.376 36.3428 119.611C37.7597 120.535 39.02 120.695 40.6404 120.157C43.642 119.16 44.6559 115.603 42.7237 112.846C41.7376 111.44 39.1396 110.757 37.3474 111.434ZM157.255 111.414C155.897 111.898 155.119 112.673 154.464 114.197C153.965 115.356 153.949 115.576 154.275 116.833C154.702 118.479 155.695 119.592 157.275 120.195C160.097 121.273 163.433 119.016 163.433 116.029C163.433 113.754 162.089 111.87 160.066 111.308C158.802 110.957 158.504 110.968 157.255 111.414ZM21.9856 113.571C21.5441 114.245 21.5515 114.263 22.721 115.384C24.5457 117.132 25.3391 118.687 25.4913 120.811C25.662 123.197 25.0639 125.064 23.2524 127.802C21.7275 130.106 21.6497 130.418 22.2452 131.843C22.4635 132.366 22.6421 133.007 22.6421 133.269C22.6421 134.061 24.704 135.572 26.9797 136.448C37.8637 140.636 70.581 143.365 105.079 142.96C120.27 142.783 127.276 142.521 138.557 141.711C159.853 140.181 173.042 137.673 176.448 134.507C177.378 133.642 178.016 131.51 177.728 130.23C177.493 129.188 177.416 129.067 175.538 126.744C173.199 123.853 172.644 121.031 173.913 118.485C174.291 117.726 174.827 116.984 175.104 116.836C175.728 116.502 175.733 116.102 175.121 115.307L174.647 114.691L173.642 115.804C171.454 118.226 170.831 121.383 171.98 124.226C172.493 125.496 172.558 125.851 172.255 125.735C171.428 125.418 167.685 124.536 164.924 124.009C151.936 121.527 133.919 119.992 111.695 119.475C79.3175 118.722 45.4876 121.269 28.9936 125.7C27.6109 126.072 26.4623 126.376 26.4411 126.376C26.4199 126.377 26.6285 125.652 26.9042 124.766C28.0181 121.186 27.0318 117.309 24.262 114.381C22.843 112.88 22.5148 112.764 21.9856 113.571ZM40.9683 113.942C41.9546 114.928 42.0195 115.083 41.8797 116.125C41.4121 119.611 36.6114 119.535 36.2171 116.035C36.1025 115.019 36.1867 114.717 36.7813 114.01C37.1659 113.553 37.7441 113.128 38.0667 113.066C39.5363 112.781 39.9248 112.899 40.9683 113.942ZM160.853 113.954C162.591 115.832 161.22 118.702 158.586 118.702C156.722 118.702 155.281 116.424 156.119 114.802C156.528 114.013 157.239 113.307 157.876 113.059C158.697 112.74 160.127 113.17 160.853 113.954ZM118.708 121.48C128.073 121.898 139.827 122.597 140.939 122.802C141.302 122.87 143.148 123.053 145.041 123.21C151.743 123.767 161.833 125.223 167.932 126.512C171.111 127.184 174.094 128.241 174.879 128.973C175.829 129.858 175.807 130.199 174.835 129.696C166.826 125.555 141.176 122.877 105.873 122.498C67.6959 122.087 34.6951 124.999 25.4948 129.591C23.7412 130.466 23.6653 130.483 23.8725 129.943C24.628 127.974 36.035 125.423 52.1501 123.619C72.2663 121.367 97.7813 120.547 118.708 121.48ZM124.531 124.653C133.075 125.051 134.681 125.147 140.409 125.605C155.147 126.783 165.618 128.329 171.548 130.202C178.413 132.37 176.217 134.548 165.021 136.677C152.977 138.967 140.391 140.131 118.973 140.933C109.925 141.273 88.3909 141.268 80.0702 140.925C71.6457 140.578 57.0937 139.689 54.1744 139.344C52.9154 139.195 49.7418 138.834 47.1218 138.541C44.5018 138.249 40.2741 137.648 37.7269 137.208C29.412 135.769 25.2682 134.439 24.4732 132.953C23.5763 131.277 30.1504 129.209 41.9612 127.451C47.9735 126.556 48.4482 126.508 61.6773 125.461C64.2973 125.254 69.5373 124.954 73.3217 124.795C77.1061 124.635 80.8575 124.472 81.658 124.431C87.0846 124.157 117.226 124.312 124.531 124.653Z" fill="url(#paint0_linear_1952_1987)" fill-opacity="0.21"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M97.2721 2.86017C95.3791 3.79966 93.8714 5.49153 93.3368 7.27657C92.9139 8.68792 92.9661 10.9517 93.4546 12.3853C94.2006 14.5744 96.5734 16.7075 98.7276 17.1248C99.2093 17.218 99.2498 17.4048 99.1775 19.2039C99.0275 22.9422 97.5177 31.1825 95.3725 39.9703C92.7877 50.5598 85.5933 72.938 81.0504 84.5194L79.8735 87.5191L79.3421 86.7688C74.8656 80.4486 67.3637 64.4701 61.1012 47.916C59.3799 43.3665 57.5753 38.3287 57.5753 38.0736C57.5753 38.031 58.0331 37.7626 58.5929 37.4771C59.8055 36.8583 61.1933 35.3435 61.7459 34.0351C62.272 32.7892 62.2468 29.9215 61.6985 28.6501C61.1901 27.4711 59.7147 26.0105 58.3888 25.3735C57.1662 24.786 54.8349 24.6156 53.3802 25.0073C52.0495 25.3656 50.0824 27.0583 49.3837 28.4463C48.0862 31.0245 48.566 33.9478 50.6358 36.0726C51.8386 37.3074 53.7189 38.2501 54.9791 38.2501C55.3856 38.2501 55.4441 38.411 55.3393 39.2425C55.2708 39.7885 55.1453 41.7236 55.0612 43.543C54.7333 50.6109 53.2222 62.4038 51.5845 70.6692C51.0068 73.5853 50.2401 76.9497 48.5236 84.0999C48.3577 84.7912 48.1407 85.357 48.0415 85.357C47.9422 85.357 47.288 84.4934 46.5875 83.4383C44.2846 79.9693 38.4057 72.8199 34.6986 68.9805C29.4901 63.5857 19.3391 54.7801 14.2397 51.2331C13.3301 50.6003 12.5856 50.048 12.5856 50.0057C12.5856 49.9636 12.7145 49.5936 12.8722 49.1839C13.7141 46.9956 12.7746 44.0686 10.813 42.7695C8.74165 41.3973 6.55806 41.3668 4.48113 42.6808C1.39854 44.631 1.13786 49.3316 3.98253 51.6761C5.7681 53.148 8.48389 53.3926 10.3637 52.2506L11.1851 51.7515L13.2605 55.1019C19.2801 64.82 23.1124 81.4122 23.624 99.9712C23.7965 106.23 23.8934 105.719 22.4532 106.145C22.2118 106.216 22.2018 106.44 22.413 107.046C22.5675 107.489 22.794 107.852 22.9163 107.852C23.0386 107.852 25.0216 107.309 27.3232 106.646C49.3575 100.297 71.5147 97.266 95.8973 97.266C117.639 97.266 138.634 99.3795 158.934 103.612C167.852 105.471 169.769 105.909 173.589 106.957C175.463 107.471 177.09 107.794 177.205 107.673C177.51 107.355 177.573 106.47 177.33 105.909C177.021 105.193 177.36 94.3261 177.835 89.7236C179.33 75.2367 182.636 63.4277 187.447 55.3859C188.558 53.5302 189.593 52.0154 189.748 52.0201C189.903 52.0246 190.252 52.1964 190.523 52.4017C190.794 52.6068 191.643 52.8532 192.41 52.949C193.525 53.0885 194.061 53.0094 195.089 52.5545C197.504 51.4863 198.631 49.84 198.631 47.3804C198.631 43.0923 194.253 40.4133 190.42 42.3561C188.913 43.1196 187.934 44.4246 187.542 46.1911C187.3 47.2872 187.358 47.8803 187.896 49.7622C188.013 50.1713 187.762 50.5005 186.789 51.2132C184.235 53.0845 177.303 59.0692 173.012 63.1088C166.145 69.5738 159.787 76.5668 154.651 83.306C153.792 84.4339 152.989 85.357 152.868 85.357C152.618 85.357 152.464 84.8187 150.973 78.7408C148.253 67.6464 146.142 53.1391 145.583 41.6905L145.421 38.3824L146.951 37.9355C151.691 36.5498 153.466 30.8972 150.329 27.1766C149.012 25.6138 147.651 24.9445 145.512 24.8072C143.833 24.6995 143.423 24.7704 142.163 25.387C139.801 26.5425 138.482 28.6797 138.474 31.3648C138.466 34.159 139.735 36.2939 142.129 37.512C142.712 37.8082 143.221 38.0792 143.262 38.1144C143.521 38.3364 136.212 56.9854 132.718 65.0171C129.269 72.9472 121.794 87.2095 121.088 87.2095C120.397 87.2095 111.364 60.0341 108.289 48.7036C104.896 36.2002 102.805 26.1646 102.169 19.328L101.996 17.4755L103.733 16.7202C105.576 15.9186 106.667 14.8938 107.655 13.0352C108.513 11.4212 108.508 7.90695 107.645 6.28335C106.246 3.64907 103.476 1.98763 100.504 2.00007C99.3411 2.00483 98.5956 2.20305 97.2721 2.86017ZM102.586 4.14819C105.919 5.14723 107.477 8.99676 105.86 12.2413C104.815 14.3386 102.982 15.4906 100.692 15.4906C96.7799 15.4906 93.9336 11.8195 95.0205 8.17636C96.0203 4.82516 99.1977 3.13328 102.586 4.14819ZM102.452 32.2816C103.666 38.3592 107.034 51.4723 108.913 57.4369C112.746 69.5976 116.201 79.9701 118.302 85.6216C118.979 87.441 119.716 89.4359 119.939 90.0544C120.163 90.6729 120.424 91.1776 120.52 91.1757C120.857 91.1688 125.031 84.6443 127.178 80.7677C131.483 72.9972 137.929 58.1819 142.66 45.1862C143.206 43.6883 143.694 42.5048 143.745 42.5559C143.796 42.607 143.968 44.428 144.127 46.6026C144.753 55.1623 146.664 67.7448 148.766 77.153C149.901 82.2323 151.864 89.1353 152.2 89.2308C152.338 89.27 153.478 87.9084 154.733 86.2049C160.652 78.1745 169.175 68.9416 178.031 60.9667C182.797 56.6752 185.399 54.4874 185.399 54.7719C185.399 54.8595 184.702 56.3283 183.851 58.0363C178.632 68.5091 175.342 85.5258 175.342 102.05V105.532L174.747 105.369C166.396 103.088 152.035 100.219 141.6 98.747C131.968 97.3883 131.454 97.3282 123.34 96.6181C104.464 94.9662 84.8446 95.0525 67.6893 96.8629C53.847 98.3238 37.5628 101.542 26.0164 105.098C25.594 105.228 25.5532 104.975 25.5532 102.209C25.5532 85.1011 22.0366 67.5903 16.4878 57.069C15.6134 55.4113 15.0627 54.1513 15.2636 54.2691C16.0437 54.7267 20.8018 58.5907 23.7007 61.1213C27.2628 64.2306 35.3089 72.184 37.7772 75.0358C40.6819 78.3915 44.378 83.2649 46.4602 86.4844C47.5519 88.1723 48.5125 89.5617 48.5948 89.5722C48.9704 89.6199 51.773 78.7657 53.3053 71.3308C54.7052 64.5373 56.3272 52.4968 56.6663 46.3811C56.7695 44.5217 56.9312 42.9523 57.0256 42.8941C57.1768 42.8007 58.0355 44.9533 61.4018 53.8642C63.9805 60.6904 70.12 74.375 72.839 79.3572C76.1778 85.4753 79.9918 91.3739 80.3578 90.9857C80.9115 90.399 86.6537 74.6584 89.9899 64.5823C94.6431 50.5291 98.2563 37.0237 99.7963 27.9289C100.178 25.6728 100.557 23.6483 100.639 23.43C100.72 23.2116 101.008 24.343 101.278 25.9441C101.547 27.5452 102.076 30.397 102.452 32.2816ZM57.8712 27.0188C61.0525 28.6639 61.2179 33.5815 58.1596 35.5825C56.6663 36.5596 54.9889 36.6186 53.2261 35.7561C51.9879 35.1503 51.6772 34.8396 51.0714 33.6016C50.499 32.4314 50.3973 31.9436 50.54 31.051C50.8972 28.8174 52.1845 27.1858 54.0516 26.6002C54.963 26.3143 56.9245 26.5292 57.8712 27.0188ZM147.853 27.261C152.25 30.1575 149.72 36.9192 144.46 36.3264C142.305 36.0835 140.137 33.5945 140.15 31.3794C140.158 30.215 140.919 28.5231 141.802 27.7109C143.352 26.2844 146.064 26.0828 147.853 27.261ZM195.078 44.0633C196.709 45.0819 197.331 47.6863 196.343 49.3589C195.814 50.2547 194.086 51.2177 193.007 51.2177C190.58 51.2177 188.739 48.7232 189.4 46.3287C190.079 43.8712 192.942 42.729 195.078 44.0633ZM9.5954 44.0617C12.0405 45.5525 11.8256 49.5939 9.23601 50.8229C7.12546 51.8243 4.46392 50.5781 3.851 48.3013C3.43022 46.7394 4.28582 44.695 5.67653 43.9392C6.68483 43.3911 8.59371 43.4507 9.5954 44.0617ZM82.9969 99.4125C63.9779 100.246 43.0606 103.707 26.173 108.816L22.1618 110.03L22.4278 110.794C22.5741 111.213 22.8472 111.557 23.0346 111.557C23.222 111.557 24.9075 111.085 26.7799 110.509C38.4346 106.921 54.5102 103.761 68.5581 102.297C79.2259 101.185 86.2568 100.908 100.152 101.05C115.358 101.206 120.677 101.563 136.704 103.503C147.788 104.845 167.5 108.766 175.544 111.229C177.004 111.676 177.27 111.593 177.57 110.597C177.777 109.908 177.281 109.728 170.446 108.02C158.637 105.069 142.104 102.163 129.691 100.856C114.746 99.2818 97.881 98.7607 82.9969 99.4125ZM95.6244 106.197L91.4666 110.366L95.6263 114.678L99.7862 118.989L104.018 114.743L108.251 110.496L104.016 106.262L99.782 102.027L95.6244 106.197ZM66.3742 105.174C64.5016 105.82 63.555 106.632 62.6324 108.381C61.012 111.453 62.2246 115.142 65.4848 117.058C68.5438 118.857 72.9488 117.281 74.3668 113.881C74.5925 113.34 74.7762 112.208 74.7746 111.367C74.7696 108.408 72.9509 105.891 70.2341 105.084C68.5052 104.571 68.0905 104.581 66.3742 105.174ZM102.703 107.476C104.155 109.016 105.374 110.357 105.411 110.457C105.448 110.556 104.196 111.916 102.628 113.479L99.7775 116.321L96.8751 113.409L93.973 110.498L96.8751 107.587C98.4712 105.986 99.8413 104.676 99.9196 104.676C99.9979 104.676 101.25 105.936 102.703 107.476ZM127.971 105.07C123.497 106.508 121.933 112.403 125.14 115.748C126.245 116.902 127.708 117.638 129.246 117.816C131.795 118.11 134.767 116.266 135.825 113.735C136.337 112.509 136.314 110.021 135.779 108.737C134.54 105.767 130.989 104.1 127.971 105.07ZM69.9522 106.938C74.2678 108.741 74.0818 114.611 69.6709 115.817C67.6559 116.368 65.349 115.424 64.463 113.688C63.6354 112.065 63.5492 110.963 64.1441 109.617C65.2572 107.101 67.6742 105.986 69.9522 106.938ZM132.256 107.309C134.29 108.51 135.081 111.723 133.837 113.736C132.069 116.597 127.653 116.701 126.017 113.922C125.216 112.562 125.059 111.391 125.484 109.961C126.36 107.01 129.599 105.742 132.256 107.309ZM37.3474 111.434C36.0432 111.927 35.4245 112.482 34.7878 113.73C33.757 115.749 34.4517 118.376 36.3428 119.611C37.7597 120.535 39.02 120.695 40.6404 120.157C43.642 119.16 44.6559 115.603 42.7237 112.846C41.7376 111.44 39.1396 110.757 37.3474 111.434ZM157.255 111.414C155.897 111.898 155.119 112.673 154.464 114.197C153.965 115.356 153.949 115.576 154.275 116.833C154.702 118.479 155.695 119.592 157.275 120.195C160.097 121.273 163.433 119.016 163.433 116.029C163.433 113.754 162.089 111.87 160.066 111.308C158.802 110.957 158.504 110.968 157.255 111.414ZM21.9856 113.571C21.5441 114.245 21.5515 114.263 22.721 115.384C24.5457 117.132 25.3391 118.687 25.4913 120.811C25.662 123.197 25.0639 125.064 23.2524 127.802C21.7275 130.106 21.6497 130.418 22.2452 131.843C22.4635 132.366 22.6421 133.007 22.6421 133.269C22.6421 134.061 24.704 135.572 26.9797 136.448C37.8637 140.636 70.581 143.365 105.079 142.96C120.27 142.783 127.276 142.521 138.557 141.711C159.853 140.181 173.042 137.673 176.448 134.507C177.378 133.642 178.016 131.51 177.728 130.23C177.493 129.188 177.416 129.067 175.538 126.744C173.199 123.853 172.644 121.031 173.913 118.485C174.291 117.726 174.827 116.984 175.104 116.836C175.728 116.502 175.733 116.102 175.121 115.307L174.647 114.691L173.642 115.804C171.454 118.226 170.831 121.383 171.98 124.226C172.493 125.496 172.558 125.851 172.255 125.735C171.428 125.418 167.685 124.536 164.924 124.009C151.936 121.527 133.919 119.992 111.695 119.475C79.3175 118.722 45.4876 121.269 28.9936 125.7C27.6109 126.072 26.4623 126.376 26.4411 126.376C26.4199 126.377 26.6285 125.652 26.9042 124.766C28.0181 121.186 27.0318 117.309 24.262 114.381C22.843 112.88 22.5148 112.764 21.9856 113.571ZM40.9683 113.942C41.9546 114.928 42.0195 115.083 41.8797 116.125C41.4121 119.611 36.6114 119.535 36.2171 116.035C36.1025 115.019 36.1867 114.717 36.7813 114.01C37.1659 113.553 37.7441 113.128 38.0667 113.066C39.5363 112.781 39.9248 112.899 40.9683 113.942ZM160.853 113.954C162.591 115.832 161.22 118.702 158.586 118.702C156.722 118.702 155.281 116.424 156.119 114.802C156.528 114.013 157.239 113.307 157.876 113.059C158.697 112.74 160.127 113.17 160.853 113.954ZM118.708 121.48C128.073 121.898 139.827 122.597 140.939 122.802C141.302 122.87 143.148 123.053 145.041 123.21C151.743 123.767 161.833 125.223 167.932 126.512C171.111 127.184 174.094 128.241 174.879 128.973C175.829 129.858 175.807 130.199 174.835 129.696C166.826 125.555 141.176 122.877 105.873 122.498C67.6959 122.087 34.6951 124.999 25.4948 129.591C23.7412 130.466 23.6653 130.483 23.8725 129.943C24.628 127.974 36.035 125.423 52.1501 123.619C72.2663 121.367 97.7813 120.547 118.708 121.48ZM124.531 124.653C133.075 125.051 134.681 125.147 140.409 125.605C155.147 126.783 165.618 128.329 171.548 130.202C178.413 132.37 176.217 134.548 165.021 136.677C152.977 138.967 140.391 140.131 118.973 140.933C109.925 141.273 88.3909 141.268 80.0702 140.925C71.6457 140.578 57.0937 139.689 54.1744 139.344C52.9154 139.195 49.7418 138.834 47.1218 138.541C44.5018 138.249 40.2741 137.648 37.7269 137.208C29.412 135.769 25.2682 134.439 24.4732 132.953C23.5763 131.277 30.1504 129.209 41.9612 127.451C47.9735 126.556 48.4482 126.508 61.6773 125.461C64.2973 125.254 69.5373 124.954 73.3217 124.795C77.1061 124.635 80.8575 124.472 81.658 124.431C87.0846 124.157 117.226 124.312 124.531 124.653Z" stroke="url(#paint1_linear_1952_1987)" strokeWidth="2.98819" mask="url(#path-1-outside-1_1952_1987)"/>
<defs>
<linearGradient id="paint0_linear_1952_1987" x1="100.316" y1="2" x2="100.316" y2="143" gradientUnits="userSpaceOnUse">
<stop stop-color="#9CFF00"/>
<stop offset="1" stop-color="#2BC20E"/>
</linearGradient>
<linearGradient id="paint1_linear_1952_1987" x1="100.316" y1="2" x2="100.316" y2="143" gradientUnits="userSpaceOnUse">
<stop stop-color="#9CFF00"/>
<stop offset="1" stop-color="#2BC20E"/>
</linearGradient>
</defs>
</svg>

        </div>
        <div className="images w-100 row">
            <div className="img1 col-4">
                <img src="./img/carou.png"/>
            

                <p>The “OG NFT” Character draws its ideology from the traditional “OG” keyword in our society, commonly referred to as Original Gangster. </p>
            </div>
            <div className="img2 col-5 position-relative">
            <img src="./img/carou.png" className="abso"/>
            <img src="./img/carou.png"/>
<p className='position-absolute col-12'ref={ref} style={{
    right: '-47%',
    marginTop: '38.59px'
}}>The use of the word OG has transcended across continents, races, and societies, with each sphere attributing to different definitions and narratives as to what the “OG” phenomenon connotes most of which revolves around being Accomplished, Experienced, Kingly or Queenly, Bosslike, Tough, disciplined, Ruthless, and More!!
The OG brand recognizes notable personalities and individuals that have gone on to influence and shape modern societies. 
</p>

            </div>
            <div className="img3 col-3">
            <img src="./img/carou.png"/>
<p>The OG NFT collection is targeted to reach all global lovers of art worldwide, consisting of a collection of artistic masterpieces selling every art piece to a global ecosystem of art loving nft collectors.
</p>
            </div>
        </div>
    </div>
)
}
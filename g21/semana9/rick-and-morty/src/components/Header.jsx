const Header = () => {
    return (
      <header>
        <nav>
          <div className="container">
            <a href="#">
              <svg className="w-12 h-12 object-cover" width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_1907_6)">
                  <path
                    d="M42.4036 0.308193C31.4926 1.74099 22.0049 6.27817 14.4148 13.7177C7.86459 20.1285 3.46739 27.8619 1.25966 36.8628C0.31089 40.7388 -0.0175303 43.7146 0.000715313 48.068C0.018961 55.9667 1.56984 62.4695 5.12774 69.6334C8.68564 76.7606 14.3053 83.1347 21.1657 87.7638C30.3251 93.9358 41.9474 96.9116 52.4387 95.7544C64.4809 94.4133 74.0963 89.8762 82.1973 81.6653C93.1448 70.5519 97.7426 56.1873 95.4071 40.1693C94.057 30.7644 88.6744 20.404 81.6864 13.6993C75.0816 7.38032 67.1447 3.08194 58.4598 1.13481C53.4787 0.0326564 47.0746 -0.316358 42.4036 0.308193ZM53.9167 6.37002C67.0717 8.29878 78.6941 16.8037 84.7152 28.9091C86.5398 32.5828 87.8534 36.7342 88.5103 40.8121C88.9665 43.641 88.9665 51.2275 88.5103 53.8543C87.2878 60.7978 84.8064 66.676 80.6465 72.3153C79.953 73.2705 78.1469 75.2911 76.6506 76.7973L73.9321 79.516L74.0415 80.9305L74.151 82.3265L73.6218 80.3059C73.0015 77.8996 72.4541 76.5587 71.6513 75.4932C71.323 75.0522 71.0492 74.5932 71.0492 74.4645C71.0675 74.3543 71.5236 73.9135 72.0893 73.5093C73.1109 72.7745 74.516 71.2865 75.2822 70.1109C75.5558 69.7252 75.9391 69.413 76.3223 69.3028C77.2345 69.0455 78.2746 67.9619 78.5117 67.0249C78.7672 66.1248 78.6758 65.7024 78.0555 64.7656L77.5995 64.1042L78.0008 62.2858C78.4022 60.4856 78.4022 60.4489 78.092 57.62C77.9278 56.0586 77.8001 54.5524 77.8001 54.2951C77.8001 53.6523 76.3953 50.8234 75.2822 49.262C73.4212 46.6168 72.7279 45.9923 70.0274 44.6698C66.8891 43.1084 65.7398 42.8511 62.5649 42.9798C59.7917 43.09 57.4562 43.6226 55.3215 44.6513C53.1684 45.6801 50.7235 48.1231 48.37 51.6317C47.567 52.8073 47.5123 52.9542 47.5123 54.0931C47.5123 54.9748 47.3299 55.8382 46.8555 57.326C46.0527 59.8426 46.0892 60.4305 47.2387 62.396C47.6949 63.1674 48.0597 63.9022 48.0597 63.994C48.0597 64.1042 47.8226 64.4532 47.5123 64.7839C46.5454 65.831 46.5636 67.4475 47.567 68.5313C48.1327 69.1375 49.5193 69.7069 49.866 69.4681C49.9572 69.413 49.8843 68.9537 49.6836 68.4578C49.1363 67.0067 49.2822 66.9516 49.9572 68.366C51.2892 71.1947 53.0955 73.0134 55.9966 74.4461C58.186 75.5115 60.0653 75.9892 62.7475 76.1176C63.9517 76.1727 64.7727 76.2829 64.5721 76.3565C63.4773 76.7422 58.4415 76.0259 56.1243 75.1442L54.9201 74.6849L54.61 75.1073C53.9349 75.9892 52.6028 78.9099 52.2745 80.2139C52.0921 80.9672 51.8365 82.4918 51.7089 83.5939C51.3439 87.029 51.198 87.3412 50.8149 85.3206C50.1763 81.9775 45.8886 66.1432 45.3594 65.188C45.2865 65.0411 44.137 64.6554 42.8051 64.3248C41.4732 63.9757 40.0134 63.5716 39.5572 63.3878C39.1194 63.2225 38.6997 63.1308 38.645 63.1859C38.5903 63.241 38.9004 63.7736 39.3383 64.3615C39.7763 64.9492 40.3966 65.8493 40.7249 66.3454C41.5826 67.723 43.5713 72.0213 44.1552 73.7297C44.7938 75.5484 44.7391 75.6768 42.8233 77.3117C42.0935 77.9363 41.4914 78.5793 41.4914 78.7446C41.4914 78.8915 42.3306 79.81 43.3524 80.7652C45.1221 82.4367 45.1953 82.5469 45.0492 83.0613L44.885 83.6123L44.812 83.0429C44.7756 82.602 44.3376 82.1061 42.8598 80.6916C41.8015 79.718 40.944 78.7997 40.944 78.6526C40.944 78.5242 41.6008 77.8445 42.3853 77.1464C44.3923 75.4197 44.4106 75.3095 43.5896 73.1969C42.2029 69.6518 39.2289 64.1777 38.1341 63.149C37.7875 62.8184 37.6596 62.5062 37.6596 62.0102C37.6596 61.257 37.824 61.0733 38.7544 60.7611C39.7033 60.4489 40.6337 59.7324 41.2723 58.8323C41.7832 58.1159 42.0021 57.9873 43.4072 57.5464C44.2646 57.2709 44.958 56.977 44.958 56.9036C44.958 56.8116 44.6296 56.3341 44.2282 55.8564C43.4436 54.9012 43.2975 54.2218 43.8267 54.0564C43.991 54.0013 44.6296 53.9094 45.2317 53.8358C45.8339 53.7807 46.3811 53.689 46.4542 53.6339C46.5272 53.5972 46.3446 52.8991 46.0527 52.0909C45.7425 51.2826 45.5053 50.5112 45.5053 50.401C45.5053 50.2723 45.9798 50.0335 46.5636 49.8315C47.8591 49.4089 50.0667 48.3068 50.0667 48.0864C50.0667 47.9946 49.3916 47.5536 48.5889 47.1128C47.0014 46.2678 45.3959 44.9819 45.633 44.7615C45.706 44.688 46.3628 44.4309 47.0561 44.2105C48.8077 43.6226 50.6688 42.7594 52.1286 41.8224C52.8036 41.4 53.351 41.0143 53.3146 40.9958C53.2414 40.9407 48.297 38.8099 47.8226 38.6446C47.6035 38.5528 47.5488 38.4426 47.64 38.2773C47.7132 38.1302 48.9174 36.9546 50.304 35.6688C51.6724 34.3645 52.8036 33.244 52.8036 33.1707C52.8036 33.0236 51.6724 32.8216 48.3335 32.3439C47.1293 32.1604 46.071 31.9766 45.998 31.9031C45.9068 31.8298 46.746 30.2131 47.8591 28.3211C49.6654 25.2167 50.012 24.5555 49.8296 24.5555C49.7931 24.5555 48.2968 25.0883 46.5089 25.7495C43.8996 26.7047 43.1881 26.8884 43.0057 26.7047C42.6042 26.3005 42.2212 23.2696 42.2212 20.5509V17.9242L40.7432 18.7141C39.01 19.651 36.6927 21.4694 35.6162 22.737C35.2147 23.233 34.7952 23.6371 34.7222 23.6371C34.6308 23.6371 33.9375 22.7921 33.153 21.745C31.8029 19.9448 29.5221 17.3915 29.2668 17.3915C29.1938 17.3915 29.0477 18.1998 28.9382 19.1733C28.6099 21.9287 27.6428 25.2902 27.1684 25.2902C27.0407 25.2902 26.165 24.9229 25.2344 24.4819C23.7383 23.784 21.4575 23.0859 20.6183 23.0859C20.3994 23.0859 20.5089 23.4165 21.038 24.5003C21.8408 26.1352 22.5706 28.6886 22.4794 29.5703L22.4246 30.158L20.7825 30.2867C16.0021 30.6541 13.7579 30.8746 13.7579 30.9663C13.7579 31.0399 14.5607 31.9031 15.546 32.9134C17.3888 34.7871 18.739 36.7893 18.6477 37.4874C18.6113 37.7445 17.6807 38.516 15.7649 39.8571C14.2141 40.9407 12.9186 41.9144 12.8821 42.0061C12.8456 42.0981 13.0463 42.2266 13.3383 42.3001C15.2906 42.7225 16.1299 42.9982 16.8232 43.4022C17.772 43.9716 18.7572 44.8166 19.2499 45.5148L19.6147 46.0291L17.5713 48.068C15.8562 49.7946 15.5642 50.1437 15.7832 50.3459C15.9292 50.4743 17.0239 50.8969 18.2281 51.2642C19.4323 51.6317 20.4906 52.0174 20.5818 52.1092C20.673 52.2012 20.5271 53.1379 20.1804 54.4237C19.8703 55.6178 19.6694 56.6648 19.7242 56.7565C19.8156 56.9219 22.8259 56.775 23.3186 56.5912C23.7748 56.4259 23.9572 56.8668 24.0851 58.3181C24.158 59.1631 24.2675 59.8794 24.3404 59.9161C24.4863 60.0079 26.5298 59.1262 26.5298 58.9793C26.5298 58.9242 26.2927 58.5385 26.0008 58.1159C24.7784 56.3157 23.9389 54.0564 23.2821 50.7316C22.8444 48.619 22.6435 46.5984 22.8626 46.5984C22.9356 46.5984 23.0632 47.1863 23.1362 47.9027C23.5012 51.999 25.3805 57.1976 27.0954 58.9242C27.5334 59.3651 28.4822 59.9896 29.3944 60.412L30.9272 61.1284L30.8723 61.8081L30.8175 62.4877L26.7671 63.8471L22.7165 65.2065L22.3517 66.327C22.1508 66.9515 21.3116 69.7987 20.5089 72.6827C19.0127 77.9178 18.5565 79.2405 18.7755 77.6792C18.8667 76.9075 18.8302 76.8342 17.8997 75.8054C12.0793 69.4865 8.48494 62.0836 7.08002 53.487C6.55091 50.3459 6.60564 43.6226 7.17126 40.5366C8.75862 31.8664 12.2618 24.7943 17.9909 18.7508C27.3327 8.92333 40.4148 4.40452 53.9167 6.37002ZM29.2303 65.7391C27.9166 68.4762 25.5811 75.034 25.7818 75.383C25.873 75.5484 26.6577 76.3014 27.5334 77.0728C28.4273 77.8445 29.1756 78.5608 29.212 78.6895C29.2668 78.8179 28.993 79.2221 28.6099 79.6078C28.2084 80.0304 28.0625 80.1222 28.2449 79.8467C28.9565 78.7261 29.0112 78.873 27.1684 77.1648C25.9277 76.0074 25.4352 75.4381 25.4352 75.1258C25.4352 74.1706 29.0477 64.9676 29.4309 64.9676C29.5221 64.9676 29.4309 65.3167 29.2303 65.7391Z"
                    fill="black" />
                </g>
                <defs>
                  <clipPath id="clip0_1907_6">
                    <rect width="96" height="96" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </a>
          </div>
        </nav>
      </header>
    );
  };
  
  export default Header;
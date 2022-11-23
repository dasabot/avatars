import React from 'react';
import styles from './styles.module.css';
import { forwardRef } from 'react';

// export default function Avatar({ onClickFunction, avatarName, avatarUrl }) {

//     return forwardRef((props, ref) => {
//         <div ref={ref} onClick={onClickFunction} className={styles.avatar}>
//         <div className={styles.avatarWrap}>
//             <svg className={styles.refreshIcon} viewBox="0 0 88 88" fill="none">
//                 <path d="M86.2 47.125C85.7736 46.6262 85.2448 46.2252 84.6494 45.9494C84.054 45.6735 83.4062 45.5293 82.75 45.5266H82.5687C81.435 45.5405 80.3438 45.9607 79.4934 46.7107C78.643 47.4607 78.0899 48.4909 77.9344 49.614C76.9317 56.1533 74.0338 62.2551 69.5993 67.1645C65.1648 72.0738 59.3883 75.5754 52.9844 77.2359C46.142 79.0628 38.9029 78.7381 32.2516 76.3059C25.6002 73.8737 19.8593 69.452 15.8094 63.6422C15.6463 63.4077 15.5506 63.1331 15.5327 62.8481C15.5148 62.5631 15.5753 62.2786 15.7077 62.0256C15.8401 61.7726 16.0393 61.5607 16.2836 61.4129C16.528 61.2652 16.8082 61.1872 17.0938 61.1875H25.25C26.0788 61.1875 26.8737 60.8583 27.4597 60.2722C28.0458 59.6861 28.375 58.8913 28.375 58.0625C28.375 57.2337 28.0458 56.4388 27.4597 55.8528C26.8737 55.2667 26.0788 54.9375 25.25 54.9375H0.25V79.9375C0.25 80.7663 0.57924 81.5611 1.16529 82.1472C1.75134 82.7333 2.5462 83.0625 3.375 83.0625C4.2038 83.0625 4.99866 82.7333 5.58471 82.1472C6.17076 81.5611 6.5 80.7663 6.5 79.9375V71.5937C6.5004 71.2675 6.6029 70.9496 6.79313 70.6845C6.98336 70.4195 7.25177 70.2207 7.56072 70.1159C7.86968 70.0111 8.20368 70.0057 8.51587 70.1004C8.82807 70.195 9.10281 70.385 9.30156 70.6437C14.5149 77.4351 21.6063 82.5476 29.6971 85.3478C37.7879 88.1479 46.5224 88.5125 54.8185 86.3965C63.1145 84.2805 70.6073 79.7768 76.3685 73.4436C82.1298 67.1104 85.9061 59.2259 87.2297 50.7672C87.3308 50.1217 87.2911 49.4621 87.1133 48.8334C86.9356 48.2048 86.624 47.622 86.2 47.125Z" fill="white" />
//                 <path d="M62.75 33.0625H87.75V8.06247C87.75 7.23367 87.4207 6.43881 86.8347 5.85276C86.2486 5.26671 85.4538 4.93747 84.625 4.93747C83.7962 4.93747 83.0013 5.26671 82.4153 5.85276C81.8292 6.43881 81.5 7.23367 81.5 8.06247V16.4062C81.4996 16.7325 81.3971 17.0504 81.2069 17.3154C81.0166 17.5804 80.7482 17.7793 80.4393 17.8841C80.1303 17.9888 79.7963 17.9943 79.4841 17.8996C79.1719 17.8049 78.8972 17.6149 78.6984 17.3562C73.4967 10.5791 66.4245 5.47327 58.3547 2.66879C50.2848 -0.1357 41.5704 -0.516108 33.2869 1.57451C25.0034 3.66512 17.5132 8.13527 11.7407 14.4333C5.96815 20.7314 2.1659 28.5817 0.803119 37.0156C0.698426 37.6857 0.740107 38.3706 0.925295 39.023C1.11048 39.6755 1.43478 40.2801 1.8759 40.7953C2.31701 41.3105 2.86448 41.7241 3.48064 42.0076C4.09681 42.291 4.76706 42.4377 5.44531 42.4375C6.57285 42.426 7.65926 42.0124 8.5089 41.271C9.35854 40.5297 9.91557 39.5093 10.0797 38.3937C11.1927 31.6478 14.2928 25.3873 18.9834 20.4129C23.6739 15.4385 29.7417 11.9763 36.4107 10.4692C43.0796 8.96219 50.0465 9.47873 56.4203 11.9528C62.7941 14.4269 68.2849 18.746 72.1906 24.3578C72.3537 24.5922 72.4494 24.8669 72.4673 25.1519C72.4852 25.4369 72.4247 25.7213 72.2923 25.9744C72.1599 26.2274 71.9607 26.4393 71.7164 26.587C71.472 26.7348 71.1918 26.8128 70.9062 26.8125H62.75C61.9212 26.8125 61.1263 27.1417 60.5403 27.7278C59.9542 28.3138 59.625 29.1087 59.625 29.9375C59.625 30.7663 59.9542 31.5611 60.5403 32.1472C61.1263 32.7332 61.9212 33.0625 62.75 33.0625Z" fill="white" />
//             </svg>
//         </div>
//         <img className={styles.image} alt={avatarName} src={avatarUrl}></img>
//     </div>
//     }) 
// }

const Avatar = forwardRef(({ onClickFunction, avatarName, avatarUrl, avatarId}, ref) => {
    return (
        <div ref={ref} onClick={onClickFunction} className={styles.avatar} id={avatarId}>
            <div className={styles.avatarWrap}>
                <svg className={styles.refreshIcon} viewBox="0 0 88 88" fill="none">
                    <path d="M86.2 47.125C85.7736 46.6262 85.2448 46.2252 84.6494 45.9494C84.054 45.6735 83.4062 45.5293 82.75 45.5266H82.5687C81.435 45.5405 80.3438 45.9607 79.4934 46.7107C78.643 47.4607 78.0899 48.4909 77.9344 49.614C76.9317 56.1533 74.0338 62.2551 69.5993 67.1645C65.1648 72.0738 59.3883 75.5754 52.9844 77.2359C46.142 79.0628 38.9029 78.7381 32.2516 76.3059C25.6002 73.8737 19.8593 69.452 15.8094 63.6422C15.6463 63.4077 15.5506 63.1331 15.5327 62.8481C15.5148 62.5631 15.5753 62.2786 15.7077 62.0256C15.8401 61.7726 16.0393 61.5607 16.2836 61.4129C16.528 61.2652 16.8082 61.1872 17.0938 61.1875H25.25C26.0788 61.1875 26.8737 60.8583 27.4597 60.2722C28.0458 59.6861 28.375 58.8913 28.375 58.0625C28.375 57.2337 28.0458 56.4388 27.4597 55.8528C26.8737 55.2667 26.0788 54.9375 25.25 54.9375H0.25V79.9375C0.25 80.7663 0.57924 81.5611 1.16529 82.1472C1.75134 82.7333 2.5462 83.0625 3.375 83.0625C4.2038 83.0625 4.99866 82.7333 5.58471 82.1472C6.17076 81.5611 6.5 80.7663 6.5 79.9375V71.5937C6.5004 71.2675 6.6029 70.9496 6.79313 70.6845C6.98336 70.4195 7.25177 70.2207 7.56072 70.1159C7.86968 70.0111 8.20368 70.0057 8.51587 70.1004C8.82807 70.195 9.10281 70.385 9.30156 70.6437C14.5149 77.4351 21.6063 82.5476 29.6971 85.3478C37.7879 88.1479 46.5224 88.5125 54.8185 86.3965C63.1145 84.2805 70.6073 79.7768 76.3685 73.4436C82.1298 67.1104 85.9061 59.2259 87.2297 50.7672C87.3308 50.1217 87.2911 49.4621 87.1133 48.8334C86.9356 48.2048 86.624 47.622 86.2 47.125Z" fill="white" />
                    <path d="M62.75 33.0625H87.75V8.06247C87.75 7.23367 87.4207 6.43881 86.8347 5.85276C86.2486 5.26671 85.4538 4.93747 84.625 4.93747C83.7962 4.93747 83.0013 5.26671 82.4153 5.85276C81.8292 6.43881 81.5 7.23367 81.5 8.06247V16.4062C81.4996 16.7325 81.3971 17.0504 81.2069 17.3154C81.0166 17.5804 80.7482 17.7793 80.4393 17.8841C80.1303 17.9888 79.7963 17.9943 79.4841 17.8996C79.1719 17.8049 78.8972 17.6149 78.6984 17.3562C73.4967 10.5791 66.4245 5.47327 58.3547 2.66879C50.2848 -0.1357 41.5704 -0.516108 33.2869 1.57451C25.0034 3.66512 17.5132 8.13527 11.7407 14.4333C5.96815 20.7314 2.1659 28.5817 0.803119 37.0156C0.698426 37.6857 0.740107 38.3706 0.925295 39.023C1.11048 39.6755 1.43478 40.2801 1.8759 40.7953C2.31701 41.3105 2.86448 41.7241 3.48064 42.0076C4.09681 42.291 4.76706 42.4377 5.44531 42.4375C6.57285 42.426 7.65926 42.0124 8.5089 41.271C9.35854 40.5297 9.91557 39.5093 10.0797 38.3937C11.1927 31.6478 14.2928 25.3873 18.9834 20.4129C23.6739 15.4385 29.7417 11.9763 36.4107 10.4692C43.0796 8.96219 50.0465 9.47873 56.4203 11.9528C62.7941 14.4269 68.2849 18.746 72.1906 24.3578C72.3537 24.5922 72.4494 24.8669 72.4673 25.1519C72.4852 25.4369 72.4247 25.7213 72.2923 25.9744C72.1599 26.2274 71.9607 26.4393 71.7164 26.587C71.472 26.7348 71.1918 26.8128 70.9062 26.8125H62.75C61.9212 26.8125 61.1263 27.1417 60.5403 27.7278C59.9542 28.3138 59.625 29.1087 59.625 29.9375C59.625 30.7663 59.9542 31.5611 60.5403 32.1472C61.1263 32.7332 61.9212 33.0625 62.75 33.0625Z" fill="white" />
                </svg>
            </div>
            <img className={styles.image} alt={avatarName} src={avatarUrl}></img>
        </div>
    )
})

export default Avatar;

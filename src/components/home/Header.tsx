import React from 'react';
import IconButton from '../IconButton';
import { useNavigate } from 'react-router';

export default function Header() {
  const navigation = useNavigate();
  return (
    <div className="w-full max-w-md h-24 ">
      <div className="w-full max-w-md h-24 left-0 top-0 absolute bg-[#F23232] rounded-b-xl">
        <div className="w-full h-full flex flex-col justify-end pb-4  gap-y-6 text-white px-6">
          <div className="w-full flex justify-between ">
            <h1 className="text-2xl font-bold ">Eat-da</h1>
            <div className="flex gap-4 text-bold items-baseline">
              <IconButton onClick={() => navigation('/notice')}>
                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="24" viewBox="0 0 19 24" fill="none">
                  <path
                    d="M0 20.4V18H2.375V9.6C2.375 7.94 2.86979 6.46504 3.85938 5.17512C4.84896 3.88504 6.13542 3.04 7.71875 2.64V1.8C7.71875 1.3 7.89197 0.875041 8.2384 0.525121C8.58467 0.175041 9.00521 0 9.5 0C9.99479 0 10.4153 0.175041 10.7616 0.525121C11.108 0.875041 11.2812 1.3 11.2812 1.8V2.64C12.8646 3.04 14.151 3.88504 15.1406 5.17512C16.1302 6.46504 16.625 7.94 16.625 9.6V18H19V20.4H0ZM9.5 24C8.84688 24 8.2878 23.765 7.82277 23.2951C7.35759 22.825 7.125 22.26 7.125 21.6H11.875C11.875 22.26 11.6424 22.825 11.1772 23.2951C10.7122 23.765 10.1531 24 9.5 24ZM4.75 18H14.25V9.6C14.25 8.28 13.7849 7.15 12.8547 6.21C11.9245 5.27 10.8062 4.8 9.5 4.8C8.19375 4.8 7.07552 5.27 6.14531 6.21C5.2151 7.15 4.75 8.28 4.75 9.6V18Z"
                    fill="white"
                  />
                </svg>
              </IconButton>
              <IconButton onClick={() => alert('개발중 빨른시일내 업데이트함')}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 12C10.35 12 8.9375 11.4125 7.7625 10.2375C6.5875 9.0625 6 7.65 6 6C6 4.35 6.5875 2.9375 7.7625 1.7625C8.9375 0.5875 10.35 0 12 0C13.65 0 15.0625 0.5875 16.2375 1.7625C17.4125 2.9375 18 4.35 18 6C18 7.65 17.4125 9.0625 16.2375 10.2375C15.0625 11.4125 13.65 12 12 12ZM0 24V19.8C0 18.95 0.2188 18.1688 0.6564 17.4564C1.0938 16.7438 1.675 16.2 2.4 15.825C3.95 15.05 5.525 14.4688 7.125 14.0814C8.725 13.6938 10.35 13.5 12 13.5C13.65 13.5 15.275 13.6938 16.875 14.0814C18.475 14.4688 20.05 15.05 21.6 15.825C22.325 16.2 22.9062 16.7438 23.3436 17.4564C23.7812 18.1688 24 18.95 24 19.8V24H0ZM3 21H21V19.8C21 19.525 20.9312 19.275 20.7936 19.05C20.6562 18.825 20.475 18.65 20.25 18.525C18.9 17.85 17.5375 17.3438 16.1625 17.0064C14.7875 16.6688 13.4 16.5 12 16.5C10.6 16.5 9.2125 16.6688 7.8375 17.0064C6.4625 17.3438 5.1 17.85 3.75 18.525C3.525 18.65 3.3438 18.825 3.2064 19.05C3.0688 19.275 3 19.525 3 19.8V21ZM12 9C12.825 9 13.5312 8.7063 14.1186 8.1189C14.7062 7.5313 15 6.825 15 6C15 5.175 14.7062 4.4688 14.1186 3.8814C13.5312 3.2938 12.825 3 12 3C11.175 3 10.4688 3.2938 9.8814 3.8814C9.2938 4.4688 9 5.175 9 6C9 6.825 9.2938 7.5313 9.8814 8.1189C10.4688 8.7063 11.175 9 12 9Z"
                    fill="#FFF4F4"
                  />
                </svg>
              </IconButton>
            </div>
          </div>
          {/* <div className="flex justify-center">
            <div onClick={() => alert('개발중 빨른시일내 업데이트함')} className="w-full z-10 bg-white text-gray-200 py-1 px-2 rounded-full">
              search
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

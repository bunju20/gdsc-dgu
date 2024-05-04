import React from 'react';
import { OpenSeminar } from '@/interfaces/seminar/openSeminar';

/**
 * @description
 * 오픈 세미나 정보 컴포넌트
 * @component OpenSeminarDetailInformation
 * @returns {JSX.Element} OpenSeminarDetailInformation
 * @since 2024.04.18
 */
/**
 * Renders the header component for the recruitment section.
 * @returns The rendered header component.
 */
const OpenSeminarDetailInformation = ({ data }: { data: OpenSeminar }) => {

  return (
    <div className="w-full flex mt-10 pt-6 flex-col inline-flex min-h-fit relative"> 
    <p className="H4 font-normal px-2 pb-4">
      Information
    </p>
    <p className="mb-3 border border-solid text-mono_700 h-0"/>
   <div className='text-[1rem] font-normal w-full mt-8 text-mono_white'>
   {data.information.split('<br>').map((line, index) => (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment>
        ))}
   </div>
  </div>
  );
};
export default OpenSeminarDetailInformation;

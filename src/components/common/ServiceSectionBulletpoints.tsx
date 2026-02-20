// import React from "react";
// import { serviceListTypes } from "@/types";

// type ServiceSectionListProps = {
//   listData: serviceListTypes;
// };

// const ServiceSectionBulletpoints: React.FC<ServiceSectionListProps> = ({
//   listData,
// }) => {
//   return (
//     <section className=" general-sans bg-white px-5 py-4 sm:px-8 sm:py-7 md:px-10 md:py-8 lg:px-14  lg:py-10 xl:px-16  ">
//       <p className="text-2xl sm:text-3xl font-Bricolage_Grotesque md:text-4xl lg:text-5xl font-semibold">
//         {listData.heading}
//       </p>

//       {listData.bulletPointsTitle && (
//         <p className="mt-2 font-medium text-xl">{listData.bulletPointsTitle}</p>
//       )}

//       <ul className="list-disc list-inside mt-5">
//         {listData.bulletPoints?.map((item, index) => (
//           <li key={index} className="text-lg">
//             {item}{" "}
//           </li>
//         ))}
//       </ul>

//       {listData.bottomText && (
//         <p className="mt-2 text-lg">{listData.bottomText}</p>
//       )}
//     </section>
//   );
// };

// export default ServiceSectionBulletpoints;









// import React from "react";
// import { serviceListTypes } from "@/types";

// type ServiceSectionListProps = {
//   listData: serviceListTypes;
// };

// const ServiceSectionBulletpoints: React.FC<ServiceSectionListProps> = ({
//   listData,
// }) => {
//   return (
//     <section className="general-sans bg-white px-5 py-4 sm:px-8 sm:py-7 md:px-10 md:py-8 lg:px-14 lg:py-10 xl:px-16">
//       <p className="text-2xl sm:text-3xl font-Bricolage_Grotesque md:text-4xl lg:text-5xl font-semibold">
//         {listData.heading}
//       </p>

//       {listData.bulletPointsTitle && (
//         <p className="mt-2 font-medium text-xl">{listData.bulletPointsTitle}</p>
//       )}

//       <ul className="list-disc list-inside mt-5 space-y-2">
//         {listData.bulletPoints &&
//           (typeof listData.bulletPoints[0] === "string"
//             ? // Case 1: Array of strings
//               (listData.bulletPoints as string[]).map((item, index) => (
//                 <li key={index} className="text-lg">
//                   {item}
//                 </li>
//               ))
//             : // Case 2: Array of objects
//               (
//                 listData.bulletPoints as {
//                   text: string;
//                   subPoints?: string[];
//                 }[]
//               ).map((item, index) => (
//                 <li key={index} className="text-lg font-medium">
//                   {item.text}
//                   {item.subPoints && (
//                     <ul className=" list-inside ml-6 space-y-1 font-normal">
//                       {item.subPoints.map((sub, subIndex) => (
//                         <li key={subIndex} className="text-base">
//                           {sub}
//                         </li>
//                       ))}
//                     </ul>
//                   )}
//                 </li>
//               )))}
//       </ul>

//       {listData.bottomText && (
//         <p className="mt-2 text-lg">{listData.bottomText}</p>
//       )}
//     </section>
//   );
// };

// export default ServiceSectionBulletpoints;








import React from "react";
import { serviceListTypes } from "@/types";

type ServiceSectionListProps = {
  listData: serviceListTypes;
};

const ServiceSectionBulletpoints: React.FC<ServiceSectionListProps> = ({
  listData,
}) => {
  return (
    <section className="general-sans bg-white px-4 py-4 sm:px-6 sm:py-6 md:px-8 md:py-8 lg:px-12 lg:py-10 xl:px-16 xl:py-12">
      {/* Heading */}
      <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-Bricolage_Grotesque font-semibold leading-snug">
        {listData.heading}
      </p>

      {/* Bullet Points Title */}
      {listData.bulletPointsTitle && (
        <p className="mt-2 text-lg sm:text-xl md:text-2xl font-medium">
          {listData.bulletPointsTitle}
        </p>
      )}

      {/* Bullet Points List */}
      {/* <ul className="list-inside mt-4 sm:mt-5 space-y-2 sm:space-y-3">
        {listData.bulletPoints &&
          (typeof listData.bulletPoints[0] === "string"
            ? (listData.bulletPoints as string[]).map((item, index) => (
                <li key={index} className={`text-base  sm:text-lg md:text-xl ${typeof listData.bulletPoints[0]==='string' ? 'list-disc' :'list-decimal'}`}>
                  {item}
                </li>
              ))
            : (
                listData.bulletPoints as {
                  text: string;
                  subPoints?: string[];
                }[]
              ).map((item, index) => (
                <li key={index} className="text-base sm:text-lg md:text-xl font-medium">
                  {item.text}
                  {item.subPoints && (
                    <ul className="list-disc list-inside ml-4 sm:ml-6 md:ml-8 space-y-1 sm:space-y-1.5">
                      {item.subPoints.map((sub, subIndex) => (
                        <li key={subIndex} className="text-sm sm:text-base md:text-lg font-normal">
                          {sub}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              )))}
      </ul> */}
      <ul className="list-inside mt-4 sm:mt-5 space-y-2 sm:space-y-3">
  {listData.bulletPoints &&
    (typeof listData.bulletPoints[0] === "string"
      ? // Case 1: Array of strings
        (listData.bulletPoints as string[]).map((item, index) => (
          <li key={index} className="text-base sm:text-lg md:text-xl list-disc">
            {item}
          </li>
        ))
      : // Case 2: Array of objects
        (listData.bulletPoints as { text: string; subPoints?: string[] }[]).map(
          (item, index) => (
            <li key={index} className="text-base sm:text-lg md:text-xl font-medium list-decimal">
              {item.text}
              {item.subPoints && (
                <ul className="list-disc list-inside ml-4  sm:ml-6 md:ml-8 space-y-1 sm:space-y-">
                  {item.subPoints.map((sub, subIndex) => (
                    <li
                      key={subIndex}
                      className="text-sm sm:text-base md:text-lg font-normal mb-3"
                    >
                      {sub}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          )
        ))}
</ul>


      {/* Bottom Text */}
      {listData.bottomText && (
        <p className="mt-3 sm:mt-4 text-base sm:text-lg md:text-xl">{listData.bottomText}</p>
      )}
    </section>
  );
};

export default ServiceSectionBulletpoints;

"use client";

import { useTheme } from "next-themes";
import Image from "next/image";

const ReviewSection = () => {
  const { resolvedTheme } = useTheme();
  return (
    <div className="flex flex-col space-y-16 px-10 pt-10">
      <div className="flex justify-between items-center">
        <Image
          src={
            resolvedTheme === "dark"
              ? "/reviews_dark.png"
              : "/reviews_light.png"
          }
          width={511}
          height={342}
          alt="reviews"
        />
        <div className="flex flex-col space-y-8 items-end">
          <h3 className="font-medium text-5xl leading-normal text-right">
            Here&apos;s what our{" "}
            <span className="text-[#4168B7] dark:text-[#A77700]">
              customers
            </span>{" "}
            <br />
            say about us.
          </h3>
          <p className="font-normal text-2xl">
            Testimonies and reviews from our past students.
          </p>
        </div>
      </div>
      <div className="flex space-x-20 justify-center">
        <Image src="/Rectangle_1.svg" alt="reviews" width={233} height={430} />
        <Image src="/Rectangle_2.svg" alt="reviews" width={242} height={430} />
        <Image src="/Rectangle_3.svg" alt="reviews" width={379} height={430} />
        <Image src="/Rectangle_4.svg" alt="reviews" width={259} height={430} />
      </div>
      <div className="flex justify-center items-center bg-transparent">
        <div className="flex flex-col w-[1276px] space-y-6 border-2 border-b-0 rounded-ee-none rounded-es-none dark:border-none rounded-2xl p-12">
          <h3 className="text-primary text-5xl font-medium">
            Eloquent Exchange:
          </h3>
          <p className="font-normal text-xl">
            Established in February 2020, Eloquent Exchange stands as a
            pioneering force in the crypto trading landscape across Africa. With
            a presence in seven vibrant nations, including Liberia, Togo, Sierra
            Leone, Benin Republic, Ghana, Ivory Coast, and Nigeria, we have
            earned a reputation for our reliability and lightning-fast services.
          </p>
          <p className="font-normal text-xl">
            Being the first to introduce crypto trading in Liberia, we proudly
            bear the title of Liberian Crypto King, a testament to our
            unwavering commitment to the crypto community. At Eloquent Exchange,
            we go beyond crypto, extending our expertise to diverse trading
            ventures, fostering partnerships in Europe, East Africa, and
            Australia.
          </p>
          <p className="font-normal text-xl">
            Embracing a vision of empowerment, our crypto academy empowers the
            youth with essential skills and knowledge, enabling them to thrive
            in the world of crypto trading.
          </p>
          <p className="font-normal text-xl">
            In our remarkable journey thus far, we have successfully generated
            over six thousand US dollars in revenue for our valued clients, a
            testament to the trust they place in our expertise and services.
          </p>
          <p className="font-normal text-xl">
            At Eloquent Exchange, we continue to redefine the possibilities of
            crypto and trading, ushering in a new era of financial potential and
            prosperity.
          </p>
          <div className="flex justify-end bg-transparent">
            <Image
              src={
                resolvedTheme === "dark" ? "/ring-dark.png" : "/ring-light.png"
              }
              alt="rings"
              width={52}
              height={52}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewSection;

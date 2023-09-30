/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";

const Footer = () => {
  return (
    <div className="sm:mx-3 mx-1 px-2 sm:py-5 py-4 border-t border-zinc-300">
      <div className="mx-auto max-w-6xl flex md:flex-row md:justify-between flex-col gap-2">
        <div className="sm:p-5">
          <h1 className="text-2xl text-cyan-800 font-black mb-3">Omar's E-Comm Shoes!</h1>
          <p className="text-[14px]">
            Built by{" "}
            <Link
             
              target="_blank"
              href="https://twitter.com"
            >
              Omar Azhar Malik (E-ID: 32211)
            </Link>{" "}
            (2023). 
          </p>
          <p className="text-[14px]">
            Powered by{" "}
            <Link
              className="underline"
              href="https://vercel.com/"
              target="_blank"
            >
              Vercel
            </Link>
            .{" "}
            
            
          </p>
        </div>

        <div className="flex flex-col justify-end sm:p-5">
          <p className="text-[14px]">This Site is only Built as a NextJS Assignment.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

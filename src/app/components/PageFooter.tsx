import Link from "next/link";
import {FooterNavData} from "@/app/data/NavData";

export default function PageFooter() {
    return (
        <footer className="p-[20px] max-[810px]:px-[15px] border-t border-t-black/10">
            <div className="grid min-[810px]:grid-cols-3 grid-cols-1 gap-x-[10px] gap-y-[60px]">
                <div className="text-[18px] tracking-[-.03em] font-semibold">
                    T.Q.C
                </div>
                <div className="text-[14px] tracking-[-.03em] font-semibold">
                    <span className="opacity-40">
                        {"E: "}
                    </span>
                    <Link href="" className="transition-opacity duration-500 hover:opacity-40">
                        info@tqc-fakemail.com
                    </Link>
                    <br />
                    <span className="opacity-40">
                        {"T: "}
                    </span>
                    <Link href="" className="transition-opacity duration-500 hover:opacity-40">
                        +1234 567 8909
                    </Link>
                </div>
                <div className="text-[14px] tracking-[-.03em] font-semibold leading-[18px]">
                    {FooterNavData.map((link, linkIndex) => {
                        return (
                            <div key={linkIndex}>
                                <Link href={link.href} className="relative inline-block group">
                                    {link.text}
                                    <div className="absolute bottom-0 w-full border-b scale-x-0 origin-left transition-transform duration-500 ease-in-out group-hover:scale-x-100"></div>
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="mt-[150px] grid min-[810px]:grid-cols-3 grid-cols-1 gap-[10px] text-black/40 text-[12px] tracking-[-.03em] font-semibold">
                <div>
                    &copy; T.Q.C {new Date().getFullYear()}
                </div>
                <div>
                    <button className="clone-notice-btn transition-colors duration-500 hover:text-black cursor-pointer">
                        About this site
                    </button>
                    <span> &bull; </span>
                    <Link href="https://ena.supply/" target="_blank" className="transition-colors duration-500 hover:text-black">
                        Originally made by ena
                    </Link>
                    <span>, </span>
                    <Link href="https://www.arqe.ai/" target="_blank" className="transition-colors duration-500 hover:text-black">
                        Arqé.ai
                    </Link>
                </div>
                <div>
                    <Link href="" className="transition-colors duration-500 hover:text-black">
                        Instagram
                    </Link>
                    <span>, </span>
                    <Link href="" className="transition-colors duration-500 hover:text-black">
                        X.com
                    </Link>
                    <span>, </span>
                    <Link href="" className="transition-colors duration-500 hover:text-black">
                        Linkedin
                    </Link>
                </div>
            </div>
        </footer>
    )
}
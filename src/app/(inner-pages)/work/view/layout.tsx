import { ReactNode } from "react";

export default function WorkViewLayout({ children }: Readonly<{children: ReactNode }>) {
    return (
        <main className="motion-translate-y-in-[-100px] motion-opacity-in-0 motion-duration-700 motion-delay-300">
            <div className="pt-[150px] min-[810px]:pb-[200px] pb-[150px] min-[810px]:px-[20px] px-[15px]">
                {children}
            </div>
        </main>
    )
}
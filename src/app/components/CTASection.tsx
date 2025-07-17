import Link from "next/link";

export default function CTASection() {
    return (
        <section className="min-[810px]:px-[20px] px-[15px] min-[810px]:pb-[200px] pb-[150px] min-[1200px]:text-[60px] min-[810px]:text-[48px] text-[38px] tracking-[-.03em] font-semibold min-[1200px]:max-w-[900px] min-[810px]:max-w-[734px] max-w-[420px]">
            <p className="max-[810px]:hidden">
                We bring out your brand’s best, sharpen ideas, and drive results.
            </p>
            <p className="min-[810px]:hidden">
                We amplify your brand, refine ideas, and drive results.
            </p>
            <Link href="" className="inline-block opacity-40 transition-opacity duration-500 hover:opacity-100">
                Get in touch
            </Link>
        </section>
    )
}
import Link from "next/link";

export default function PrivacyPage() {
    return (
        <main className="motion-translate-y-in-[-100px] motion-opacity-in-0 motion-duration-700 motion-delay-300">
            <div className="min-[810px]:px-[20px] px-[15px] py-[200px] max-[810px]:pb-[150px]">
                <h2 className="min-[1200px]:text-[60px] min-[810px]:text-[48px] text-[38px] tracking-[-.03em] font-semibold">
                    Privacy Policy
                </h2>
                <div className="min-[810px]:mt-[160px] mt-[120px] grid min-[1200px]:grid-cols-3 min-[810px]:grid-cols-2 grid-cols-1 gap-x-[20px] gap-y-[80px] font-medium leading-[1.3]">
                    <div>
                        <div className="min-[810px]:sticky top-[80px] flex flex-col gap-[10px]">
                            <div className="text-[22px] tracking-[-.03em] font-semibold leading-[1.04]">
                                Responsible Entity
                            </div>
                            <p className="opacity-40 max-w-[260px]">
                                {`The responsible entity (Controller) for the data processing regulated in this Terms Policy is “[Insert Company]” (hereinafter "we", "us“ or [Insert Company]”).`}
                            </p>
                            <div>
                                Our contact details are:
                            </div>
                            <div className="opacity-40 max-w-[180px]">
                                659 S Van Ness Ave, San Francisco, CA 94110, USA
                            </div>
                            <Link href="mailto:tqc@tqc-fakemail.com" className="leading-[18px] relative inline-block group self-start">
                                tqc@tqc-fakemail.com
                                <div className="absolute bottom-0 w-full border-b origin-right transition-transform duration-500 ease-in-out group-hover:scale-x-0"></div>
                            </Link>
                        </div>
                    </div>
                    <div className="flex flex-col gap-[20px]">
                        <p>
                            {`Last updated: [insert date]`}
                        </p>
                        <p>
                            {`Welcome to [insert website name] (“we”, “us”, or “our”). By accessing or using our website, you agree to be bound by these terms of use. If you do not agree to these terms, you may not use our website.`}
                        </p>
                        <p>
                            {`Use of our website`}
                        </p>
                        <p>
                            {`Our website provides information about therapies and psychology services that we offer. This information is provided for general informational purposes only and is not intended to be a substitute for professional medical advice, diagnosis, or treatment. You should not rely on this information as a substitute for professional medical advice, diagnosis, or treatment. If you have any questions or concerns about your health or the information presented on our website, you should consult with a qualified healthcare professional.`}
                            <br />
                            <br />
                        </p>
                        <p>
                            {`Intellectual property`}
                        </p>
                        <p>
                            {`All content on our website, including text, graphics, logos, images, and software, is the property of [insert website name] or its content suppliers and is protected by copyright and other intellectual property laws. You may not reproduce, modify, distribute, or display any content on our website without our prior written permission.`}
                            <br/>
                            <br/>
                        </p>
                        <p>
                            {`User-generated content`}
                        </p>
                        <p>
                            {`Our website may allow you to submit comments, feedback, or other content (“user-generated content”). By submitting user-generated content, you grant us a non-exclusive, royalty-free, perpetual, irrevocable, and fully sublicensable right to use, reproduce, modify, adapt, publish, translate, create derivative works from, distribute, and display such user-generated content throughout the world in any media. You represent and warrant that you have the right to submit the user-generated content and that it does not infringe the intellectual property rights or privacy rights of any third party.`}
                            <br/>
                            <br/>
                        </p>
                        <p>
                            {`Disclaimer of warranties`}
                        </p>
                        <p>
                            {`Our website is provided on an “as is” and “as available” basis without warranties of any kind, either express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement. We do not warrant that our website will be uninterrupted or error-free, that defects will be corrected, or that our website or the servers that make it available are free of viruses or other harmful components.`}
                            <br/>
                            <br/>
                        </p>
                        <p>
                            {`Limitation of liability`}
                        </p>
                        <p>
                            {`In no event shall we be liable for any direct, indirect, incidental, special, or consequential damages arising out of or in connection with the use of our website or the information provided on our website. This includes, without limitation, damages for loss of profits, data, or other intangible losses.`}
                            <br/>
                            <br/>
                        </p>
                        <p>
                            {`Indemnification`}
                        </p>
                        <p>
                            {`You agree to indemnify and hold us harmless from any claim or demand, including reasonable attorneys’ fees, made by any third party due to or arising out of your use of our website, your violation of these terms of use, or your violation of any rights of another.`}
                            <br/>
                            <br/>
                        </p>
                        <p>
                            {`Governing law`}
                        </p>
                        <p>
                            {`These terms of use shall be governed by and construed in accordance with the laws of [insert governing law jurisdiction], without giving effect to any principles of conflicts of law.`}
                            <br/>
                            <br/>
                        </p>
                        <p>
                            {`Changes to these terms of use`}
                        </p>
                        <p>
                            {`We may update these terms of use from time to time. We will notify you of any changes by posting the new terms of use on our website. We recommend that you review these terms of use periodically to stay informed about our practices.`}
                        </p>
                        <p>
                            {`By using our website, you agree to be bound by these terms of use.`}
                        </p>
                    </div>
                </div>
            </div>
        </main>
    )
}
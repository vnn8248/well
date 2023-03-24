import Navigation from "../components/Navigation";
import Image from "next/image";
import Link from "next/link";

export default function Contact() {
    return (
        <div className='container'>
            <main>
                <div className='hero'>
                    <div>
                        <h2 className='fade-1'>Thanks for considering my application for <br class='br'></br><span className='athletic'>The Athletic.</span></h2>
                        <p className='fade-2'>
                            As a sports and ethical journalism advocate, I respect and admire the good work being done at <span className='athletic'>The Athletic</span>.
                        </p>
                        <p className='fade-2'>
                            I believe I will make a strong candidate for this position because it is my perfect mix of passions - coding, sports, culture, and the intersectionality of it all told through content and supported through community.
                        </p>
                        <p className="has-text-align-left code fade-3">
                            <code>
                                <a href="https://jobs.lever.co/theathletic/154a8623-7b4f-42b0-82e6-2e5ee030a2a0" data-type="URL" data-id="https://jobs.lever.co/theathletic/154a8623-7b4f-42b0-82e6-2e5ee030a2a0" target="_blank" rel="noreferrer noopener">
                                    Software Engineer, Full Stack - Subscriber Experience (Remote)
                                </a>
                            </code>
                        </p>
                        <p className='fade-3'>
                            For any questions on my experience, please feel free to contact me at any time.
                        </p>
                        <div className='codeNguyen'>
                            <h3 className='fade-4'>Check out more of my work here -</h3>
                            <Link href='https://www.codenguyen.com' target='_blank' className='fade-4'>
                                <Image 
                                    priority
                                    src='/avataaars-bn.svg'
                                    height={80}
                                    width={80}
                                    alt='Code Nguyen'
                                    className='avatar'
                                />
                            </Link>
                        </div>
                    </div>
                </div>
                <Navigation page='contact'/>
            </main>
        </div>
    )
};
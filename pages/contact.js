import Navigation from "../components/Navigation";
import Image from "next/image";
import Link from "next/link";

export default function Contact() {
    return (
        <div className='container'>
            <main>
                <div className='hero'>
                    <div>
                        <h2 className='fade-1'>Thanks for considering my application for <br class='br'></br><span className='readme'>ReadMe.</span></h2>
                        <p className='fade-2'>
                            As a community advocate and global-minded empath, I respect and admire the good work being done at <span className='readme'>ReadMe</span>.
                        </p>
                        <p className='fade-2'>
                            It brings a smile to my face to read a truly great job description like this one. I am excited to learn more about how this position will collaborate with different teams for different projects. 
                        </p>
                        <p className="has-text-align-left code fade-3">
                            <code>
                                <a href="https://jobs.ashbyhq.com/readme/43ebc7c3-4653-4037-841e-075ad428a68d" data-type="URL" target="_blank" rel="noreferrer noopener">
                                    Front End Engineer
                                </a>
                            </code>
                        </p>
                        <p className='fade-4'>
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
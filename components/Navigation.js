import Link from "next/link";
import Image from 'next/image';

export default function Navigation({ page }) {

  if (page === 'home') {
    return (
      <div className='nav'>
        <div className='prev'>
        <Link href='/contact'>
            <Image 
              priority
              src='/arrow-left.svg'
              height={40}
              width={40}
              alt='Previous page'
              className='left'
            />
          </Link>
          <Link href='/contact'>
            Contact
          </Link>
        </div>
        <div className='next'>
          <Link href='/techs'>
            Tech Stack
          </Link>
          <Link href='/techs'>
            <Image 
              priority
              src='/arrow-right.svg'
              height={40}
              width={40}
              alt='Next page'
              className='right'
            />
          </Link>
        </div>
      </div> 
    )
  }

  if (page === 'techs') {
    return (
      <div className='nav'>
        <div className='prev'>
          <Link href='/'>
            <Image 
              priority
              src='/arrow-left.svg'
              height={40}
              width={40}
              alt='Previous page'
              className='left'
            />
          </Link>
          <Link href='/'>
            Home
          </Link>
        </div>
        <div className='next'>
          <Link href='/about'>
            About Me
          </Link>
          <Link href='/about'>
            <Image 
              priority
              src='/arrow-right.svg'
              height={40}
              width={40}
              alt='Next page'
              className='right'
            />
          </Link>
        </div>
      </div> 
    )
  }

  if (page === 'about') {
    return (
      <div className='nav'>
        <div className='prev'>
          <Link href='/techs'>
            <Image 
              priority
              src='/arrow-left.svg'
              height={40}
              width={40}
              alt='Previous page'
              className='left'
            />
          </Link>
          <Link href='/techs'>
            Tech Stack
          </Link>
        </div>
        <div className='next'>
          <Link href='/projects'>
            Projects
          </Link>
          <Link href='/projects'>
            <Image 
              priority
              src='/arrow-right.svg'
              height={40}
              width={40}
              alt='Next page'
              className='right'
            />
          </Link>
        </div>
      </div> 
    )
  }

  if (page === 'projects') {
    return (
      <div className='nav'>
      <div className='prev'>
        <Link href='/about'>
          <Image 
            priority
            src='/arrow-left.svg'
            height={40}
            width={40}
            alt='Previous page'
            className='left'
          />
        </Link>
        <Link href='/about'>
          About Me
        </Link>
      </div>
      <div className='next'>
        <Link href='/contact'>
          Contact
        </Link>
        <Link href='/contact'>
          <Image 
            priority
            src='/arrow-right.svg'
            height={40}
            width={40}
            alt='Next page'
            className='right'
          />
        </Link>
      </div>
    </div> 
    )
  }

  if (page === 'contact') {
    return (
      <div className='nav'>
      <div className='prev'>
        <Link href='/projects'>
          <Image 
            priority
            src='/arrow-left.svg'
            height={40}
            width={40}
            alt='Previous page'
            className='left'
          />
        </Link>
        <Link href='/projects'>
          Projects
        </Link>
      </div>
      <div className='next'>
        <Link href='/'>
          Home
        </Link>
        <Link href='/'>
          <Image 
            priority
            src='/arrow-right.svg'
            height={40}
            width={40}
            alt='Next page'
            className='right'
          />
        </Link>
      </div>
    </div> 
    )
  }
}
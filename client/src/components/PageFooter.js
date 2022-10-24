import React from 'react'
import { Footer } from 'flowbite-react';
import { FaGithub, FaFacebookSquare, FaTwitter, FaInstagram,  } from 'react-icons/fa';
import { MdOutlineEmail } from 'react-icons/md';

 const PageFooter = () => {
  return (
      <Footer bgDark={true}>
    <div className="w-full">
      <div className="grid w-full grid-cols-2 gap-8 py-8 px-6 md:grid-cols-4">
        <div>
          <Footer.Title title="Company" />
          <Footer.LinkGroup col={true}>
            <Footer.Link href="#">
              About
            </Footer.Link>
            <Footer.Link href="#">
              Brand Center
            </Footer.Link>
            <Footer.Link href="#">
              Blog
            </Footer.Link>
          </Footer.LinkGroup>
        </div>
        <div>
          <Footer.Title title="help center" />
          <Footer.LinkGroup col={true}>
            <Footer.Link href="#">
              Discord Server
            </Footer.Link>
            <Footer.Link href="#">
              Twitter
            </Footer.Link>
            <Footer.Link href="#">
              Contact Us
            </Footer.Link>
          </Footer.LinkGroup>
        </div>
        <div>
          <Footer.Title title="legal" />
          <Footer.LinkGroup col={true}>
            <Footer.Link href="#">
              Privacy Policy
            </Footer.Link>
            <Footer.Link href="#">
              Licensing
            </Footer.Link>
            <Footer.Link href="#">
              Terms & Conditions
            </Footer.Link>
          </Footer.LinkGroup>
        </div>
        <div>
          <Footer.Title title="download" />
          <Footer.LinkGroup col={true}>
            <Footer.Link href="#">
              iOS
            </Footer.Link>
            <Footer.Link href="#">
              Android
            </Footer.Link>
            <Footer.Link href="#">
              Windows
            </Footer.Link>
          </Footer.LinkGroup>
        </div>
      </div>
      <div className="w-full bg-gray-700 py-6 px-4 sm:flex sm:items-center sm:justify-between">
        <Footer.Copyright
          href="#"
          by="Alex Xu"
          year={2022}
        />
        <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
          <Footer.Icon
            href="https://www.facebook.com"
            icon={FaFacebookSquare}
          />
          <Footer.Icon
            href="https://www.instagram.com"
            icon={FaInstagram}
          />
          <Footer.Icon
            href="https://twitter.com"
            icon={FaTwitter}
          />
          <Footer.Icon
            href="https://github.com/ayxu5723"
            icon={FaGithub}
          />
          <Footer.Icon
            href="mailto: alexx.5723@gmail.com"
            icon={MdOutlineEmail}
          />
        </div>
      </div>
    </div>
  </Footer>
  );
};

export default PageFooter;
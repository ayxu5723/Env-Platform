import React from 'react'
import { Footer } from 'flowbite-react';
import { FaGithub, FaFacebookSquare, FaTwitter, FaInstagram,  } from 'react-icons/fa';
import { MdOutlineEmail } from 'react-icons/md';

 const PageFooter = () => {
  return (
    <Footer container={true} className = "fixed bottom-0">
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <Footer.Brand
              href="https://flowbite.com"
              src="https://flowbite.com/docs/images/logo.svg"
              alt="Flowbite Logo"
              name="Flowbite"
            />
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="about" />
              <Footer.LinkGroup col={true}>
                <Footer.Link href="/">
                  Flowbite
                </Footer.Link>
                <Footer.Link href="/">
                  Tailwind CSS
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow us" />
              <Footer.LinkGroup col={true}>
                <Footer.Link href="#">
                  Github
                </Footer.Link>
                <Footer.Link href="#">
                  Discord
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col={true}>
                <Footer.Link href="#">
                  Privacy Policy
                </Footer.Link>
                <Footer.Link href="#">
                  Terms & Conditions
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright
            href="https://github.com/ayxu5723" target="_blank"
            by="Alex Xu™"
            year={2022}
          />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon
              href="https://www.facebook.com/" target="_blank"
              icon={FaFacebookSquare}
            />
            <Footer.Icon
              href="https://www.instagram.com/" target="_blank"
              icon={FaInstagram}
            />
            <Footer.Icon
              href="https://twitter.com/" target="_blank"
              icon={FaTwitter}
            />
            <Footer.Icon
              href="https://github.com/ayxu5723" target="_blank"
              icon={FaGithub}
            />
              <Footer.Icon
              href="mailto: envplatform@gmail.com" target="_blank"
              icon={MdOutlineEmail}
            />
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default PageFooter;
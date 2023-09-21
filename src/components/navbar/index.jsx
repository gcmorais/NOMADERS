import React, { useEffect, useState } from 'react';
import { Anchor, ConfigProvider } from 'antd';
import NavButton from '../navbutton';

function Navbar() {
  const [ativaCor, setAtivaCor] = useState(false);

  useEffect(() => {
    function posicaoScroll() {
      if (window.scrollY > 10) {
        setAtivaCor(true);
      } else {
        setAtivaCor(false);
      }
    }

    window.addEventListener('scroll', posicaoScroll);
  }, []);
  return (
    <header
      className={
        ativaCor
          ? 'w-[100%] top-0 px-10 fixed flex justify-between py-5 text-primary-white font-inter items-center bg-primary-indigo lg:px-36 2xl:px-72 z-10'
          : 'w-[100%] top-0 px-10 fixed flex justify-between pt-5 text-primary-white font-inter items-center bg-transparent lg:px-36 2xl:px-72 z-10'
      }
    >
      <h1 className="text-lg font-extrabold tracking-widest">NOMADERS</h1>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#fff',
            colorText: 'rgba(255,255,255, 0.8)',
            fontFamily: 'Inter',
            lineType: 'none',
            padding: '40',
            screenLGMax: '10',
          },
        }}
      >
        <Anchor
          className="hidden lg:block font-semibold"
          direction="horizontal"
          items={[
            {
              key: 'home',
              href: '#home',
              title: 'Home',
            },
            {
              key: 'overview',
              href: '#overview',
              title: 'Overview',
            },
            {
              key: 'integração',
              href: '#integração',
              title: 'Integração',
            },
            {
              key: 'pacotes',
              href: '#pacotes',
              title: 'Pacotes',
            },
            {
              key: 'faq',
              href: '#faq',
              title: 'FAQs',
            },
          ]}
        />
      </ConfigProvider>
      <NavButton link="/app" bgcolor="bg-primary-white" text="text-black" />
    </header>
  );
}

export default Navbar;

import React from 'react';
import MainImage from '../../../assets/image.svg';
import Stars from '../../../assets/Vector.svg';

function Home() {
  return (
      <div className='bg-primary-indigo px-[10%] font-inter lg:flex justify-center items-center flex-col pb-32'>

        <div className='flex flex-col justify-center gap-5 pt-32 lg:flex-row'>
          <div className='m-auto max-w-[90%] flex justify-end lg:m-0'>
            <img src={MainImage} alt='Home' className='items-center'/>
          </div>
          <div className='flex justify-center flex-col items-center w-[100%] text-primary-white lg:w-[46%]'>
            <h1 className='flex items-baseline font-extrabold text-5xl text-center lg:w-[80%] 2xl:w-[62%]'>
              PENSE EM UM APP…
              <img src={Stars} alt='starts'/>
            </h1>
            <p className='mt-5 mb-10 text-center lg:w-[90%]'>…onde você possa pertencer a um clube escolar, um grupo de gamers, ou uma comunidade artística mundial. Onde você e alguns amigos possam passar um tempo juntos. Um lugar que torna fácil conversar todos os dias e socializar com mais frequência.</p>

            <div className='flex justify-center gap-3 '>
              <button className=' bg-primary-white text-primary-black py-3  rounded-full px-10 lg:px-20' type='button'>
                Registrar
              </button>
              <button className='hidden w-[200px] bg-primary-black text-primary-white py-2 rounded-full px-5 lg:w-[290px] lg:py-3 lg:list-item' type='button'>
                Já tem uma conta ? Entrar
              </button>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Home;

import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import ArrowRight from '../icons/ArrowRight';
import Github from '../icons/Github';

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Pixel Pulse">
      <main className='flex justify-center items-center mt-[4rem] flex-col gap-[1rem] h-[78vh]'>
        <h1 className='text-[3rem] w-[80%] text-center flex justify-center items-center flex-col'>
          <span>
            Desarrolla aplicaciones
          </span>
          <span>
            React accesibles con agilidad y eficiencia 🚀
          </span>
        </h1>
        <p className='w-[60%] text-[1.2rem] text-center flex justify-center items-center flex-col'>
            PixelUI es una libreria de codigo abierto, Que te ofrece un conjunto de componentes de alto rendimiento. que te permiten crear interfaces de usuario accesibles y eficientes.
        </p>
        <div className='flex justify-center items-center gap-[1rem]'>
          <a className='bg-[#ff000080] dark:bg-[#ff0000] text-[#282828] hover:text-[#282828] text-[1rem] font-bold rounded px-[2rem] py-[1rem] flex justify-center items-center gap-[.5rem]' href='/docs/guides/introduction'>
            Documenatación <ArrowRight />
          </a>
          <a className='bg-[#28282830] text-[#282828] hover:text-[#282828] dark:bg-[#cccccc] text-[1rem] font-bold rounded px-[2rem] py-[1rem] flex justify-center items-center gap-[.5rem]' href='https://github.com/Alejocabeza/pixelui' target='_blank'>
            Github <Github />
          </a>
        </div>
      </main>
    </Layout>
  );
}

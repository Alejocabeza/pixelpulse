import Github from "@site/src/icons/Github"
import Npm from "@site/src/icons/Npm"

export const HeaderMdx = ({ title, description }: { title: string, description: string }): JSX.Element => {
    return (
        <>
            <p>{description}</p>
            <div className='flex flex-row justify-start gap-[1rem]'>
                <a
                    className=' flex justify-center items-center gap-[.8rem] px-[.8rem] py-[.4rem] border border-sky-500 text-black bg-[#cccccc40] hover:bg-[#cccccc] cursor-pointer rounded-sm dark:text-white'
                    href={`https://github.com/Alejocabeza/pixelui/tree/main/packages/components/${title.toLowerCase()}`}
                    target='_blank'
                >
                    <Github /> Source
                </a>
                <a
                    className='flex justify-center items-center gap-[.8rem] px-[.8rem] py-[.4rem] border border-sky-500 text-black bg-[#cccccc40] hover:bg-[#cccccc] cursor-pointer rounded-sm dark:text-white'
                    href={`https://www.npmjs.com/package/pixelui-${title.toLowerCase()}`}
                    target="_blank"
                >
                    <Npm /> pixelui-{title.toLowerCase()}
                </a>
            </div>
        </>
    )
}
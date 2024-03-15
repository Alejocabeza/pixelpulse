import { useMDXComponent } from "next-contentlayer/hooks"
import { HtmlHTMLAttributes } from "react"
import { Divider } from "./Divider"

const componentStyle = {
  h1: ({className, children, id, ...props}: HtmlHTMLAttributes<HTMLHeadingElement>) => (
    <h1 className="text-[2rem] font-bold section"    {...props} >
      {children}
    </h1>
  ),
  h2: ({className, children, ...props}: HtmlHTMLAttributes<HTMLHeadingElement>) => (
    <h2 className="text-[1.5rem] font-bold section" {...props}>
      {children}
    </h2>
  ),
  h3: ({className, children, ...props}: HtmlHTMLAttributes<HTMLHeadingElement>) => (
    <h3 className="text-[1rem] font-bold section" {...props}>
      {children}
    </h3>
  ),
  h4: ({className, children, ...props}: HtmlHTMLAttributes<HTMLHeadingElement>) => (
    <h4 className="text-[1rem] font-bold section" {...props}>
      {children}
    </h4>
  ),
  h5: ({className, children, ...props}: HtmlHTMLAttributes<HTMLHeadingElement>) => (
    <h5 className="text-[1rem] font-bold section" {...props}>
      {children}
    </h5>
  ),
  h6: ({className, children, ...props}: HtmlHTMLAttributes<HTMLHeadingElement>) => (
    <h6 className="text-[1rem] font-bold section" {...props}>
      {children}
    </h6>
  ),
  p: ({className, children, ...props}: HtmlHTMLAttributes<HTMLParagraphElement>) => (
    <p className="w-[85%]"  {...props}>
      {children}
    </p>
  ),
  Divider,
}

interface Props {
  code: string
}

export const MdxContent = ({code}: Props) => {
  const Content = useMDXComponent(code)

  return (
    <div className="flex flex-col gap-[2rem]">
      <Content components={componentStyle} />
    </div>
  )
}

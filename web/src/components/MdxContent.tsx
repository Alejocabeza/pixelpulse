import { useMDXComponent } from "next-contentlayer/hooks"

interface Props {
  code: string
}

export const MdxContent = ({code}: Props) => {
  const Content = useMDXComponent(code)

  return (
    <div>
      <Content components={{}} />
    </div>
  )
}

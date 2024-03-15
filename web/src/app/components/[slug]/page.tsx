import { MdxContent } from "@/components";
import { allComponents } from "contentlayer/generated";
import { notFound } from "next/navigation";

export default async function Page({ params }: { params: { slug: string } }) {
  const component = await getComponentFromParams(params.slug)
  return (
  <>
      <div>
        <MdxContent code={component.body.code} />
      </div>
  </>
  )
}

async function getComponentFromParams(slug: string) {
  const component = allComponents.find((component) => component.slugAsParams === slug)
  if(!component) notFound()
  return component
}

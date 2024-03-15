import { MdxContent } from "@/components";
import { allFrameworks } from "contentlayer/generated";
import { notFound } from "next/navigation";

export default async function Page({ params }: { params: { slug: string } }) {
  const framework = await getFrameworkFromParams(params.slug)
  return (
  <>
      <div>
        <MdxContent code={framework.body.code} />
      </div>
  </>
  )
}

async function getFrameworkFromParams(slug: string) {
  const framework = allFrameworks.find((framework) => framework.slugAsParams === slug)
  if(!framework) notFound()
  return framework
}

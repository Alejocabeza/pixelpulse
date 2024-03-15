import { MdxContent } from "@/components";
import { allGuides } from "contentlayer/generated";
import { notFound } from "next/navigation";

export default async function Page({ params }: { params: { slug: string } }) {
  const guide = await getGuideFromParams(params.slug)
  return (
  <>
      <div>
        <MdxContent code={guide.body.code} />
      </div>
  </>
  );
}
async function getGuideFromParams(slug: string) {
  const guide = allGuides.find((guide) => guide.slugAsParams === slug)
  if(!guide) notFound()
  return guide
}

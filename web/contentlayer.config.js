import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'

/** @type (import('contentlayer/source-files').ComputedFields) */
const computedFields = {
  slug: {
    type: 'string',
    resolve: (doc) => `/${doc._raw.flattenedPath}`
  },
  slugAsParams: {
    type: 'string',
    resolve: (doc) => doc._raw.flattenedPath.split('/').slice(1).join('/')
  }
}

export const Frameworks = defineDocumentType(() => ({
  name: 'Frameworks',
  filePathPattern: 'frameworks/**/*.mdx',
  contentType: 'mdx',
  title: {
    type: 'string',
    required: false
  },
  description: {
    type: 'string'
  },
  author: {
    type: 'string',
    required: false
  },
  computedFields
}))

export const Guide = defineDocumentType(() => ({
  name: 'Guides',
  filePathPattern: 'guides/**/*.mdx',
  contentType: 'mdx',
  title: {
    type: 'string',
    required: false
  },
  description: {
    type: 'string'
  },
  author: {
    type: 'string',
    required: false
  },
  computedFields
}))

export const Component = defineDocumentType(() => ({
  name: 'Components',
  filePathPattern: 'components/**/*.mdx',
  contentType: 'mdx',
  title: {
    type: 'string',
    required: false
  },
  description: {
    type: 'string',
    required: false
  },
  author: {
    type: 'string',
    required: false
  },
  computedFields
}))

export default makeSource({
  contentDirPath: './src/content/',
  documentTypes: [Guide, Component, Frameworks],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypePrettyCode,
        {
          theme: 'github-dark',
          onVisitLine (node) {
            // Prevent lines from collapsing in `display: grid` mode, and allow empty
            // lines to be copy/pasted
            if (node.children.length === 0) {
              node.children = [{ type: 'text', value: ' ' }]
            }
          },
          onVisitHighlightedLine (node) {
            node.properties.className.push('line--highlighted')
          },
          onVisitHighlightedWord (node) {
            node.properties.className = ['word--highlighted']
          }
        }
      ],
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ['subheading-anchor'],
            ariaLabel: 'Link to section'
          }
        }
      ]
    ]
  }
})

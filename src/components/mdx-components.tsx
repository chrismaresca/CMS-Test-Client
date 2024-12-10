// components/mdx-remote.js
import { MDXRemote } from 'next-mdx-remote/rsc'

// Custom Components
import Test from "@/components/Test";

const components = {
  h1: (props) => (
    <h1 {...props} className="large-text">
      {props.children}
    </h1>
  ),
  ol: (props: any) => (
    <ol {...props} className="list-decimal ml-6">
      {props.children}
    </ol>
  ),
  li: (props: any) => (
    <li {...props} className="list-item">
      {props.children}
    </li>
  ),
  Test: (props: any) => (
    <Test {...props} />
  )
}

export function CustomMDX(props) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  )
}
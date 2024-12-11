// import { MDXRemote } from "next-mdx-remote/rsc";
// import { serialize } from "next-mdx-remote/serialize";

// import Test from "@/components/Test";

// const components = { Test };

// import { getTestMDX, updateTestMDX } from "@/utilities/getTags";
// import { Button } from "@/components/ui/button";
// import { CustomMDX } from "@/components/mdx-components";

// export default async function TestPage() {

//   const id = "a1be23b5-f419-46d1-90da-603b8fa25dbc";

//   const mdxSource = `# Hello World This is from Server Components! Here is a **test component:**

//   1. hey
//   2. hi
//   3. hello
  
//   <Test text="Hello from MDX!" />
  
//   <Test text="Another test component" />`;

//   await updateTestMDX();
//   const source = await getTestMDX(id);


//   return (
//     <div className="wrapper">
//       {source.title}
//       <CustomMDX source={source.content.toString()} />
//       <CustomMDX source={mdxSource}/>
//       <ol className="list-disc ml-6">
//         <li>hey</li>
//         <li>hi</li>
//         <li>hello</li>
//       </ol>
//     </div>
//   );
// }

import React from 'react'

export default function page() {
  return (
    <div>page</div>
  )
}

// import Image from "next/image";

// import { Card } from "../components/ui/Cards";
// import Link from "next/link";
// import { MoveRight, CalendarDays } from "lucide-react";
// import { client } from "../sanity/lib/client";
// interface Post {
//   id: string;
//   title: string;
//   date: string;
//   image: string;
//   content: string;
//   name: string;
// }

// export default async function LatestArticles() {
//   const res: Post[] = await client.fetch(
//     `*[_type == "blog"]{
//       id,
//       title,
//       date,
//       "image": image.asset->url,
//       content,
//       name
//     }`
//   );

//   return (
//     <section className="pt-32 static">
//       <div className="max-w-screen-xl mx-auto lg:px-4 px-7">

//         <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 cursor-pointer">
//           {res.map((post, index) => (
//             <div
//               key={index}

//             >
//               <Card
//                 className="hover:scale-105 h-[600px]  duration-300 transition-transform pb-3 rounded-2xl shadow-lg my-4"
//               >
//                 <Image
//                   src={post.image}
//                   alt={post.title} // Fixed typo here
//                   loading="lazy"
//                   height={400}
//                   width={400}
//                   className="w-full h-[65%] mb-4 rounded-t-2xl"
//                 />
//                 <div className="m-4 flex gap-2 ">
//                   <CalendarDays className="w-5" />
//                   <span className="font-light">{post.date}</span>
//                 </div>
//                 <h1 className="m-4 text-2xl font-semibold">{post.title}</h1> {/* Fixed typo here */}
//                 <Link
//                   href={`/blog/${post.id}`}
//                   className="flex items-center gap-1"
//                 >
//                   <p className="ml-4 text-blue-500 hover:text-blue-700 text-xl">
//                     Read More
//                   </p>
//                   <MoveRight className="text-blue-500" />
//                 </Link>
//               </Card>
//             </div>
//           ))}
//         </div>
//         <div className="flex justify-center py-8">
//           <Link href="/articals">
//             <button className="bg-zinc-800 hover:bg-zinc-950 text-zinc-50 px-7 py-2 rounded-full">
//               View More
//             </button>
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// }
import Articles from "../components/latest-articles";

import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import React from "react";
import PopularArticles from "../components/PopularArticles";

const Home = () => {
  return (
    <div>
      <Navbar bgColor="bg-transparent" color="text-white" />
      <Hero />

      <PopularArticles />

      <Articles />
     
    </div>
  );
};

export default Home;

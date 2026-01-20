import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Footer from "../../components/footer";
import Container from "../../components/container";
import { getSortedPostsData } from "../../lib/posts";

export const metadata: Metadata = {
  title: "Blog | Gold Crown Africa",
  description:
    "Latest news, insights, and updates from Gold Crown Africa regarding the precious metals industry.",
  openGraph: {
    type: "website",
    siteName: "Gold Crown Africa",
    url: "https://goldcrownafricagroup.com/blog",
    title: "Blog | Gold Crown Africa",
    description:
      "Latest news, insights, and updates from Gold Crown Africa regarding the precious metals industry.",
    images: [
      {
        url: "https://goldcrownafricagroup.com/img/logo.png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Gold Crown Africa",
    description:
      "Latest news, insights, and updates from Gold Crown Africa regarding the precious metals industry.",
    images: ["https://goldcrownafricagroup.com/img/logo.png"],
  },
};

export default function BlogIndex() {
  const allPostsData = getSortedPostsData();

  return (
    <>
      <Container>
        <div className="py-24">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl mb-4 dark:text-gray-100">
              Our Blog
            </h1>
            <p className="text-lg leading-8 text-gray-600 max-w-2xl mx-auto dark:text-gray-400">
              Stay updated with the latest trends in the gold and diamond
              industry across Africa and beyond.
            </p>
          </div>

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {allPostsData.map((post) => (
              <div
                key={post.slug}
                className="group relative flex flex-col items-start bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition dark:bg-trueGray-900 dark:border-trueGray-800"
              >
                <div className="relative w-full aspect-[16/9] mb-6 overflow-hidden rounded-xl bg-gray-100 dark:bg-trueGray-800">
                  {post.coverImage ? (
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition duration-300"
                      unoptimized={true}
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-indigo-50 text-indigo-200 dark:bg-indigo-900/20 dark:text-indigo-800">
                      <svg
                        className="w-12 h-12"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" />
                        <path d="M14 10l-2.5 3.01L10 10l-3 4h10l-3-4z" />
                      </svg>
                    </div>
                  )}
                </div>

                <div className="flex items-center gap-x-4 text-xs mb-4">
                  <time
                    dateTime={post.date}
                    className="text-gray-500 dark:text-gray-400"
                  >
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                  <span className="relative z-10 rounded-full bg-indigo-50 px-3 py-1.5 font-medium text-indigo-600 dark:bg-indigo-900/40 dark:text-indigo-300">
                    Articles
                  </span>
                </div>

                <div className="group relative">
                  <h3 className="mt-3 text-xl font-semibold leading-6 text-gray-900 group-hover:text-gold-500 dark:text-gray-100 dark:group-hover:text-gold-400">
                    <Link href={`/blog/${post.slug}`}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </Link>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600 dark:text-gray-400">
                    {post.excerpt}
                  </p>
                </div>
                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-6 flex items-center gap-x-1 text-sm font-medium text-indigo-600 dark:text-indigo-400"
                >
                  Read more
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </Link>
              </div>
            ))}
          </div>

          {allPostsData.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-500">
                No blog posts found yet. Check back soon!
              </p>
            </div>
          )}
        </div>
      </Container>

      <Footer />
    </>
  );
}

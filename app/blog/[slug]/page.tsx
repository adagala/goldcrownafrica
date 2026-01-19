import React from "react";
import { Metadata } from "next";
import Footer from "../../../components/footer";
import Container from "../../../components/container";
import Image from "next/image";
import { getPostSlugs, getPostData, PostData } from "../../../lib/posts";
import { siteConfig } from "../../../lib/config";

interface PostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const postData = await getPostData(slug);

  return {
    title: postData.title,
    description: postData.excerpt,
    openGraph: {
      type: "article",
      publishedTime: postData.date,
      siteName: siteConfig.name,
      url: `${siteConfig.url}/blog/${postData.slug}`,
      title: postData.title,
      description: postData.excerpt,
      authors: siteConfig.authors.map((author) => author.name),
      images: postData.coverImage
        ? [
            {
              url: `${siteConfig.url}${postData.coverImage}`,
              width: 1200,
              height: 630,
              alt: postData.title,
            },
          ]
        : [
            {
              url: `${siteConfig.url}${siteConfig.ogImage}`,
              width: 1200,
              height: 630,
              alt: siteConfig.name,
            },
          ],
    },
    twitter: {
      card: "summary_large_image",
      title: postData.title,
      description: postData.excerpt,
      images: postData.coverImage
        ? [`${siteConfig.url}${postData.coverImage}`]
        : [`${siteConfig.url}${siteConfig.ogImage}`],
    },
  };
}

export async function generateStaticParams() {
  const posts = getPostSlugs();
  return posts;
}

export default async function Post({ params }: PostPageProps) {
  const { slug } = await params;
  const postData = await getPostData(slug);

  return (
    <>
      <article className="py-24">
        <Container>
          <div className="max-w-3xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <time className="text-sm font-medium text-indigo-600 mb-2 block dark:text-indigo-400">
                {new Date(postData.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-5xl mb-6 dark:text-gray-100">
                {postData.title}
              </h1>
              <p className="text-xl text-gray-500 italic dark:text-gray-400">
                {postData.excerpt}
              </p>
            </div>

            {/* Cover Image */}
            {postData.coverImage && (
              <div className="relative w-full overflow-hidden mb-16 shadow-2xl rounded-3xl min-h-[300px] md:min-h-[450px] bg-gray-100 dark:bg-trueGray-800">
                <Image
                  src={postData.coverImage}
                  alt={postData.title}
                  fill
                  className="object-cover"
                  priority
                  unoptimized={true}
                />
              </div>
            )}

            {/* Content */}
            <div
              className="prose prose-indigo prose-lg max-w-none prose-headings:font-bold prose-a:text-indigo-600 prose-img:rounded-3xl dark:prose-invert dark:prose-a:text-indigo-400"
              dangerouslySetInnerHTML={{ __html: postData.contentHtml || "" }}
            />

            {/* Footer / CTA */}
            <div className="mt-16 pt-10 border-t border-gray-100 dark:border-trueGray-800">
              <div className="bg-indigo-50 rounded-3xl p-8 sm:p-12 text-center dark:bg-trueGray-900">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 dark:text-gray-100">
                  Want more insights?
                </h2>
                <p className="text-gray-600 mb-8 dark:text-gray-400">
                  Contact us today to learn more about our services and how we
                  can help you in the precious metals market.
                </p>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-3 font-medium text-white bg-indigo-600 rounded-full hover:bg-indigo-700 transition dark:bg-indigo-600 dark:hover:bg-indigo-500"
                >
                  Get in Touch
                </a>
              </div>
            </div>

            <div className="mt-12 text-center">
              <a
                href="/blog"
                className="text-indigo-600 font-medium hover:text-indigo-500 inline-flex items-center gap-2 dark:text-indigo-400"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                  />
                </svg>
                Back to Blog
              </a>
            </div>
          </div>
        </Container>
      </article>

      <Footer />
    </>
  );
}

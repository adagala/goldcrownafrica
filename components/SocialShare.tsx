"use client";

import React, { useState } from "react";

interface SocialShareProps {
  url: string;
  title: string;
  excerpt: string;
}

const SocialShare: React.FC<SocialShareProps> = ({ url, title, excerpt }) => {
  const [showCopied, setShowCopied] = useState(false);

  // Encode URL and text for sharing
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  // Social share URLs
  const shareUrls = {
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
  };

  // Native share handler
  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: title,
          text: excerpt,
          url: url,
        });
      } catch (error) {
        // User cancelled or error occurred
        console.log("Share cancelled or error:", error);
      }
    } else {
      // Fallback: copy to clipboard
      try {
        await navigator.clipboard.writeText(url);
        setShowCopied(true);
        setTimeout(() => setShowCopied(false), 2000);
      } catch (error) {
        console.log("Failed to copy:", error);
      }
    }
  };

  return (
    <div className="mt-12 pt-8 border-t border-gray-100 dark:border-trueGray-800">
      <div className="flex flex-col items-center gap-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
          Share this article
        </h3>
        <div className="flex flex-wrap items-center justify-center gap-3">
          {/* Twitter Share Button */}
          <a
            href={shareUrls.twitter}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Share on Twitter"
            className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 hover:bg-indigo-100 dark:bg-trueGray-800 dark:hover:bg-indigo-900/30 transition-colors group"
          >
            <svg
              className="w-5 h-5 text-gray-700 group-hover:text-indigo-600 dark:text-gray-400 dark:group-hover:text-indigo-400 transition-colors"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>

          {/* Facebook Share Button */}
          <a
            href={shareUrls.facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Share on Facebook"
            className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 hover:bg-indigo-100 dark:bg-trueGray-800 dark:hover:bg-indigo-900/30 transition-colors group"
          >
            <svg
              className="w-5 h-5 text-gray-700 group-hover:text-indigo-600 dark:text-gray-400 dark:group-hover:text-indigo-400 transition-colors"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                clipRule="evenodd"
              />
            </svg>
          </a>

          {/* LinkedIn Share Button */}
          <a
            href={shareUrls.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Share on LinkedIn"
            className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 hover:bg-indigo-100 dark:bg-trueGray-800 dark:hover:bg-indigo-900/30 transition-colors group"
          >
            <svg
              className="w-5 h-5 text-gray-700 group-hover:text-indigo-600 dark:text-gray-400 dark:group-hover:text-indigo-400 transition-colors"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>

          {/* Native Share / Copy Link Button */}
          <button
            onClick={handleNativeShare}
            aria-label="Share or copy link"
            className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 hover:bg-indigo-100 dark:bg-trueGray-800 dark:hover:bg-indigo-900/30 transition-colors group relative"
          >
            {showCopied ? (
              <svg
                className="w-5 h-5 text-green-600 dark:text-green-400"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
            ) : (
              <svg
                className="w-5 h-5 text-gray-700 group-hover:text-indigo-600 dark:text-gray-400 dark:group-hover:text-indigo-400 transition-colors"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
                />
              </svg>
            )}
          </button>
        </div>
        {showCopied && (
          <p className="text-sm text-green-600 dark:text-green-400 font-medium">
            Link copied to clipboard!
          </p>
        )}
      </div>
    </div>
  );
};

export default SocialShare;

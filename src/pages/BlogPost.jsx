
import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  ArrowLeft,
  CalendarDays,
  BookOpen,
  Facebook,
  Linkedin,
  MessageCircle,
  Link as LinkIcon,
  Share2,
  Check,
} from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import blogPosts from './blogData/blogPosts.json';

const SITE_URL = 'https://sellarodigitec.com';

const BlogPost = () => {
  const { slug } = useParams();
  const [copied, setCopied] = useState(false);

  const post = blogPosts.find(
    (article) =>
      article.slug === slug && article.status === 'published'
  );

  if (!post) {
    return (
      <section className="min-h-screen bg-slate-50 px-5 py-20">
        <div className="mx-auto max-w-3xl rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm sm:p-12">
          <BookOpen
            size={36}
            className="mx-auto mb-5 text-orange-500"
          />

          <h1 className="text-3xl font-bold text-slate-900">
            Article not found
          </h1>

          <p className="mt-4 leading-7 text-slate-600">
            This article may not be published yet or the URL may be incorrect.
          </p>

          <Link
            to="/blog"
            className="mt-7 inline-flex items-center gap-2 font-semibold text-orange-600 hover:text-orange-700"
          >
            <ArrowLeft size={17} />
            Back to blog
          </Link>
        </div>
      </section>
    );
  }

  const canonicalUrl = `${SITE_URL}/blog/${post.slug}`;

  // Keep the featured image local to the current environment.
  // Use the absolute URL only for social-sharing metadata.
  const imageUrl = post.image
    ? new URL(post.image, `${SITE_URL}/`).href
    : null;

  const formattedDate = post.publishedAt
    ? new Date(`${post.publishedAt}T00:00:00Z`).toLocaleDateString(
        'en-GB',
        {
          day: 'numeric',
          month: 'long',
          year: 'numeric',
          timeZone: 'UTC',
        }
      )
    : null;

  const handleCopyLink = async () => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(canonicalUrl);
      } else {
        const textArea = document.createElement('textarea');
        textArea.value = canonicalUrl;
        textArea.setAttribute('readonly', '');
        textArea.style.position = 'fixed';
        textArea.style.opacity = '0';
        document.body.appendChild(textArea);
        textArea.select();

        const successful = document.execCommand('copy');
        document.body.removeChild(textArea);

        if (!successful) {
          throw new Error('Copy command failed');
        }
      }

      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Unable to copy article URL:', error);
    }
  };

  const shareText = `${post.title} ${canonicalUrl}`;

  const shareLinks = [
    {
      name: 'Facebook',
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(canonicalUrl)}`,
      icon: Facebook,
      hover: 'hover:border-blue-500 hover:text-blue-600',
    },
    {
      name: 'LinkedIn',
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(canonicalUrl)}`,
      icon: Linkedin,
      hover: 'hover:border-sky-600 hover:text-sky-700',
    },
    {
      name: 'WhatsApp',
      href: `https://wa.me/?text=${encodeURIComponent(shareText)}`,
      icon: MessageCircle,
      hover: 'hover:border-green-500 hover:text-green-600',
    },
    {
      name: 'X',
      href: `https://twitter.com/intent/tweet?url=${encodeURIComponent(canonicalUrl)}&text=${encodeURIComponent(post.title)}`,
      icon: Share2,
      hover: 'hover:border-slate-500 hover:text-slate-900',
    },
  ];

  const renderBlock = (block, index) => {
    switch (block.type) {
      case 'paragraph':
        return (
          <p
            key={index}
            className="mb-6 text-base leading-8 text-slate-700 last:mb-0"
          >
            {block.text}
          </p>
        );

      case 'heading': {
        const headingClass =
          'mb-4 mt-10 font-bold leading-snug text-slate-900';

        if (block.level === 3) {
          return (
            <h3
              key={index}
              className={`${headingClass} text-xl`}
            >
              {block.text}
            </h3>
          );
        }

        return (
          <h2
            key={index}
            className={`${headingClass} text-2xl sm:text-3xl`}
          >
            {block.text}
          </h2>
        );
      }

      case 'list':
        return (
          <ul
            key={index}
            className="mb-7 list-disc space-y-3 pl-6 text-base leading-7 text-slate-700 marker:text-orange-500"
          >
            {(block.items || []).map((item, itemIndex) => (
              <li key={itemIndex}>{item}</li>
            ))}
          </ul>
        );

      default:
        return null;
    }
  };

  return (
    <article className="min-h-screen bg-slate-50">
      <Helmet>
        <title>{post.title} | Sellaro Digitec</title>

        <meta name="description" content={post.description} />
        <meta name="robots" content="index, follow" />

        <link rel="canonical" href={canonicalUrl} />

        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Sellaro Digitec" />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.description} />
        <meta property="og:url" content={canonicalUrl} />

        {imageUrl && (
          <meta property="og:image" content={imageUrl} />
        )}

        {imageUrl && (
          <meta
            property="og:image:alt"
            content={post.imageAlt || post.title}
          />
        )}

        {post.publishedAt && (
          <meta
            property="article:published_time"
            content={`${post.publishedAt}T00:00:00Z`}
          />
        )}

        {post.updatedAt && (
          <meta
            property="article:modified_time"
            content={`${post.updatedAt}T00:00:00Z`}
          />
        )}

        <meta
          name="twitter:card"
          content={imageUrl ? 'summary_large_image' : 'summary'}
        />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.description} />

        {imageUrl && (
          <meta name="twitter:image" content={imageUrl} />
        )}
      </Helmet>

      {/* Article header */}
      <header className="bg-blueprint-grid px-5 py-12 sm:px-8 sm:py-16">
        <div className="mx-auto max-w-4xl">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 font-semibold text-orange-600 hover:text-orange-700"
          >
            <ArrowLeft size={17} />
            All articles
          </Link>

          <div className="mt-8">
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-orange-600">
              {post.category}
            </p>

            <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              {post.title}
            </h1>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              {post.description}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-slate-500">
              <span>{post.author}</span>

              {formattedDate && (
                <>
                  <span className="text-slate-300" aria-hidden="true">
                    •
                  </span>

                  <time
                    dateTime={post.publishedAt}
                    className="inline-flex items-center gap-2"
                  >
                    <CalendarDays size={16} />
                    {formattedDate}
                  </time>
                </>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Article content and social sharing */}
      <div className="mx-auto max-w-4xl px-5 py-12 sm:px-8 sm:py-16">
        {post.image && (
          <img
            src={post.image}
            alt={post.imageAlt || post.title}
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className="mb-10 max-h-[480px] w-full rounded-2xl border border-slate-200 bg-white object-cover shadow-sm"
          />
        )}

        <div className="glass-panel rounded-2xl p-6 sm:p-10 lg:p-12">
          {(post.content || []).map(renderBlock)}
        </div>

        {/* Social sharing */}
        <section
          aria-labelledby="share-article-heading"
          className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
        >
          <div className="flex items-start gap-3">
            <Share2
              className="mt-1 h-6 w-6 shrink-0 text-orange-500"
              aria-hidden="true"
            />

            <div>
              <h2
                id="share-article-heading"
                className="text-xl font-bold text-slate-900"
              >
                Found this article helpful?
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Share it with your network and help other businesses discover
                useful ecommerce insights.
              </p>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            {shareLinks.map(({ name, href, icon: Icon, hover }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Share this article on ${name}`}
                className={`inline-flex items-center gap-2 rounded-lg border border-slate-200 px-4 py-3 font-medium text-slate-700 transition ${hover}`}
              >
                <Icon size={18} aria-hidden="true" />
                {name}
              </a>
            ))}

            <button
              type="button"
              onClick={handleCopyLink}
              className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-4 py-3 font-medium text-white transition hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
              aria-label="Copy article link"
            >
              {copied ? (
                <Check size={18} aria-hidden="true" />
              ) : (
                <LinkIcon size={18} aria-hidden="true" />
              )}
              {copied ? 'Link copied' : 'Copy link'}
            </button>
          </div>

          <p className="mt-4 break-all text-xs text-slate-400">
            {canonicalUrl}
          </p>
        </section>

        <div className="mt-8 text-center">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 font-semibold text-orange-600 hover:text-orange-700"
          >
            <ArrowLeft size={17} />
            Explore more articles
          </Link>
        </div>
      </div>

      {/* Full-width CTA: outside the article reading column */}
      <section className="mx-auto w-full max-w-7xl px-5 pb-16 sm:px-8">
        <div className="rounded-2xl bg-slate-900 p-8 text-white sm:p-10 lg:p-12">
          <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div className="max-w-3xl">
              <h2 className="text-2xl font-bold sm:text-3xl">
                Need support with your ecommerce business?
              </h2>

              <p className="mt-4 text-base leading-7 text-slate-300">
                Explore Sellaro Digitec&apos;s marketplace management and
                digital services to see how we can support your goals.
              </p>
            </div>

            <Link
              to="/services"
              className="inline-flex shrink-0 items-center gap-3 rounded-lg bg-orange-500 px-6 py-4 font-semibold text-white transition hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:ring-offset-2 focus:ring-offset-slate-900"
            >
              Explore our services
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
};

export default BlogPost;

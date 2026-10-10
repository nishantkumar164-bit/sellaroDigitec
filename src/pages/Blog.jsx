
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, CalendarDays } from 'lucide-react';
import blogPosts from './blogData/blogPosts.json';

const Blog = () => {
  const publishedPosts = blogPosts
    .filter((post) => post.status === 'published')
    .sort(
      (a, b) =>
        new Date(b.publishedAt) - new Date(a.publishedAt)
    );

  return (
    <section className="relative min-h-screen overflow-hidden bg-slate-50">
      {/* Subtle background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-blueprint-grid"
      />
      <div
        aria-hidden="true"
        className="glow-orb-gold pointer-events-none absolute -right-32 top-10 h-96 w-96 rounded-full"
      />

      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        {/* Blog introduction */}
        <header className="mx-auto mb-14 max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-orange-100 bg-white px-4 py-2 text-sm font-semibold text-orange-600 shadow-sm">
            <BookOpen size={16} />
            Sellaro Digitec Insights
          </div>

          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Ecommerce Insights,
            <span className="mt-2 block text-brand-gradient">
              Guides &amp; Strategies
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            Practical guides on marketplace management, ecommerce
            operations, and digital marketing to help your business
            grow online.
          </p>

          <div className="mx-auto mt-8 h-1 w-20 rounded-full bg-orange-500" />
        </header>

        {/* Article listing */}
        {publishedPosts.length === 0 ? (
          <div className="glass-panel mx-auto max-w-3xl rounded-2xl p-8 text-center sm:p-12">
            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-50 text-orange-600">
              <BookOpen size={26} />
            </div>

            <h2 className="text-2xl font-bold text-slate-900">
              Articles coming soon
            </h2>

            <p className="mx-auto mt-3 max-w-xl leading-7 text-slate-600">
              We're preparing practical ecommerce guides and
              marketplace insights. Check back soon for useful
              strategies to support your business.
            </p>
          </div>
        ) : (
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {publishedPosts.map((post) => (
              <article
                key={post.slug}
                className="glass-panel group flex h-full flex-col overflow-hidden rounded-2xl"
              >
                {post.image && (
                  <Link
                    to={`/blog/${post.slug}`}
                    aria-label={`Read ${post.title}`}
                    className="block overflow-hidden"
                  >
                    <img
                      src={post.image}
                      alt={post.imageAlt || post.title}
                      className="h-52 w-full object-cover transition duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </Link>
                )}

                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-4 flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-wide text-orange-600">
                    <span>{post.category}</span>
                    <span className="text-slate-300">•</span>
                    <span className="inline-flex items-center gap-1.5 text-slate-500">
                      <CalendarDays size={14} />
                      {new Date(post.publishedAt).toLocaleDateString(
                        'en-GB',
                        {
                          day: 'numeric',
                          month: 'short',
                          year: 'numeric',
                          timeZone: 'UTC',
                        }
                      )}
                    </span>
                  </div>

                  <h2 className="text-xl font-bold leading-snug text-slate-900 transition group-hover:text-orange-600">
                    {post.title}
                  </h2>

                  <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">
                    {post.description}
                  </p>

                  <Link
                    to={`/blog/${post.slug}`}
                    className="mt-6 inline-flex items-center gap-2 font-semibold text-orange-600 transition hover:gap-3 hover:text-orange-700"
                  >
                    Read article
                    <ArrowRight size={17} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Blog;

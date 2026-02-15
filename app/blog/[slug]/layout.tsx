import type { Metadata } from 'next';
import { blogPosts } from '@/data/blog';
import { SITE_CONFIG } from '@/lib/seo';

interface BlogSlugLayoutProps {
  children: React.ReactNode;
  params: { slug: string };
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) {
    return { title: 'Article Not Found' };
  }

  const title = post.title;
  const description = post.excerpt;
  const url = `${SITE_CONFIG.url}/blog/${post.slug}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      type: 'article',
      publishedTime: post.publishedAt,
      authors: [post.author],
    },
  };
}

export default function BlogSlugLayout({ children }: BlogSlugLayoutProps) {
  return children;
}

import { sanitizeHTML } from '@/lib/sanitize'
import { GET_SINGLE_POST } from '@/lib/queries'
import { BlogPost } from '@/lib/types'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import styles from './BlogPost.module.css'
import Avatar from '@/components/ui/Avatar/Avatar'
import dummyData from '@/data/dummy-posts.json'

async function getSinglePost(slug: string): Promise<BlogPost | null> {
  // Use local dummy data if no endpoint is configured
  if (!process.env.HYGRAPH_ENDPOINT) {
    console.log('HYGRAPH_ENDPOINT not configured, using local dummy data')
    const post = dummyData.blogPosts.find(p => p.blogPostSlug === slug)
    return post || null
  }

  try {
    const response = await fetch(process.env.HYGRAPH_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: GET_SINGLE_POST,
        variables: { slug }
      }),
      next: { revalidate: 3600 }
    })

    if (!response.ok) {
      console.error(`Failed to fetch post: ${response.status}`)
      return null
    }

    const json = await response.json()

    if (json.errors) {
      console.error(`GraphQL errors: ${JSON.stringify(json.errors)}`)
      return null
    }

    return json.data?.blogPost || null
  } catch (error) {
    console.error('Error fetching blog post:', error)
    return null
  }
}

export default async function BlogPostPage({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = await getSinglePost(slug)

  if (!post) {
    notFound()
  }

  const authorName = post.createdBy?.name || 'Anonymous'
  const postDate = post.createdAt
    ? new Date(post.createdAt).toLocaleDateString()
    : 'Date unknown'
  const htmlContent = post.blogPostContent?.html || ''

  return (
    <div className="max-w-4xl mx-auto px-6 py-8">
      <article>
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">
            {post.blogTitle || 'Untitled Post'}
          </h1>
          <div className="flex items-center space-x-3 text-lg text-gray-600 dark:text-gray-400">
            <Avatar name={authorName} size="sm" />
            <span>By {authorName} • {postDate}</span>
          </div>
        </header>

        <div
          className={styles.blogContent}
          dangerouslySetInnerHTML={{ __html: sanitizeHTML(htmlContent) }}
        />
      </article>
      
      <div className="mt-12 pt-8 border-t border-border">
        <Link 
          href="/blog" 
          className="inline-flex items-center space-x-2 px-4 py-2 bg-transparent text-muted hover:text-primary transition-colors duration-200 hover:bg-primary/5 rounded-lg"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span>Back to Blog</span>
        </Link>
      </div>
    </div>
  )
}
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { getAllPost } from '@/lib/mdx';

const Articles = async () => {
    const posts = await getAllPost();
    return (
        < div className='mx-2 flex flex-col items-center justify-center'>
            {
                posts.map((post, index) => (
                    <Link href={`/posts/${post.slug}`} key={index}>
                        <div className='mb-12 flex max-w-2xl items-center justify-between rounded-lg bg-slate-300/10 p-4'>
                            <Image
                                src={post.fontMatter.image}
                                alt={post.fontMatter.title}
                                width={150}
                                height={100}
                                className='rounded-lg'
                            />
                            <div className='ml-4'>
                                <h2 className='font-semibold'>
                                    {post.fontMatter.title}
                                </h2>
                                <p className='text-sm'>{post.fontMatter.excerpt}</p>
                            </div>
                        </div>
                    </Link>
                ))}
        </div>
    )
}

export default Articles

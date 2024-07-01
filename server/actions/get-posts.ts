'use client';

import { db } from '@/server';


export default async function getPosts() {
    const posts = await db.query.users.findMany();
    if (posts.length === 0) 
        return {error: 'No posts found'};
     
    return posts;
}
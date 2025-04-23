import React from 'react';
import './Scroll.css';
import gohan from './assets/gohan.jpg';
import picolo from './assets/picolo.jpg';
import goku from './assets/goku.jpg';
import browsecomp from './assets/browsecomp.jpg';
import Research from './assets/Research.jpg';

const Scroll = () => {
    const blogPosts = [
    {
        id: 1,
        title: "Introducing 4o Image Generation",
        category: "Product",
        readTime: "6 min read",
        imageUrl: gohan
    },
    {
        id: 2,
        title: "OpenAI o3 and o4-mini",
        category: "Research", 
        readTime: "8 min read",
        imageUrl: picolo
    },
    {
        id: 3,
        title: "Latest AI Developments",
        category: "Technology",
        readTime: "5 min read",
        imageUrl: goku
    },
    {
        id: 4,
        title: "BrowseComp: a benchmark for browsing agents",
        category: "Research",
        readTime: "7 min read",
        imageUrl: browsecomp
    },
    {
        id: 5,
        title: "PaperBench: Evaluating AI's Ability to Replicate AI Research",
        category: "Research", 
        readTime: "10 min read",
        imageUrl: Research
    }
    ];

    return (
    <div className="blog-posts">
        {blogPosts.map(post => (
        <article key={post.id} className="post-card">
            <div className="post-image">
            <img src={post.imageUrl} alt={post.title} />
            </div>
            <div className="post-content">
            <h2>{post.title}</h2>
            <div className="post-meta">
                <span className="category">{post.category}</span>
                <span className="read-time">{post.readTime}</span>
            </div>
            </div>
        </article>
        ))}
    </div>
    );
};

export default Scroll;
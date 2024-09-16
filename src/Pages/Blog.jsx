import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { Link } from 'react-router-dom';


const Blog = () => {
    return (
        <div>
            <>
                {/* Header */}
                <header className="bg-primary text-white text-center py-3">
                    <div className="container">
                        <h1>My Blog</h1>
                        <p>Your daily dose of interesting reads</p>
                    </div>
                </header>
                {/* Navigation */}
                <Header />
                {/* Main Content */}
                <main className="container my-5">
                    <div className="row">
                        {/* Blog Posts */}
                        <div className="col-md-8">
                            {/* Loop to generate blog posts */}
                            {/* For demonstration, we'll hard-code 40 blog posts */}
                            {/* Single Blog Post */}
                            {/* This block will be repeated 40 times */}
                            {/* Example blog post template */}
                            {/* Repeat this block 40 times */}
                            {/* Use a server-side loop or JavaScript to automate this in a real project */}
                            <article className="mb-4">
                                <h2 className="mb-3">Blog Post Title</h2>
                                <p className="text-muted">
                                    Posted on September 14, 2024 by <a href="#">Author</a>
                                </p>
                                <img
                                    src="https://via.placeholder.com/800x400"
                                    alt="Blog Image"
                                    className="img-fluid mb-3"
                                />
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Pellentesque dignissim ligula eget ligula scelerisque, nec laoreet
                                    purus tincidunt.
                                </p>
                                <Link to="/BlogDetails" className="btn btn-primary">
                                    Read More
                                </Link>
                            </article>
                            {/* Repeat above block as needed for 40 blog posts */}
                            {/* Repeating the block 40 times for demo purposes */}
                            {/* To simplify, we'll use the same content for each post */}
                            {/* In a real-world scenario, this would be dynamically generated */}
                            {/* Example for repetition */}
                            {/* Copy and paste the block below until you have 40 posts */}
                            {/* For brevity, only a few are shown here. Repeat this block as needed. */}
                            {/* Start of repetitive blog post blocks */}
                            <article className="mb-4">
                                <h2 className="mb-3">Blog Post Title 1</h2>
                                <p className="text-muted">
                                    Posted on September 14, 2024 by <a href="#">Author</a>
                                </p>
                                <img
                                    src="https://via.placeholder.com/800x400"
                                    alt="Blog Image"
                                    className="img-fluid mb-3"
                                />
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Pellentesque dignissim ligula eget ligula scelerisque, nec laoreet
                                    purus tincidunt.
                                </p>
                                <a href="#" className="btn btn-primary">
                                    Read More
                                </a>
                            </article>
                            <article className="mb-4">
                                <h2 className="mb-3">Blog Post Title 2</h2>
                                <p className="text-muted">
                                    Posted on September 13, 2024 by <a href="#">Author</a>
                                </p>
                                <img
                                    src="https://via.placeholder.com/800x400"
                                    alt="Blog Image"
                                    className="img-fluid mb-3"
                                />
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Pellentesque dignissim ligula eget ligula scelerisque, nec laoreet
                                    purus tincidunt.
                                </p>
                                <a href="#" className="btn btn-primary">
                                    Read More
                                </a>
                            </article>
                            {/* Repeat as needed until you reach 40 blog posts */}
                            {/* End of repetitive blog post blocks */}
                        </div>
                        {/* Sidebar */}
                        <aside className="col-md-4">
                            <div className="card mb-4">
                                <div className="card-header">About Me</div>
                                <div className="card-body">
                                    <p>
                                        Hello! I’m a passionate blogger sharing insights on various
                                        topics. Follow along for interesting reads and updates.
                                    </p>
                                </div>
                            </div>
                            <div className="card mb-4">
                                <div className="card-header">Recent Posts</div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">
                                        <a href="#">Blog Post Title</a>
                                    </li>
                                    <li className="list-group-item">
                                        <a href="#">Another Blog Post Title</a>
                                    </li>
                                    <li className="list-group-item">
                                        <a href="#">Yet Another Post</a>
                                    </li>
                                </ul>
                            </div>
                        </aside>
                    </div>
                    {/* Pagination */}
                    <nav aria-label="Page navigation example">
                        <ul className="pagination justify-content-center">
                            <li className="page-item disabled">
                                <span className="page-link">Previous</span>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="#">
                                    1
                                </a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="#">
                                    2
                                </a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="#">
                                    3
                                </a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="#">
                                    Next
                                </a>
                            </li>
                        </ul>
                    </nav>
                </main>
                {/* Footer */}
                <Footer />
            </>


        </div>
    );
}

export default Blog;

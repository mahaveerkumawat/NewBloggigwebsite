import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const BlogDetails = () => {
    return (
        <div>
              <>
                {/* Header */}
                <header className="bg-primary text-white text-center py-3">
                    <div className="container">
                        <h1>My BlogDetails</h1>
                        <p>Your daily dose of interesting reads</p>
                    </div>
                </header>
                {/* Navigation */}
             <Header/>
                {/* Main Content */}
                <main className="container my-5">
                    <div className="row">
                        {/* Blog Posts */}
                        <div className="col-md-8">
                            {/* Loop to generate blog posts */}
                            {/* Replace this with a server-side loop or JavaScript to dynamically generate posts */}
                            {/* For demonstration, 40 blog posts are hard-coded */}
                            {/* Single Blog Post */}
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
                                <a href="#" className="btn btn-primary">
                                    Read More
                                </a>
                            </article>
                            {/* Repeat the above <article> block for each blog post */}
                            {/* ... */}
                            {/* Repeat the above block 40 times for demonstration */}
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
                <Footer/>
            </>
        </div>
    );
}

export default BlogDetails;

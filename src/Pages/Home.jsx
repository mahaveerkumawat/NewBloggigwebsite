import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const Home = () => {
    return (
        <div>
            <>
                {/* Header */}
                <header className="bg-primary text-white text-center py-3">
                    <div className="container">
                        <h1>Home page</h1>
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
                                    purus tincidunt. Nullam convallis, elit nec aliquam ultricies,
                                    sapien ligula fermentum erat, ac ultricies nulla libero at urna.
                                </p>
                                <a href="#" className="btn btn-primary">
                                    Read More
                                </a>
                            </article>
                            <article className="mb-4">
                                <h2 className="mb-3">Another Blog Post Title</h2>
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
                                    purus tincidunt. Nullam convallis, elit nec aliquam ultricies,
                                    sapien ligula fermentum erat, ac ultricies nulla libero at urna.
                                </p>
                                <a href="#" className="btn btn-primary">
                                    Read More
                                </a>
                            </article>
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
                </main>
                {/* Footer */}
                <Footer/>
            </>

        </div>
    );
}

export default Home;

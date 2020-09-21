import React from 'react';
import Link from 'next/link';
import Moment from 'react-moment';
import './styles.scss';

const Card = ({ post }) => {
    const bannerUrl =
        process.env.NODE_ENV !== 'development'
            ? post.banner.url
            : process.env.API_URL + post.banner.url;
    return (
        <div className="col col-lg-4 col-md-6">
            <div className="card">
                <div className="card__img">
                    <Link href='posts/[id]' as={`/posts/${post.path}`}>
                        <a><img className="picture" src={bannerUrl} alt={post.banner.url} /> </a>
                    </Link>
                    <div className="card__category">
                        <a className="text">Javascript</a>
                    </div>
                </div>
                <div className="card__content">
                    <h2 className="title">
                        <Link href='posts/[id]' as={`/posts/${post.path}`}>
                            <a className="link-reset">{post.title}</a>
                        </Link>
                    </h2>
                    <section className="author">
                        <div className="avatar">
                            <img className="col-100p" src="https://res.cloudinary.com/restaff/image/upload/v1599368841/avatar/avatar_xas6er.jpg" />
                        </div>
                        <span className="name">Quân Duy</span>
                        <span className="daytime">
                            <i className="fa fa-calendar"></i><Moment format="DD/MM/YYYY">{post.published_at}</Moment>
                        </span>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Card;
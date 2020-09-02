import { useRouter } from 'next/router';
import Render from '../../resources/components/render';
import ReactMarkdown from 'react-markdown';
import Moment from 'react-moment';
import POST_QUERY from '../../resources/graphql/post/post';

const Post = () => {
    const router = useRouter();
    return (
        <Render query={POST_QUERY} id={router.query.id}>
            {({ data: { post } }) => {
                const bannerUrl =
                    process.env.NODE_ENV !== 'development'
                        ? post.banner.url
                        : process.env.API_URL + post.banner.url;
                return (
                    <div>
                        <div
                            id="banner"
                            className="uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light uk-padding uk-margin"
                            data-src={bannerUrl}
                            data-srcset={bannerUrl}
                            data-uk-img>
                            <h1>{post.title}</h1>
                        </div>

                        <div className="uk-section">
                            <div className="uk-container uk-container-small">
                                <ReactMarkdown source={post.content} escapeHtml={false} />
                                <p>
                                    <Moment format="MMM Do YYYY">
                                        {post.published_at}
                                    </Moment>
                                </p>
                            </div>
                        </div>
                    </div>
                );
            }}
        </Render>
    );
};

export default Post;
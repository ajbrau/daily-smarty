import React, { Component } from 'react';

class RecentPosts extends Component {
    render() {
        return (
            <div className="recent-posts">
                <div className="recent-posts_wrapper">
                    <div className="recent-posts_heading">Recent Posts</div>
                        <ul className="recent-posts_posts">
                            <li>recent post one</li>
                            <li>recent post one</li>
                            <li>recent post one</li>
                        </ul>
                </div>   
            </div>
        );
    }
}

export default RecentPosts;

import {Reviews} from "@/app/product_page/types/product_page_types";
import Image from "next/image";

type ReviewComponentProps = {
    review: Reviews;
};

/* Updated ReviewComponent.jsx */
export function ReviewComponent({ review }: ReviewComponentProps) {
    return (
        <div className="review-card">
            <div className="user-profile">
                <div className="avatar-wrapper">
                    <Image src="/user/avatar.png" alt="avatar" width={34} height={34} /> {/*//TODO: change to user avatar*/}
                </div>
                <div className="user-info-row">
                    <span className="author-badge">By Kingston</span>
                    <span className="review-date">on October 16, 2017</span>
                </div>
            </div>

            <div className="rating-row">
                <div className="stars">
                    {Array.from({ length: 5 }, (_, i) => (
                        <img
                            key={i}
                            src={i < Math.round(review.rating) ? '/filled_star.svg' : '/unfilled_star.svg'}
                            alt="star"
                            width={16}
                            height={16}
                        />
                    ))}
                </div>
                <span className="review-title">{review.title}</span>
            </div>

            <div className="verified-purchase">Verified Purchase</div>

            <div className="review-content-layout">
                <div className="review-visuals">
                    {review.videos?.map((video, index) => (
                        <div key={index} className="review-video-wrapper">
                            <div className="video-placeholder">
                                {video}
                                <div className="play-button-overlay">▶</div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="review-text-column">
                    <p className="main-text">{review.text}</p>
                    {review.editedText && (
                        <p className="edited-text">
                            <span className="edit-label">EDIT:</span> {review.editedText}
                        </p>
                    )}
                </div>
            </div>

            <div className="review-footer">
                <p className="helpful-count">{review.helpfulMarks} people found this helpful</p>
                <div className="action-buttons">
                    <button className="helpful-btn">Helpful</button>
                    <div className="divider"></div>
                    <button className="report-btn">Report abuse</button>
                </div>
            </div>
        </div>
    );
}
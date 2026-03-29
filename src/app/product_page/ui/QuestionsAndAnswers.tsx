import {ProductQuestion} from "@/app/product_page/types/product_page_types";
import Image from "next/image";
import {useState} from "react";

export function QuestionsAndAnswers({ question }: { question: ProductQuestion }) {

    const initialLimit = 3;
    const step = 2;

    const [limit, setLimit] = useState(initialLimit);

    const showMore = () => setLimit(prev => Math.min(prev + step, question.answers.length));
    const showAll = () => setLimit(question.answers.length);
    const reset = () => setLimit(initialLimit);

    const visibleAnswers = question.answers.slice(0, limit);

    return(
        <div className="question-row">
            <div className="votes-column">
                <button className="vote-arrow"><Image src="/product_page/vote_up.png" width={15} height={10} alt="up"/></button>
                <div className="vote-count">{question.votes}</div>
                <div className="vote-label">votes</div>
                <button className="vote-arrow"><Image src="/product_page/vote_down.png" width={15} height={10} alt="down"/></button>
            </div>

            <div className="content-column">
                <div className="qa-item">
                    <span className="label">Question:</span>
                    <span className="question-text">{question.question}</span>
                </div>

                <div className="qa-item">
                    <span className="label">Answer:</span>
                    <div className="answers-list">
                        {visibleAnswers.map((answer, index) => (
                            <div key={index} className="answer-block">
                                <p className="answer-text">{answer.text}</p>
                                <div className="answer-meta">
                                    <span className="author">By {answer.authorName}</span>
                                    <span className="date">on {answer.createdAt}</span>
                                </div>
                            </div>
                        ))}

                        {question.answers.length > initialLimit && (
                            <div className="answers-controls">
                                <button className="control-arrow-btn" onClick={limit > initialLimit ? reset : undefined}>
                                    <i className={limit > initialLimit ? "up" : "down"}></i>
                                </button>
                                <button className="see-more-link" onClick={showAll}>
                                    See more answers ({question.answers.length})
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
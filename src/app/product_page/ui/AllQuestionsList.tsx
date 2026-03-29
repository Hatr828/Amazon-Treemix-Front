import { useState } from "react";
import { QuestionsAndAnswers } from "./QuestionsAndAnswers";
import { ProductQuestion } from "@/app/product_page/types/product_page_types";

export function AllQuestionsList({ allQuestions }: { allQuestions: ProductQuestion[] }) {
    const [qLimit, setQLimit] = useState(5);

    const visibleQuestions = allQuestions.slice(0, qLimit);
    const hasMoreQuestions = allQuestions.length > qLimit;

    return (
        <div className="all_questions_container">
            {visibleQuestions.map((q, index) => (
                <QuestionsAndAnswers key={q.id || index} question={q} />
            ))}

            {hasMoreQuestions && (
                <button
                    className="see_more_questions_full"
                    onClick={() => setQLimit(allQuestions.length)}
                >
                    See more answered questions ({allQuestions.length})
                </button>
            )}
        </div>
    );
}
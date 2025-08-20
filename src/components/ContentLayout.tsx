import { LIST } from "../constants";
import type { ReactNode } from "react";

// 카테고리 섹션 컴포넌트
interface CategorySectionProps {
  title: string;
  children: ReactNode;
}

const CategorySection = ({ title, children }: CategorySectionProps) => {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">{title}</h2>
      <div className="space-y-4">{children}</div>
    </section>
  );
};

// 질문/답변 아이템 컴포넌트
interface QuestionItemProps {
  question: string;
  answer?: string;
  children?: ReactNode;
}

const QuestionItem = ({ question, answer, children }: QuestionItemProps) => {
  return (
    <div className="border rounded-lg p-4 bg-white shadow-sm">
      <h3 className="font-semibold text-lg mb-2 text-gray-700">{question}</h3>
      {answer && <div className="text-gray-600 leading-relaxed">{answer}</div>}
      {children && <div className="mt-3">{children}</div>}
    </div>
  );
};

export default function ContentLayout() {
  return (
    <div className="max-w-6xl mx-auto p-6 bg-gray-50 min-h-screen">
      {LIST.map((item, idx) => (
        <CategorySection key={idx} title={item.category}>
          {item.data.map((questionData, questionIdx) => (
            <QuestionItem
              key={questionIdx}
              question={questionData.question}
              answer={questionData.answer}
            >
              {/* 추가 정보 표시 */}
              <div className="flex gap-4 text-sm text-gray-500 mt-2">
                <span>난이도: {questionData.difficulty}/5</span>
                <span>중요도: {questionData.importance}/5</span>
              </div>
            </QuestionItem>
          ))}
        </CategorySection>
      ))}
    </div>
  );
}

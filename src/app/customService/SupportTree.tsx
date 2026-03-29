"use client";

import "./customServ.css";
import { useState } from "react";
import { SupportNode } from "./data";

type Props = {
  tree: SupportNode;
};

export default function SupportTree({ tree }: Props) {
  const [currentNode, setCurrentNode] = useState<SupportNode>(tree);

  if (currentNode.answer) {
    return (
      <div>
        <div className="div-for-pick">
          <span style={{ marginBottom: "2vw" }}>{currentNode.title}</span>
          <span className="text-description-service">{currentNode.answer}</span>
          <button className="need-help-button" onClick={() => setCurrentNode(tree)}>
            I need more help
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="div-for-pick">
      <span style={{ marginBottom: "2vw" }}>Pick what you need help with</span>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "1vw" }}>
          {currentNode.children?.map((item) => (
            <div key={item.id} className="div-pick" onClick={() => setCurrentNode(item)}>
              {item.title}
              <i className="bi bi-chevron-right" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

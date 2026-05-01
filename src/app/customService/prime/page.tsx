"use client";

import "../customServ.css";
import "../../../components/HomePage/HomePage.css";
import { useRouter } from "next/navigation";
import SupportTree from "../SupportTree";
import { internationalTree } from "../data";

export default function Prime() {
  const router = useRouter();
  return (
    <div>
      <div className="div-for-icon-text-i">
        <div className="div-for-icon-i">
          <i className="bi bi-star icon-in-pages"></i>
        </div>
        Prime
      </div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <SupportTree tree={internationalTree} />
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="div-recommendations">
          See personalized recommendations
          <button
            className="button-recommendations"
            type="button"
            onClick={() => router.push("/auth?mode=login")}
          >
            Sign in
          </button>
          <div className="div-customer-text">
            New Customer?
            <button
              className="div-start-here"
              type="button"
              onClick={() => router.push("/auth?mode=signup")}
            >
              Start here.
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import CertificationCard from "./CertificationCard";

const Certification = () => {
  return (
    <div className="certifi_bx">
      <div className="certifi_title">
        <h2>공부인증</h2>
        <button>게시글 작성</button>
      </div>

      <div className="certifi_card_bx">
        <CertificationCard></CertificationCard>
        <CertificationCard></CertificationCard>
        <CertificationCard></CertificationCard>
        <CertificationCard></CertificationCard>
        <CertificationCard></CertificationCard>
        <CertificationCard></CertificationCard>
      </div>

      <div className="certifi_more_btn">
        <button>더보기</button>
      </div>
    </div>
  );
};
export default Certification;
import { useState, useEffect } from "react";

export const MaxDate = () => {
  const [maxDate, setMaxDate] = useState("");

  useEffect(() => {
    const today = new Date(); //현재 날짜와 시간
    today.setDate(today.getDate() - 1);
    const year = today.getFullYear(); //현재 연도
    const month = String(today.getMonth() + 1).padStart(2, "0"); //현재 달
    const day = String(today.getDate()).padStart(2, "0"); //현재 일
    setMaxDate(`${year}-${month}-${day}`);
  }, []);

  return maxDate;
};

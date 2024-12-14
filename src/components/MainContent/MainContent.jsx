import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../../utils/supabaseClient";
import DOMPurify from "dompurify";

const MainContent = () => {
  const params = useParams();
  const [article, setArticle] = useState([]);
console.log(params);
  useEffect(() => {
    getArticle();
    console.log(article);
  }, [params.id]);

  async function getArticle() {
    console.log("Fetching articles..."); // Logowanie przed pobraniem
    const { data, error } = await supabase
      .from("article")
      .select("*")
      .eq('title', params.id)
      .limit(1);

    console.log("Data:", data);
    console.log("Error:", error);

    if (error) {
      console.error("Error fetching articles:", error);
    } else {
      // setArticle(data);
      setArticle(DOMPurify.sanitize(data[0].content));
      console.log("dodaje dane"); // Teraz powinno działać
    }
  }

  return (
    <div className="h-full px-2 w-full text-xl text-justify overflow-x-hidden">
      {article.length > 0 ? (<div dangerouslySetInnerHTML={{ __html: article }}/>) : (<p>'brak'</p>)}
    </div>
  );
};

export default MainContent;

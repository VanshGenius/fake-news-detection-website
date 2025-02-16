import React, { useState } from "react";
import axios from "axios"; 
import "./FakeNewsDetector.css";

export default function FakeNewsDetector() {
  const [article, setArticle] = useState("");
  const [image, setImage] = useState(null);
  const [articleResult, setArticleResult] = useState(null);
  const [articleResult1, setArticleResult1] = useState(null);
  const [imageResult, setImageResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const sendData = async () => {
    if (!article.trim()) {
      setArticleResult("⚠️ Please enter an article before detecting.");
      return;
    }

    const requestData = {
      article_text: article,  
    };
    setLoading(true);
    try {
      const response = await axios.post(
        "https://web-production-90af3.up.railway.app/classify_news",
        requestData,
        {
          headers: { 
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
        }
      );

      console.log("Server Response:", response.data);
      console.log("Server Response:", response.data.label);
      setArticleResult(response.data.label == "Fake News" ? "⚠️ Fake News Detected!" : "✅ Real News Detected!");
    } catch (error) {
      console.error("Error sending data:", error.response?.data || error.message);
      setArticleResult("⚠️ API error. Please check input format.");
    }finally{
      setLoading(false);
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setImageResult("🔍 Analyzing Image..."); // Placeholder logic
  };

  return (
    <div className="container1 dark-theme">
      <header className="header1">
        <h1 className="title1">📰 Fake News Detector</h1>
        <p className="subtitle1">AI-powered detection for text & images</p>
      </header>
      <div className="upload-box1">
        <p>Drag & drop your files here, paste, or <span className="browse1">browse</span></p>
      </div>
      <div className="gallery1">
        <div className="card1 article-section1">
          <h2>📄 Upload Article</h2>
          <textarea
            placeholder="Paste article here..."
            value={article}
            onChange={(e) => setArticle(e.target.value)}
            className="textarea1"
          />
          {loading ? <div className="single-loader"></div> : <button className="button1" onClick={sendData}>Detect Fake News</button>}
          {articleResult && <p className="result1">{articleResult}</p>}
        </div>

        <div className="card1 image-section1 display1">
          <h2>🖼️ Upload Image</h2>
          <input type="file" accept="image/*" onChange={handleImageUpload} className="file-input1" />
          {image && <p className="image-name1">📌 {image.name}</p>}
          {imageResult && <p className="result1">{imageResult}</p>}
          <button className="button1" onClick={() => setArticleResult1("🛑 Fake Image Detected!")}>Detect Fake Image</button>
          {articleResult1 && <p className="result1">{articleResult1}</p>}
        </div>
      </div>
    </div>
  );
}

import { useState } from "react";

function App() {
  const articleData = [
    { date: "2022-09-01", views: 100, article: "Article 1" },

    { date: "2023-09-01", views: 100, article: "Article 1" },

    { date: "2023-09-02", views: 150, article: "Article 2" },

    { date: "2023-09-02", views: 120, article: "Article 3" },

    { date: "2020-09-03", views: 200, article: "Article 4" },
  ];

  const [articles, setArticles] = useState(articleData);

  const sortByDate = () => {
    let sortedByDate = [...articleData].sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );
    setArticles(sortedByDate);
  };

  const sortByViews = () => {
    let sortedByViews = [...articleData].sort((a, b) => b.views - a.views);
    setArticles(sortedByViews);
  };

  return (
    <>
      <h1>Date and Views Table</h1>
      <button onClick={sortByDate}>Sort by Date</button>
      <button onClick={sortByViews}>Sort by Views</button>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Views</th>
            <th>Article</th>
          </tr>
        </thead>

        <tbody>
          {articles.map((article, ind) => {
            return (
              <tr key={article.article + ind}>
                <td>{article.date}</td>
                <td>{article.views}</td>
                <td>{article.article}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default App;

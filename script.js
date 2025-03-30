const API_KEY = "632854e675884f3e8af0a8ee8264c21e";
const BASE_URL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;

async function fetchNews() {
    try {
        const response = await fetch(BASE_URL);
        const data = await response.json();
        const newsContainer = document.getElementById("news-container");
        newsContainer.innerHTML = "";
        
        data.articles.forEach(article => {
            const newsItem = document.createElement("div");
            newsItem.classList.add("news-item");
            newsItem.innerHTML = `
                <h3>${article.title}</h3>
                <img src="${article.urlToImage || 'https://via.placeholder.com/800x400'}" alt="Hình ảnh">
                <p>${article.description || "Không có mô tả."}</p>
                <a href="${article.url}" target="_blank">Đọc tiếp</a>
            `;
            newsContainer.appendChild(newsItem);
        });
    } catch (error) {
        console.error("Lỗi tải tin tức:", error);
        document.getElementById("news-container").innerHTML = "Không thể tải tin tức.";
    }
}

document.addEventListener("DOMContentLoaded", fetchNews);
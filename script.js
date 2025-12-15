function loadNews(type) {
    const news = document.getElementById("news");

    if (type === "home") {
        news.innerHTML = `
            <h2>Top Headlines</h2>
            <div class="news-card">Bangladesh economy shows growth in 2025</div>
            <div class="news-card">Weather update: Heavy rain expected</div>
        `;
    }

    if (type === "politics") {
        news.innerHTML = `
            <h2>Politics</h2>
            <div class="news-card">Parliament session highlights today</div>
            <div class="news-card">New policy announced by government</div>
        `;
    }

    if (type === "sports") {
        news.innerHTML = `
            <h2>Sports</h2>
            <div class="news-card">Bangladesh wins thrilling match</div>
            <div class="news-card">Upcoming international tournaments</div>
        `;
    }

    if (type === "tech") {
        news.innerHTML = `
            <h2>Technology</h2>
            <div class="news-card">AI technology changing the future</div>
            <div class="news-card">New smartphone launched</div>
        `;
    }
}

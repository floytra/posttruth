function formatCount(count) {
    if (count >= 1000000) return (count / 1000000).toFixed(1) + 'M';
    if (count >= 1000) return (count / 1000).toFixed(1) + 'K';
    return count;
}

function generateTweet() {
    const tweetContainer = document.getElementById('example-container');
    tweetContainer.classList.add('highlight');
    setTimeout(() => {
        tweetContainer.classList.remove('highlight');
    }, 600);

    const randomCounts = {
        comments: Math.floor(Math.random() * 1000),
        retweets: Math.floor(Math.random() * 5000),
        likes: Math.floor(Math.random() * 10000),
        bookmarks: Math.floor(Math.random() * 5000),
        views: (Math.random() * 10 + 5).toFixed(1) + 'M'
    };

    document.getElementById('comments-count').innerText = formatCount(randomCounts.comments);
    document.getElementById('retweets-count').innerText = formatCount(randomCounts.retweets);
    document.getElementById('likes-count').innerText = formatCount(randomCounts.likes);
    document.getElementById('bookmarks-count').innerText = formatCount(randomCounts.bookmarks);
    document.getElementById('views').innerText = randomCounts.views;

    const text = document.getElementById('tweet-input').value;
    if (!text.trim()) {
        alert('Write your post-truth!');
        return;
    }

    document.getElementById('tweet-body').innerText = text;
}
document.getElementById('share-button').addEventListener('click', function () {
    const shareButton = document.getElementById('share-button');
    const disclaimer = document.getElementById('disclaimer');

    // Скрываем кнопку Share
    shareButton.style.display = 'none';

    // Показываем дисклеймер
    disclaimer.classList.remove('hidden');
});

document.getElementById('generate-button').addEventListener('click', generateTweet);

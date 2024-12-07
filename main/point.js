// Lấy dữ liệu từ localStorage
const result = JSON.parse(localStorage.getItem('testResult'));

if (result) {
    const { score, answers, testTitle } = result;
    let resultHtml = `
        <div class="result-summary">
            <p><strong>Your score 🔅: ${score} / ${answers.length}</strong></p>
        </div>
        <div class="result-details">
            <h4>Answer details for ${testTitle}:</h4>
            ${answers.map((answer, index) => {
                return `
                    <div class="question-result">
                        <h4>Question ${index + 1}: ${answer.question}</h4>
                        <p><strong>Your answer:</strong> ${answer.userAnswer}</p>
                        <p><strong>Correct answer:</strong> ${answer.correctAnswer}</p>
                        <p><strong>Result:</strong> ${answer.result}</p>
                        <hr>
                    </div>
                `;
            }).join('')}
        </div>
    `;

    // Hiển thị kết quả trên trang
    document.getElementById('result-content').innerHTML = resultHtml;
} else {
    // Nếu không có dữ liệu từ localStorage (người dùng chưa làm bài test hoặc kết quả không có)
    document.getElementById('result-content').innerHTML = '<p>No results found.</p>';
}

// Xử lý sự kiện quay lại trang chủ
document.getElementById('back-home-btn').addEventListener('click', function() {
    window.location.href = 'index.html';  // Thay 'index.html' bằng URL của trang chủ của bạn
});
// Khi trang được tải, lấy tên người dùng từ localStorage
window.onload = function() {
    var username = localStorage.getItem("username");

    // Nếu có tên người dùng trong localStorage, hiển thị tên đó
    if (username) {
      document.getElementById("user-name").textContent = username;
    } else {
      // Nếu không có tên người dùng (ví dụ: người dùng chưa đăng nhập), chuyển hướng về trang đăng nhập
      window.location.href = "login.html";
    }
  };

  // Thêm sự kiện cho "Đăng Xuất" để xóa tên người dùng khỏi localStorage khi người dùng đăng xuất
  document.getElementById("logout").addEventListener("click", function() {
    localStorage.removeItem("username"); // Xóa tên người dùng khỏi localStorage
    window.location.href = "login.html"; // Quay lại trang đăng nhập
  });
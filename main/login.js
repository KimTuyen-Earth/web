// Chuyển đổi giữa form đăng nhập và đăng ký
document.getElementById("toRegister").addEventListener("click", function() {
    document.getElementById("login-form").classList.add("d-none");
    document.getElementById("register-form").classList.remove("d-none");
});

document.getElementById("toLogin").addEventListener("click", function() {
    document.getElementById("register-form").classList.add("d-none");
    document.getElementById("login-form").classList.remove("d-none");
});

// Đăng ký tài khoản
document.getElementById("registerForm").addEventListener("submit", function(e) {
    e.preventDefault();
    
    let username = document.getElementById("registerUsername").value;
    let password = document.getElementById("registerPassword").value;

    // Kiểm tra nếu tài khoản đã tồn tại trong localStorage
    let users = JSON.parse(localStorage.getItem("users")) || [];
    
    if (users.some(user => user.username === username)) {
        alert("Account already exists!");
        return;
    }

    // Lưu thông tin tài khoản mới
    users.push({ username, password });
    localStorage.setItem("users", JSON.stringify(users));
    
    alert("Registered successfully!");
    document.getElementById("toLogin").click();
});

// Đăng nhập
document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();
    
    let username = document.getElementById("loginUsername").value;
    let password = document.getElementById("loginPassword").value;

    let users = JSON.parse(localStorage.getItem("users")) || [];
    let user = users.find(user => user.username === username && user.password === password);
    
    if (user) {
        alert("Log in successfully!");
        window.location.href = "index.html";
        // Sau khi đăng nhập thành công, có thể chuyển đến trang khác hoặc thực hiện các thao tác khác
    } else {
        alert("Wrong account or password!");
    }
});
// Lắng nghe sự kiện submit của form đăng nhập
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Ngừng hành động mặc định của form (không reload trang)

    // Lấy tên người dùng từ input
    var username = document.getElementById("loginUsername").value;
    var password = document.getElementById("loginPassword").value;

    // Kiểm tra nếu tên người dùng và mật khẩu hợp lệ
    if (username && password) {
      // Lưu tên người dùng vào localStorage
      localStorage.setItem("username", username);

      // Chuyển hướng đến trang chính (index.html)
      window.location.href = "index.html";
    } else {
      alert("Please enter your username and password!");
    }
  });

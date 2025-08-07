function login(event) {
  event.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Thông tin đăng nhập mẫu
  const correctUsername = "admin";
  const correctPassword = "123456";

  if (username === correctUsername && password === correctPassword) {
    document.getElementById("message").innerText = "✅ Đăng nhập thành công!";
  } else {
    document.getElementById("message").innerText = "❌ Sai tài khoản hoặc mật khẩu!";
  }
}

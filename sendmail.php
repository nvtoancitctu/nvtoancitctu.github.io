<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
  $name = htmlspecialchars($_POST['name']);
  $email = htmlspecialchars($_POST['email']);
  $message = htmlspecialchars($_POST['message']);

  $to = "nvtoan.1706@gmail.com"; // Thay bằng email của bạn
  $subject = "New Contact Message from Portfolio";
  $headers = "From: $email\r\nReply-To: $email\r\nContent-Type: text/plain; charset=UTF-8";

  $body = "Name: $name\nEmail: $email\n\nMessage:\n$message";

  if (mail($to, $subject, $body, $headers)) {
    header("Location: index.php?success=1");
  } else {
    echo "Failed to send message.";
  }
}
?>

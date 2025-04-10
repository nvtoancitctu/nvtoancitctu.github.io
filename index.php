<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>My Portfolio</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-100 text-gray-800 font-sans">

  <!-- Header -->
  <header class="bg-white shadow p-4">
    <div class="max-w-6xl mx-auto flex justify-between items-center">
      <h1 class="text-xl font-bold">My Portfolio</h1>
      <nav class="space-x-4">
        <a href="#about" class="hover:text-blue-500">About</a>
        <a href="#projects" class="hover:text-blue-500">Projects</a>
        <a href="#contact" class="hover:text-blue-500">Contact</a>
      </nav>
    </div>
  </header>

  <!-- Hero -->
  <section class="text-center py-16 bg-blue-50">
    <img src="https://via.placeholder.com/150" alt="Avatar" class="w-32 h-32 mx-auto rounded-full shadow mb-4">
    <h2 class="text-3xl md:text-5xl font-bold mb-4">Hi, I'm [Your Name]</h2>
    <p class="text-lg text-gray-700 max-w-xl mx-auto mb-4">
      A passionate web developer who builds responsive websites.
    </p>
    <a href="cv.pdf" download class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Download CV</a>
  </section>

  <!-- About -->
  <section id="about" class="max-w-4xl mx-auto py-12 px-4">
    <h3 class="text-2xl font-semibold mb-4">About Me</h3>
    <p>
      I'm a junior web developer skilled in HTML, CSS, PHP, and Tailwind CSS.
      I enjoy learning new things and turning ideas into code.
    </p>
  </section>

  <!-- Projects -->
  <section id="projects" class="bg-white py-12 px-4">
    <div class="max-w-6xl mx-auto">
      <h3 class="text-2xl font-semibold mb-6">Projects</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="bg-gray-50 p-4 rounded-lg shadow hover:shadow-lg transition">
          <h4 class="text-xl font-bold mb-2">Portfolio Website</h4>
          <p class="text-gray-700 mb-2">A personal website to showcase my projects and skills.</p>
          <a href="#" class="text-blue-600 hover:underline">View project →</a>
        </div>
        <div class="bg-gray-50 p-4 rounded-lg shadow hover:shadow-lg transition">
          <h4 class="text-xl font-bold mb-2">E-commerce Page</h4>
          <p class="text-gray-700 mb-2">A demo online shop with PHP and Tailwind CSS.</p>
          <a href="#" class="text-blue-600 hover:underline">View project →</a>
        </div>
      </div>
    </div>
  </section>

  <!-- Contact -->
  <section id="contact" class="max-w-4xl mx-auto py-12 px-4">
    <h3 class="text-2xl font-semibold mb-4">Contact</h3>
    <?php if (isset($_GET['success'])): ?>
      <div class="bg-green-100 text-green-800 p-2 rounded mb-4">Message sent successfully!</div>
    <?php endif; ?>
    <form action="sendmail.php" method="POST" class="space-y-4">
      <input type="text" name="name" required placeholder="Your Name" class="w-full p-2 border border-gray-300 rounded">
      <input type="email" name="email" required placeholder="Your Email" class="w-full p-2 border border-gray-300 rounded">
      <textarea name="message" required placeholder="Your Message" rows="4" class="w-full p-2 border border-gray-300 rounded"></textarea>
      <button type="submit" class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Send Message</button>
    </form>
  </section>

  <footer class="text-center p-4 bg-gray-200 mt-12">
    © 2025 [Nguyen Van Toan]. All rights reserved.
  </footer>

</body>
</html>

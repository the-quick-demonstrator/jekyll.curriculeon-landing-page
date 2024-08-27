<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Full Stack Java Web Developer Course</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
  <link rel="stylesheet" href="./css/style.css">
  <script src="./src/main/service.js"></script>
  <script
        src="https://code.jquery.com/jquery-3.4.1.js"
        integrity="sha256-WpOohJOqMqqyKL9FccASB9O0KwACQJpFTUBLTYOVvVU="
        crossorigin="anonymous"></script>
</head>
<body>

<header>
    <h1>Become a Full Stack Java Web Developer</h1>
    <p>Your journey to mastering full stack development starts here.</p>
</header>

<section>
    <div class="content-wrapper">
        <div class="course-content">
            <div class="course-features">
                <h2><i class="fas fa-chalkboard-teacher"></i> Instructor-Led Training</h2>
                <p>Learn from Leon Hunter, a Senior Software Engineer with years of industry and teaching experience. Get personal access to the instructor to solve assignments and participate in local job fair events.</p>
            </div>

            <div class="course-features">
                <h2><i class="fas fa-clock"></i> Self-Paced Learning</h2>
                <p>No more worrying about schedule conflicts. This course is entirely self-paced, allowing you to learn at your own speed.</p>
            </div>

            <div class="course-features">
                <h2><i class="fas fa-users"></i> Community and Support</h2>
                <p>Join an ecosystem of learners just like you. Benefit from resume assistance, mock job interviews, and real-world advice from experienced software engineers.</p>
            </div>

            <div class="course-features">
                <h2><i class="fas fa-project-diagram"></i> Practical Skills You Will Master</h2>
                <p>Click the button below to reveal the full list of skills you will acquire during this course:</p>
                <p class="reveal-button">Show Skill Set</p>
                <ul class="skills-list">
                    <li class="highlight"><strong>Operating System Package Management</strong>
                        <ul>
                            <li>(Windows OS) Using PowerShell and Chocolatey</li>
                            <li>(Mac OS) Using XCode and Brew</li>
                        </ul>
                    </li>
                    <li class="highlight"><strong>Command Line Scripting</strong>
                        <ul>
                            <li>Using Shell and Bash terminal</li>
                        </ul>
                    </li>
                    <li class="highlight"><strong>Version Control Software</strong>
                        <ul>
                            <li>Using git CLI and GitHub</li>
                        </ul>
                    </li>
                    <li class="highlight"><strong>Markdown / Documentation</strong>
                        <ul>
                            <li>Using Jekyll and GitHub Pages</li>
                        </ul>
                    </li>
                    <li class="highlight"><strong>Editors / Integrated Development Environments</strong>
                        <ul>
                            <li>Using IntelliJ and VSCode</li>
                        </ul>
                    </li>
                    <li class="highlight"><strong>HTML/CSS/JS</strong>
                        <ul>
                            <li>Using NodeJS and ReactJS</li>
                        </ul>
                    </li>
                    <li class="highlight"><strong>Java Web Development</strong>
                        <ul>
                            <li>Using Maven and Spring Boot</li>
                        </ul>
                    </li>
                    <li class="highlight"><strong>Database Management Systems</strong>
                        <ul>
                            <li>Using MySQL and H2</li>
                        </ul>
                    </li>
                    <li class="highlight"><strong>Continuous Integration / Continuous Deployment</strong>
                        <ul>
                            <li>Using TravisCI and JUnit5</li>
                        </ul>
                    </li>
                    <li class="highlight"><strong>Containerization</strong>
                        <ul>
                            <li>Using Docker CLI and Docker Hub</li>
                        </ul>
                    </li>
                    <li class="highlight"><strong>Cloud Computing / Web Server Deployment</strong>
                        <ul>
                            <li>Using Heroku and Render</li>
                        </ul>
                    </li>
                </ul>
            </div>

            <div class="course-features">
                <h2><i class="fas fa-trophy"></i> Course Completion Benefits</h2>
                <p>By the end of this course, you will have deployed several full-stack applications using the technologies and skills learned. Upon completing each module, you will receive certificates that prove your proficiency.</p>
            </div>

            <button class="payment-button" onclick="redirectToCheckout()">Enroll Now</button>
        </div>

        <!-- Image section -->
        <div class="instructor-image">
            <img src="path-to-your-image.jpg" alt="Instructor teaching">
        </div>
    </div>
</section>

<footer>
    <p>&copy; 2024 Full Stack Java Web Developer Course. All rights reserved.</p>
</footer>

<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script>
    $(document).ready(function(){
        $('.reveal-button').click(function(){
            $('.skills-list').slideToggle();
        });
    });
</script>

</body>
</html>

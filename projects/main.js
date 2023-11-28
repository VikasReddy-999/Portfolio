// Sample project data (replace this with your actual data)
const projectsData = [
  {
    id: 1,
    category: 'Java',
    title: 'UMS',
    description: ['University Management System', 'The University Management System (UMS) is a Java-based application designed to revolutionize university administration. This system, developed over a span of 2 months, offers a user-friendly interface for managing student enrollments, course schedules, faculty assignments, exams, and attendance. Leveraging Java, MySQL, JSP, HTML, CSS, and Bootstrap, the UMS ensures efficient user authentication and authorization, providing secure access to administrators, faculty, and students. With modules dedicated to student and course management, faculty assignments, and robust examination and attendance tracking, the UMS is a comprehensive solution for streamlining university processes and enhancing overall efficiency.'],
    technologies: ['Java', 'My-SQL', 'JSP', 'HTML', 'CSS', 'BOOTSTRAP'],
    timeTaken: '2 months',
    image: './images/university.jpg',
  },
  {
    id: 2,
    category: 'Web',
    title: 'Job Searching Portal',
    description: ['The Job Searching Portal is a dynamic web application built using HTML, CSS, JavaScript, and Bootstrap, offering a seamless platform for job seekers and employers. Developed over a period of 3 months, this project facilitates job searches, applications, and recruitment processes. Job seekers can create profiles, search for relevant positions, and apply directly through the portal. Employers can post job openings, review applications, and manage candidate interactions. The use of modern web technologies ensures a responsive and intuitive user experience. The Job Searching Portal is designed to streamline the job-hunting process, connecting qualified candidates with potential employers effortlessly.'],
    technologies: ['HTML', 'CSS', 'JS', 'BOOTSTRAP'],
    timeTaken: '3 months',
    image: '../assets/projects/job.jpeg',
  },
  {
    id: 3,
    category: 'Figma',
    title: 'Food App UI',
    description: ['The Food App UI is an aesthetically crafted design project focused on enhancing the user experience for food-related applications. Developed using Figma, this project showcases a visually appealing and intuitive interface for users to browse, select, and order food seamlessly. The design includes engaging visuals, user-friendly navigation, and thoughtful placement of elements to ensure a delightful and efficient food discovery process. With attention to detail, color schemes, and modern design principles, the Food App UI in Figma aims to elevate the overall dining experience for users, making it visually pleasing and user-friendly.'],
    technologies: 'Figma',
    timeTaken: '1 month',
    image: './images/food.jpg',
  },
  {
    id: 4,
    category: 'Java',
    title: 'Online Market Place',
    description: ['The Online Marketplace project is a dynamic e-commerce platform developed using Java. Over a span of 2 months, this platform was meticulously crafted to provide a seamless online shopping experience. Utilizing Java technologies, users can explore a diverse range of products, place orders, and manage their shopping carts. The system ensures secure transactions, user authentication, and an intuitive interface for both buyers and sellers. With features such as product categorization, search functionality, and secure payment processing, the Online Marketplace project aims to create a robust and user-friendly environment for online commerce.'],
    technologies: 'Java',
    timeTaken: '2 months',
    image: './images/online-market.jpeg',
  },
  {
    id: 5,
    category: 'Responsive Portfolio',
    title: 'Responsive Portfolio',
    description: ['The Responsive Portfolio project is a web development endeavor showcasing proficiency in HTML, CSS, JavaScript, and Bootstrap. Developed in 3 months, this portfolio is designed to adapt seamlessly to various screen sizes, providing an optimal viewing experience on desktops, tablets, and smartphones. It features a clean and modern design, with sections highlighting skills, projects, and a contact form. Employing responsive design principles ensures that the portfolio remains visually appealing and user-friendly across different devices. The Responsive Portfolio project aims to demonstrate both technical skills and a commitment to creating a polished and accessible online presence.'],
    technologies: 'Web',
    timeTaken: '3 months',
    image: '../assets/screen-shots/home.png',
  },
  {
    id: 6,
    category: 'Web',
    title: 'Resume Buider',
    description: ['The Resume Builder project is a rapid web development effort accomplished in just 7 days using HTML, CSS, JavaScript, and Bootstrap. This intuitive tool allows users to effortlessly create and customize professional resumes. With a user-friendly interface, individuals can input their information, choose from various templates, and instantly generate visually appealing resumes. The project incorporates modern web technologies to ensure responsiveness and ease of use. The Resume Builder is designed to empower users in crafting compelling resumes efficiently, showcasing their skills and experiences in a polished and presentable format.'],
    technologies: ['HTML', 'CSS', 'JS', 'BOOTSTRAP'],
    timeTaken: '7 Days',
    image: './images/resume.jpg',
  },
];


// Function to populate project cards
function populateProjectCards(containerId, projects) {
  const container = document.getElementById(containerId);
  container.innerHTML = ''; // Clear existing content

  projects.forEach(project => {
    const card = document.createElement('div');
    card.className = 'col-md-4 project-card';

    card.innerHTML = `
      <div class="card">
        <img src="${project.image}" class="card-img-top" alt="${project.title}">
        <div class="card-body">
          <h5 class="card-title">${project.title}</h5>
          <button class="btn btn-primary" onclick="openProjectModal(${project.id})">View Details</button>
        </div>
      </div>
    `;

    container.appendChild(card);
    setTimeout(() => card.classList.add('show'), 100); // Add fade-in animation after a delay
  });
}

// Function to open project modal
function openProjectModal(projectId) {
  const project = projectsData.find(p => p.id === projectId);
  const modalBody = document.querySelector('#projectModal .modal-body');

  modalBody.innerHTML = `
    <h5>${project.title}</h5>
    <img src="${project.image}" class="img-fluid mb-3" alt="${project.title}">
    <p>${project.description}</p>
    <p><strong>Category:</strong> ${project.category}</p>
    <p><strong>Technologies:</strong> ${project.technologies}</p>
    <p><strong>Time Taken:</strong> ${project.timeTaken}</p>
  `;

  $('#projectModal').modal('show');
}

// Initial population of all projects
populateProjectCards('allProjectsContainer', projectsData);

// Event listeners for tab changes
$('#javaProjectsTab').on('click', () => populateProjectCards('javaProjectsContainer', projectsData.filter(p => p.category === 'Java')));
$('#webProjectsTab').on('click', () => populateProjectCards('webProjectsContainer', projectsData.filter(p => p.category === 'Web')));
$('#figmaProjectsTab').on('click', () => populateProjectCards('figmaProjectsContainer', projectsData.filter(p => p.category === 'Figma')));
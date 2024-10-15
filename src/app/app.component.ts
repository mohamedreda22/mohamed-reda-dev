import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { FormsModule } from '@angular/forms'; // Import FormsModule

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule], 
  animations: [
    trigger('fadeIn', [
      state('void', style({ opacity: 0 })),
      transition(':enter', [
        animate(500, style({ opacity: 1 }))
      ])
    ]),
    trigger('slideInLeft', [
      state('void', style({ transform: 'translateX(-100%)' })),
      transition(':enter', [
        animate('1000ms ease-out', style({ transform: 'translateX(0)' }))
      ])
    ]),
    trigger('slideInRight', [
      state('void', style({ transform: 'translateX(100%)' })),
      transition(':enter', [
        animate('1000ms ease-out', style({ transform: 'translateX(0)' }))
      ])
    ])
  ]
})
export class AppComponent {
  title = 'Mohamed Reda Dev';

  // Skills and Projects data
// Skills and Projects data
skills = [
  { name: 'JavaScript', icon: 'fab fa-js-square' },
  { name: 'React.js', icon: 'fab fa-react' },
  { name: 'Angular', icon: 'fab fa-angular' },
  { name: 'TypeScript', icon: 'fab fa-js-square' },
  { name: 'HTML', icon: 'fab fa-html5' },
  { name: 'CSS', icon: 'fab fa-css3-alt' },
  { name: 'Node.js', icon: 'fab fa-node-js' },
  { name: 'Git', icon: 'fab fa-git-alt' },
  { name: 'Python', icon: 'fab fa-python' },
  { name: 'MongoDB', icon: 'fas fa-database' },
  { name: 'SQL', icon: 'fas fa-database' },
  { name: 'Bootstrap', icon: 'fab fa-bootstrap' },
  { name: 'Sass', icon: 'fab fa-sass' },
  { name: 'Jest', icon: 'fas fa-vial' },
  { name: 'Agile', icon: 'fas fa-tasks' },
  { name: 'Scrum', icon: 'fas fa-tasks' },
  { name: 'CI/CD', icon: 'fas fa-code-branch' },
  { name: 'REST API', icon: 'fas fa-server' },
  { name: 'Docker', icon: 'fab fa-docker' },
  { name: 'Linux', icon: 'fab fa-linux' },
  { name: 'VS Code', icon: 'fas fa-code' },
  { name: 'Postman', icon: 'fas fa-envelope' },
  { name: 'Jira', icon: 'fab fa-jira' },
  { name: 'Slack', icon: 'fab fa-slack' },
  { name: 'MERN Stack', icon: 'fas fa-layer-group' }, 
  { name: 'MEAN Stack', icon: 'fas fa-cubes' },
  { name: 'Generative AI', icon: 'fas fa-robot' }, 
  { name: 'Software Development', icon: 'fas fa-code' }, 
  { name: 'Redux.js', icon: 'fas fa-exchange-alt' },
  { name: 'Web Development', icon: 'fas fa-laptop-code' }, 
  { name: 'Front-end Development', icon: 'fas fa-desktop' },
  




];
projects = [
  { 
    name: 'Bistro Bliss Restaurant', 
    description: `
    Introducing Bistro Bliss, a full-stack web application designed to showcase my skills in both front-end and back-end development.<br>
    <strong>Key Technologies:</strong>
      <ul>
        Front-End: Angular, HTML, CSS, TypeScript <br>
        Back-End: Node.js, Express, MongoDB
      </ul>
      <strong>Features:</strong>
      <ul>
        RESTful API for CRUD operations <br>
        Responsive Design for compatibility across devices<br>
        User Authentication and Authorization
      </ul>

Check out the <a href="https://mohamedreda22.github.io/ODC-Final-project-Demo/" target="_blank" >GitHub repository</a> for more details.
    `, 
    link:"https://github.com/mohamedreda22/ODC-Final-project-Demo",
    date: 'SEP-2024' ,
    images: ['odc1.png', 'odc2.png', 'odc3.png','odc4.png', 'odc5.png', 'odc6.png','odc7.png', 'odc8.png','odc10.png', 'odc11.png'],
    currentImage: 'odc1.png'
  },
  { 
    name: 'Bistro Bliss Restaurant', 
    description: `
    Introducing Bistro Bliss, a full-stack web application designed to showcase my skills in both front-end and back-end development.<br>
      
    <strong>Key Technologies:</strong>
      <ul>
        Front-End: Angular, HTML, CSS, TypeScript <br>
        Back-End: Node.js, Express, MongoDB
      </ul>
      <strong>Features:</strong>
      <ul>
        RESTful API for CRUD operations <br>
        Responsive Design for compatibility across devices<br>
        User Authentication and Authorization
      </ul>

Check out the <a href="https://mohamedreda22.github.io/ODC-Final-project-Demo/" target="_blank" >GitHub repository</a> for more details.
    `, 
    link:"https://github.com/mohamedreda22/ODC-Final-project-Demo",
    date: 'SEP-2024' ,
    images: ['odc1.png', 'odc2.png', 'odc3.png','odc4.png', 'odc5.png', 'odc6.png','odc7.png', 'odc8.png','odc10.png', 'odc11.png'],
    currentImage: 'odc1.png'
  },
];



  // CV Download method
  downloadCV() {
    try {
      const link = document.createElement('a');
      link.href = 'MohamedReda_Resume_2024_ATS.docx'; 
      link.download = 'MohamedReda_Resume_2024_ATS.docx';
      link.click();
    } catch (error) {
      console.error('Download failed', error);
      alert('Download failed. Please try again later.');
    }
  }
  constructor() {
    this.startSlideshow();
  }
  startSlideshow() {
    this.projects.forEach((project) => {
      let currentIndex = 0;
      setInterval(() => {
        currentIndex = (currentIndex + 1) % project.images.length;
        project.currentImage = project.images[currentIndex];
      }, 1500); // Change image every 1000ms (1 second)
    });
  }
  // Contact form submission method
  onSubmit(contactForm: any) {
    if (contactForm.valid) {
      const formData = contactForm.value;
      console.log('Form Submitted:', formData);
      alert('Thank you for your message! We will get back to you soon.');
      contactForm.reset();
    }
  }
}

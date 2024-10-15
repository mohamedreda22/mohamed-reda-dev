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
  skills: string[] = ['JavaScript', 'React.js', 'HTML', 'CSS', 'Node.js', 'Git', 'Angular'];
  projects = [
    { name: 'Helwan Newsline System', description: 'University communication system using React.js', date: '2024' },
    { name: 'My Valentine', description: 'Interactive web app built with React.js', date: '2023' },
    { name: 'Restaurant Website', description: 'Showcasing restaurant services and menu', date: '2023' },
  ];

  // CV Download method
  downloadCV() {
    try {
      const link = document.createElement('a');
      link.href = 'assets/MohamedReda_Resume_2024_ATS.docx'; 
      link.download = 'MohamedReda_Resume_2024_ATS.docx';
      link.click();
    } catch (error) {
      console.error('Download failed', error);
      alert('Download failed. Please try again later.');
    }
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

import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements AfterViewInit {
  capsuleLeft: number = 0;
  capsuleWidth: number = 0;
  
  navLinks = [
    { label: 'Home', path: '/home' },
    { label: 'Portfolio', path: '/portfolio' },
    { label: 'Resume', path: '/resume' },
    { label: 'Contact', path: '/contact' }
  ];

  ngAfterViewInit() {
    // Set initial capsule position based on the active route on load
    const activeLink = document.querySelector('.nav-link.active');
    if (activeLink) {
      this.setCapsulePosition(activeLink as HTMLElement);
    }
  }

  moveCapsule(event: MouseEvent) {
    const linkElement = event.target as HTMLElement;
    this.setCapsulePosition(linkElement);
  }

  setActiveLink(link: any, event: MouseEvent) {
    const linkElement = event.target as HTMLElement;
    this.setCapsulePosition(linkElement);
  }

  setCapsulePosition(linkElement: HTMLElement) {
    const linkRect = linkElement.getBoundingClientRect();
    const containerRect = linkElement.closest('.container')!.getBoundingClientRect();

    this.capsuleLeft = linkRect.left - containerRect.left;
    this.capsuleWidth = linkRect.width;
  }
}

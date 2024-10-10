import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { AppService } from '../app.service';
import { CardComponent } from '../shared/components/card/card.component';
import { PurchaseButtonComponent } from '../shared/components/purchase-button/purchase-button.component';
import { cardInfo } from '../shared/interfaces/cardInfo';

@Component({
  selector: 'app-topic-list',
  standalone: true,
  imports: [CardComponent, CommonModule, PurchaseButtonComponent],
  templateUrl: './topic-list.component.html',
  styleUrl: './topic-list.component.css',
})
export class TopicListComponent {
  @Output() selectedCard = new EventEmitter<cardInfo>();
  // topicList: cardInfo[] = [
  //   {
  //     title: 'Services and Dependency Injection',
  //     smallDescription: 'Learn about sharing data and logic across components.',
  //     largeDescription:
  //       'Services in Angular are used to encapsulate business logic and data sharing across components. Dependency injection simplifies the instantiation of these services, promoting modularity and easier testing. This topic delves into how to create and manage services effectively.',
  //     img: '/assets/images/icon.png',
  //     card: true,
  //   },
  //   {
  //     title: 'Angular Essentials',
  //     smallDescription: "A foundational overview of Angular's core concepts.",
  //     largeDescription:
  //       "Angular Essentials covers the basics of Angular, including components, modules, and services. This topic provides a solid foundation for building efficient web applications and introduces you to the core principles of Angular's architecture and design.",
  //     img: '/assets/images/icon.png',
  //     card: true,
  //   },
  //   {
  //     title: 'Data Binding in Angular',
  //     smallDescription:
  //       'Learn the techniques to synchronize data between the model and view.',
  //     largeDescription:
  //       'Data binding in Angular allows you to easily synchronize data between the model and the view. This topic explores different binding techniques, such as interpolation, property binding, and event binding, enabling developers to create dynamic and responsive applications.',
  //     img: '/assets/images/icon.png',
  //     card: true,
  //   },
  //   {
  //     title: 'Components and Directives',
  //     smallDescription: 'Explore the building blocks of Angular applications.',
  //     largeDescription:
  //       'Components are the fundamental building blocks of Angular applications, encapsulating logic and templates. Directives extend HTML capabilities, allowing for custom behavior and presentation. Understanding how to create and use both is crucial for effective Angular development.',
  //     img: '/assets/images/icon.png',
  //     card: true,
  //   },
  //   {
  //     title: 'Routing in Angular',
  //     smallDescription:
  //       'Understand navigation among views in single-page applications.',
  //     largeDescription:
  //       "Angular's routing module facilitates navigation among different views or components within a single-page application. This topic covers the essentials of configuring routes, navigating between views, and managing route parameters, enabling seamless user experiences.",
  //     img: '/assets/images/icon.png',
  //     card: true,
  //   },
  //   {
  //     title: 'Reactive Forms',
  //     smallDescription: 'Handle complex form validation and state management.',
  //     largeDescription:
  //       'Reactive Forms provide a model-driven approach to managing form inputs that change over time. This approach allows developers to create dynamic and responsive forms, handle complex validation scenarios, and track the state of form inputs in real-time.',
  //     img: '/assets/images/icon.png',
  //     card: true,
  //   },
  // ];

  topicList!: cardInfo[];
  constructor(private appService: AppService) {
    this.loadTopicList();
  }

  loadTopicList() {
    this.appService.fetchTopicList().subscribe((data: any) => {
      this.topicList = data;
    });
  }
  selectedCardDetails(id: number) {
    this.selectedCard.emit(this.topicList[id]);
  }

  purchaseNow() {
    // ...Some logics
    alert('Thank you for the purchase');
  }
}

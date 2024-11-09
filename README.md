# Project Documentation for  E-commerce Project

---

## 1. Introduction
- **Project Name**:  TrendTrunk E-commerce Product Page
- **Description**: This project is a fully responsive e-commerce product page designed with advanced interactive animations, filtering, and sorting features, and a user-friendly layout.
- **Purpose**: To create a visually appealing and interactive e-commerce interface that offers an intuitive shopping experience, allowing users to browse, filter, and sort through product listings efficiently.

---

## 2. Project Requirements
- **HTML5**: Used for structuring content on the web page.
- **CSS3**: Used for styling, animations, and layout.
- **JavaScript (ES6)**: Enabled dynamic features like sorting, filtering, and button actions.
- **GSAP (GreenSock Animation Platform)**: Incorporated for advanced animations throughout the page.
- **Deployment Tools**: GitHub Pages/Netlify for live deployment.

---

## 3. Project Structure
- **Folder Layout**:
    ```

    ├── /css
    │   └── style.css
    │   └── Men's.css
    │   └── Women.css
    ├── index.html
    ├── Men's.html
    ├── Women.html
    ├── /public
    │   └── /images
    │   └── /fonts
    │   └── /icons
    ├── /js
    │       ├── script.js
    │       ├── Men.js
    │       ├── Women.js 
    │       └── animations.js (GSAP animations)
    
    ```
- **Description of Key Files**:
    - **index.html**: Main HTML structure.
    -   **Men.html**: It contains Men-section page.
    -    **Women.html**: It contains a Women-section page.
    - **style.css**: Contains all CSS styling, including responsive adjustments.
    - **script.js**: Manages page functionality, including sorting/filtering logic.
    - **animations.js**: GSAP animations for enhanced user experience.

---

## 4. Features and Functionality
- **Navigation Bar**:
    - Responsive with category filters for ‘Men’ and ‘Women’ sections.
    - Interactive dropdown animation for sorting.
- **Product Listings**:
    - Grid layout displaying product cards with images, descriptions, and prices.
    - Sorting functionality to organize products by price.
    - The “Show More” button will load additional products dynamically.
- **Filtering and Sorting**:
    - Sidebar with options like ‘Shop by Price’ to narrow down products.
    The sidebar slides in without overlapping, shifting the product grid.
- **GSAP Animations**:
    - Navbar animations for a smooth fade-in effect.
    - Scroll-triggered animations using GSAP’s ScrollTrigger.

---

## 5. Implementation Details
- **Filtering and Sorting**:
    - Uses event listeners to update product lists based on filter checkboxes.
    - Sorting is handled through a dropdown by price.
- **GSAP Animations**:
    - Navbar animations for a fade-in effect.
    - Product card animations on scroll.

---



## 6. Deployment
- **GitHub Pages/Netlify**: Project deployed for live access.
- **Deployment Link**: [trendtrunk.netlify.app](https://trendtrunk.netlify.app/)

---

## 7. Challenges and Solutions
- **Challenge 1**: Ensuring smooth animations without slowing load times.
  - **Solution**: Optimized animations using GSAP’s performance settings.
- **Challenge 2**: Managing filter sidebar behavior without overlapping.
  - **Solution**: Adjusted product grid based on sidebar visibility.

---

## 8. Future Enhancements
- User authentication for personalized experiences.
- Real backend integration for dynamic data fetching.
- Additional sorting options, e.g., “Best Sellers” and “New Arrivals.”

---

## 9. Credits and References
- **GSAP Documentation**: For animations.
- **Mozilla Developer Network (MDN)**: CSS and JavaScript references.

---

## 10. Google Drive Submission
- **Google Drive Link**: https://drive.google.com/file/d/1LB7eaVXmGG0JDio2luqcKtVqqBMwv5cY/view?usp=sharing

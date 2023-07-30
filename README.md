# Build Master

Live Link: https://build-master.vercel.app/

## Overview

The PC Builder Website is a web application built with Next.js that allows users to build their custom PC by selecting various PC components and parts. The website offers a user-friendly interface with features like featured products, product categories, and a PC Builder tool.

## Features

1. **Navbar**: The website has a navigation bar with a "PC Builder" button that redirects users to the PC Builder page. It also includes a "Categories" dropdown with various PC component categories.

2. **Home Page**: The home page features 6 random PC components as "Featured Products." Each featured product card displays essential information like image, product name, category, price, availability (In Stock/Out of Stock), and ratings. Users can click on these cards to view the detailed product information.

3. **Featured Category Sections**: The home page also has 6 featured category sections, each clickable, which redirects users to separate pages displaying at least 3 products from that category. Users can click on these products to view their details.

4. **Product Detail Page**: The product detail page displays comprehensive information about each PC component, including image, product name, category, availability, price, description, key features, individual rating, average rating, and user reviews.

5. **PC Builder Page**: The PC Builder page allows users to build their custom PC. It displays category sections (CPU, RAM, Motherboard, etc.) with a "Choose/Select" button for each. Clicking on the "Choose/Select" button shows a page with at least 3 components of that specific category. Users can click on the "Add to Builder" button to add the selected component to their PC build.

6. **Complete Build Button**: The PC Builder page has a "Complete Build" button that remains disabled until the user adds at least 5-6 components (CPU, RAM, Power Supply, Storage, Motherboard, Casing). Once the user meets the minimum requirements, they can click on the "Complete Build" button.

7. **Success Alert**: When the user clicks on the "Complete Build" button, a success alert is shown to indicate that the PC build is complete.

## How to Run the Project

Follow the steps below to run the PC Builder website locally:

1. Clone the repository:

```
git clone https://github.com/Jisan-Hasan/build-master-client.git
cd build-master-client
```

2. Install dependencies:

```
npm install
```

3. Set up the environment variables:
   Create a `.env.local` file in the root of the project and add your authentication credentials (if using NextAuth.js) or other required environment variables.

4. Run the development server:

```
npm run dev
```

5. Open your browser and navigate to `http://localhost:3000` to access the PC Builder website.

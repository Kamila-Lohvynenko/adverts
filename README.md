# Travel Trucks

Visit the live site: [Travel Trucks](https://adverts-pearl.vercel.app/)

## Table of Contents

1. [Project Description](#project-description)
2. [Installation](#installation)
3. [Backend API](#backend-api)
4. [Technologies](#technologies)
5. [Author](#author)
6. [Contacts](#contacts)

## Project Description

Travel Trucks is a web-based platform designed to help users explore and manage travel destinations, trucking routes, or logistical planning. Whether you're a travel enthusiast or managing transportation routes, Travel Trucks provides a seamless interface to browse, categorize, and manage travel content efficiently.

## Installation

Clone the repository:

```bash

git clone https://github.com/Kamila-Lohvynenko/adverts
```

Install the dependencies:

```bash
npm install
```

```bash
npm run dev
```

The app will be available at http://localhost:5173.

## Backend API

Travel Trucks uses a mock API hosted at https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers to manage travel route data. Below are the endpoints available for interacting with the backend:

Endpoints:

### GET /campers

Retrieve a list of all campers. This endpoint returns all available tracks considering all chosen filters.

Example Request:

```bash

GET https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers

```

### GET /campers/:id

Retrieve information about a specific camper by its ID.

Example Request:

```bash
GET https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers/1
```

## Technologies

- Frontend: js, React, Redux
- Backend API: MockAPI (https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers)
- Hosting: Vercel
- Styling: Module CSS
- Database: MockAPI (for demo purposes)

## Author

Kamila Lohvynenko - Developer - [GitHub](https://github.com/Kamila-Lohvynenko)

## Contacts

For questions, suggestions, or feedback, feel free to reach out:

Email: kamila.lohvynenko@gmail.com

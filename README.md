# Student Management System

A full-stack **Student Management System** developed using Angular, ASP.NET Core Web API, Entity Framework Core, and Microsoft SQL Server. This application allows users to manage student records through a simple and responsive web interface.

The project demonstrates complete CRUD (Create, Read, Update, Delete) operations by integrating an Angular frontend with a RESTful ASP.NET Core Web API backend.

## 🚀 Features

- **View Students:** Display all registered students in a structured table.
- **Add Student:** Add new student records using a form.
- **Edit Student:** Retrieve and update existing student information.
- **Delete Student:** Delete student records with a confirmation popup.
- **RESTful API Integration:** Communicate with the backend using Angular HttpClient.
- **Database Integration:** Store and manage student records using SQL Server and Entity Framework Core.
- **Form Validation:** Validate required fields and input values.
- **Responsive UI:** User interface built with Bootstrap.

## 🛠️ Technology Stack

### Frontend
- Angular
- TypeScript
- HTML5
- CSS3
- Bootstrap
- Angular HttpClient
- Angular Router

### Backend
- C#
- ASP.NET Core Web API
- Entity Framework Core
- RESTful API Architecture

### Database
- Microsoft SQL Server

### Development Tools
- Visual Studio Code
- SQL Server Management Studio (SSMS)
- Swagger / OpenAPI
- Git and GitHub

## 📂 Project Structure

```text
Angular + Web API CRUD/
│
├── StudentManagement.API/
│   ├── Controllers/
│   │   └── StudentController.cs
│   ├── Data/
│   │   └── AppDbContext.cs
│   ├── Models/
│   │   └── Student.cs
│   ├── Migrations/
│   ├── Program.cs
│   └── appsettings.json
│
├── student-management-ui/
│   ├── src/
│   │   └── app/
│   │       ├── components/
│   │       │   ├── student-list/
│   │       │   ├── add-student/
│   │       │   └── edit-student/
│   │       ├── models/
│   │       ├── services/
│   │       └── app.routes.ts
│   ├── angular.json
│   └── package.json
│
├── .gitignore
└── README.md
```

## ⚙️ Prerequisites

Make sure the following software is installed:

- .NET SDK
- Node.js and npm
- Angular CLI
- Microsoft SQL Server
- SQL Server Management Studio (SSMS)
- Visual Studio Code

## 🔧 Installation and Setup

### 1. Clone the Repository

```bash
git clone https://github.com/Shreyashmoon123/Employee-Angular-Web-API-CRUD.git
```

### 2. Backend Setup

Navigate to the backend project:

```bash
cd StudentManagement.API
```

Restore dependencies:

```bash
dotnet restore
```

Configure the SQL Server connection string in `appsettings.json`:

```json
{
  "ConnectionStrings": {
    "DefaultConnection": "Server=YOUR_SERVER_NAME;Database=StudentManagementDB;Trusted_Connection=True;TrustServerCertificate=True;"
  }
}
```

Replace `YOUR_SERVER_NAME` with your SQL Server instance name.

Apply Entity Framework Core migrations:

```bash
dotnet ef database update
```

Run the backend:

```bash
dotnet run
```

Backend API:

```text
http://localhost:5051
```

Swagger UI:

```text
http://localhost:5051/swagger
```

### 3. Frontend Setup

Open another terminal and navigate to the Angular project:

```bash
cd student-management-ui
```

Install dependencies:

```bash
npm install
```

Run the Angular application:

```bash
ng serve
```

Open the application in your browser:

```text
http://localhost:4200
```

## 🔗 API Endpoints

Base URL: `http://localhost:5051/api/Student`

| HTTP Method | Endpoint | Description |
|---|---|---|
| GET | `/api/Student` | Retrieve all students |
| GET | `/api/Student/{id}` | Retrieve a student by ID |
| POST | `/api/Student` | Add a new student |
| PUT | `/api/Student/{id}` | Update an existing student |
| DELETE | `/api/Student/{id}` | Delete a student |

## 🗄️ Student Data Model

Each student record contains the following properties:

| Property | Data Type | Description |
|---|---|---|
| Id | int | Unique student identifier |
| FirstName | string | Student's first name |
| LastName | string | Student's last name |
| Email | string | Student's email address |
| Phone | string | Student's phone number |
| Course | string | Enrolled course |
| Age | int | Student's age |

## 🧪 API Testing

The backend APIs can be tested using Swagger UI.

1. Run the ASP.NET Core Web API.
2. Open `http://localhost:5051/swagger`.
3. Select the required HTTP method.
4. Execute the API request.
5. Verify the response and database changes.

## 🔄 Application Workflow

1. Angular application loads the student list.
2. Angular HttpClient sends HTTP requests to the ASP.NET Core Web API.
3. The API processes requests using Entity Framework Core.
4. Entity Framework Core communicates with SQL Server.
5. The API returns the response to Angular.
6. Angular updates the displayed student records.

## 🎯 Project Objectives

- Understand Angular and ASP.NET Core Web API integration.
- Implement RESTful CRUD operations.
- Work with Entity Framework Core and SQL Server.
- Understand HTTP methods and API communication.
- Implement Angular routing and template-driven forms.
- Practice full-stack application development.

## 👨‍💻 Author

**Shreyash Katiyar**

GitHub: [Shreyashmoon123](https://github.com/Shreyashmoon123)

---

If you find this project useful, feel free to explore the source code and provide feedback.

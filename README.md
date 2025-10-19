# WeatherApp

A weather forecasting application built with Angular. This app fetches real-time weather data using a configurable API key.

---

## 🚀 Getting Started

### Prerequisites

Make sure you have installed:

* [Node.js](https://nodejs.org/)
* [Angular CLI](https://angular.io/cli)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/kostasbel96/WeatherApp.git
```

2. Navigate into the project directory:

```bash
cd WeatherApp
```

3. Install dependencies:

```bash
npm install
```

---

## 🔑 API Key Configuration

Before running the app, you need to provide your weather API key.

Replace `'ADD_YOUR_API_KEY'` in environment.ts file with your actual API key from your weather service.


---

## 🏃 Running the Application

Start the development server:

```bash
ng serve --configuration=environment
```

Open your browser and go to `http://localhost:4200/`. The application will reload automatically if you make changes to the source files.

---

## ℹ️ About

WeatherApp is an Angular-based application that allows users to view current weather data for different locations. The app fetches data using a configurable API key, keeping sensitive information secure and separate from the repository.

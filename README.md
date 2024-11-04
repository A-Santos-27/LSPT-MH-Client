

# LSPT-MH-Client


A simple Angular client that allows users to create and view shortened URLs via the URL Shortener API. This application provides an intuitive user interface for shortening URLs and displaying previously shortened URLs stored in the backend.

## Features

- **Create Short URLs**: Users can input a long URL, and the application will interact with the URL Shortener API to generate a shortened URL.
- **Display All Shortened URLs**: The application displays a list of all shortened URLs stored in the backend, allowing users to view and access previously shortened links.
- **Material Design**: Built with Angular Material components for a clean, responsive UI.

## Key Components

1. **URL Form**
   - Users enter a long URL, which is then sent to the backend to create a shortened version.
   - The form validates the input, ensuring the URL is not empty before submission.

2. **Shortened URL Display**
   - Once a URL is shortened, the result is displayed immediately, showing both the original and shortened URLs.
   - A list of all shortened URLs is also displayed, allowing users to view previously created short URLs and access them via clickable links.

3. **Service Integration**
   - The client communicates with the backend URL Shortener API to create new short URLs and fetch existing ones.

## Project Setup

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory and install dependencies:
   ```bash
   npm install
   ```

3. Start the application:
   ```bash
   ng serve
   ```

4. Access the application at `http://localhost:4200`.

## API Endpoints

- **Create Short URL**: Sends a POST request to `/api/URL/shorten` with the original URL to generate a shortened URL.
- **Get All Shortened URLs**: Sends a GET request to `/api/URL/all` to retrieve all stored shortened URLs.

## Key Considerations

- **Error Handling**: If the API encounters issues (e.g., invalid URL input), the client displays error messages.
- **Dependency Management**: Uses Angular 14 and RxJS 7.5 to manage reactive programming within the app.

## Dependencies

- **Angular**: Core framework for building the SPA.
- **Angular Material**: Provides UI components with Material Design.
- **RxJS**: Handles asynchronous requests and responses from the API.

### `package.json`

Key dependencies:
- `@angular/core`: ^14.2.0
- `@angular/material`: ^13.0.0
- `rxjs`: ~7.5.0

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
```

This `README.md` covers the essential details of the Angular client, explaining its functionality, setup, and key components in a concise manner. Let me know if there’s anything more you’d like to include!

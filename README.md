# Users Frontend Practical Test

A modern web application built with Next.js for managing and displaying user information with an interactive map interface.

## 🌐 Live Demo

<img width="1512" alt="image" src="https://github.com/user-attachments/assets/e587f9e9-960f-415c-b4c0-6b283c647e15" />

The application is deployed on Vercel and can be accessed at: [Users Frontend App](https://users-frontend-practical-test.vercel.app/)

## 🚀 Tech Stack

- **Framework**: Next.js 15.1.7 with React 19
- **Styling**: TailwindCSS
- **Language**: TypeScript
- **Maps**: Leaflet & React-Leaflet
- **Testing**: Jest & React Testing Library
- **Code Quality**: ESLint, Prettier
- **Build Tool**: Turbopack

## 📁 Project Structure

```bash
src/
├── app/          # Next.js app directory with pages and routing
├── components/   # Reusable React components
├── Hooks/        # Custom React hooks
├── services/     # API and external service integrations
├── test/         # Test utilities and setup
└── types/        # Global TypeScript type definitions
```

## 🛠️ Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm

### Installation

1. Clone the repository:

```bash
git clone https://github.com/rodrfentanes21/users_frontend_practical_test.git
cd users_frontend_practical_test
```

2. Install dependencies:

```bash
npm install
```

1. Run the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:3000`

## 🧪 Testing

The project uses Jest and React Testing Library for testing. The following test scripts are available:

```bash
# Run tests
npm test

# Run tests in watch mode
npm run test:watch

# Generate test coverage report
npm run test:coverage
```

## 📝 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Create production build
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting

## 🔧 Code Quality

The project maintains high code quality standards through:

- ESLint for code linting
- Prettier for code formatting
- TypeScript for type safety
- Pre-configured Jest for testing
- Strict TypeScript configuration

## 🌟 Features

- Modern React with functional components and hooks
- Server-side rendering with Next.js
- Interactive map integration with Leaflet
- Responsive design with TailwindCSS
- Type-safe development with TypeScript
- Comprehensive test coverage
- Code quality tools integration

## 📦 Dependencies

### Main Dependencies

- next: ^15.1.7
- react: ^19.0.0
- react-dom: ^19.0.0
- leaflet: ^1.9.4
- react-leaflet: ^5.0.0

### Development Dependencies

- TypeScript and related tools
- Testing libraries (Jest, React Testing Library)
- Code quality tools (ESLint, Prettier)
- Build and development tools

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feat/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feat/AmazingFeature`)
5. Open a Pull Request

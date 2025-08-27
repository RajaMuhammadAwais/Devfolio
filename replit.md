# Portfolio Website

## Overview

This is a modern, responsive portfolio website for a DevOps engineer built with React, Express, and TypeScript. The application features a single-page design showcasing professional experience, skills, projects, and contact information. It includes a contact form with backend storage, GitHub repository integration, and a comprehensive UI component library built with shadcn/ui and Tailwind CSS.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management and caching
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **Form Handling**: React Hook Form with Zod validation for type-safe form management
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Server**: Express.js with TypeScript for API endpoints
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Schema Management**: Drizzle Kit for database migrations and schema management
- **Storage Layer**: Abstracted storage interface with in-memory implementation for development
- **Session Management**: Connect-pg-simple for PostgreSQL session storage
- **Development**: Hot module replacement with Vite middleware integration

### Data Storage Solutions
- **Primary Database**: PostgreSQL configured through Neon serverless connection
- **ORM**: Drizzle ORM with schema-first approach for type safety
- **Schema Definition**: Centralized schema in `shared/schema.ts` with Zod validation
- **Tables**: Users and contact messages with UUID primary keys
- **Migrations**: Automated migration system using Drizzle Kit

### API Design
- **REST Endpoints**: Express routes for contact form submission and GitHub proxy
- **Data Validation**: Zod schemas for request/response validation
- **Error Handling**: Centralized error handling middleware
- **CORS Proxy**: GitHub API proxy to avoid client-side CORS issues
- **Logging**: Request/response logging with performance metrics

### Authentication and Authorization
- **Current State**: Basic user schema prepared but not implemented
- **Prepared Features**: User authentication structure with username/password
- **Session Storage**: PostgreSQL-based session management configured
- **Future Enhancement**: Ready for JWT or session-based authentication implementation

## External Dependencies

### Cloud Services
- **Neon Database**: Serverless PostgreSQL hosting for production data storage
- **GitHub API**: Repository data fetching for portfolio showcase
- **Font Services**: Google Fonts integration for typography (Inter, Architects Daughter, DM Sans, Fira Code, Geist Mono)

### Key Libraries
- **UI Framework**: React with TypeScript for component development
- **Database**: Drizzle ORM with PostgreSQL driver for database operations
- **Validation**: Zod for runtime type validation and schema definition
- **HTTP Client**: Native fetch API with TanStack Query for server state
- **Styling**: Tailwind CSS with shadcn/ui component system
- **Development**: Vite with React plugin and TypeScript support

### Development Tools
- **Build System**: Vite for development server and production builds
- **Type Checking**: TypeScript with strict configuration
- **Code Quality**: ESLint and Prettier configuration (implied by project structure)
- **Replit Integration**: Vite plugins for Replit development environment
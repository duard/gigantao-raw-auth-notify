# Sankhya Authentication Module

This document describes the Sankhya authentication module, which provides a secure authentication system using a read-only SQL Server database and session management in MySQL.

## Features

-   **Sankhya Authentication**: Users are authenticated against the `TSIUSU` table in a read-only SQL Server database.
-   **Session Management**: User sessions are stored in a MySQL database, allowing for active session tracking and invalidation.
-   **JWT Tokens**: JSON Web Tokens are used for stateless authentication, with each token linked to a session.
-   **Real-time Notifications**: New logins are notified in real-time using WebSockets.
-   **Login Event Logging**: All login events are logged in the `notifications` table in MySQL.
-   **Session Invalidation**: Logged-in users can be "taken down" by invalidating their sessions.

## Architecture

The Sankhya authentication module is composed of the following components:

-   **`sankhya.service.ts`**: Contains the core business logic for authentication, session management, and event logging.
-   **`sankhya.controller.ts`**: Handles the HTTP requests for the Sankhya module, including login, session invalidation, and session retrieval.
-   **`sankhya.routes.ts`**: Defines the routes for the Sankhya module.
-   **`sankhya.types.ts`**: Defines the data structures used in the Sankhya module.

## Authentication Flow

1.  The user sends a `POST` request to `/sankhya/login` with their username and password.
2.  The `sankhya.controller.ts` receives the request and calls the `login` function in `sankhya.service.ts`.
3.  The `login` function authenticates the user against the `TSIUSU` table in the read-only SQL Server database.
4.  If the authentication is successful, a new session is created in the `user_sessions` table in MySQL.
5.  A JWT token is generated and associated with the session.
6.  A "new login" notification is created and emitted via WebSockets.
7.  The JWT token and session ID are returned to the user.

## Session Invalidation

To invalidate a user's session (i.e., "take them down"), an administrator can send a `POST` request to `/sankhya/sessions/:sessionId/invalidate`. This will mark the session as inactive in the `user_sessions` table, effectively logging the user out.

## API Endpoints

-   `POST /sankhya/login`: Authenticates a user and creates a new session.
-   `POST /sankhya/sessions/:id/invalidate`: Invalidates a user's session.
-   `GET /sankhya/sessions/:userId`: Retrieves all active sessions for a user.

# WebAuthn Angular Demo

This repository provides a simple Angular application to demonstrate the use of WebAuthn for user registration and authentication.

## Important Notes

- **Hardcoded Values**: This example uses hardcoded values for simplicity. In a real-world scenario, you would get the challenge and user details from your server.
- **Browser Compatibility**: Ensure you are using a browser that supports WebAuthn to test this application.
- **Backend Implementation**: For a complete and secure WebAuthn implementation, a backend is crucial. The backend should be capable of:
  - Sending challenges
  - Validating responses from the frontend
  - Handling the various intricacies of the WebAuthn protocol

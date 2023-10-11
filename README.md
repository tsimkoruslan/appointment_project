# Project Name README

## Project Overview

This README provides an overview of the project's structure and components, including routers, controllers, middlewares, and services. It also briefly describes error handling and licensing information.

## Project Structure

The project follows a modular structure, dividing its functionality into different components for better organization and maintainability.

### Routers

1. **appointmentRouter**

    - **Route:** /appointment
    - **Usage:** Manages appointment-related routes.
    - **Endpoints:**
        - **GET /:** Retrieve all appointments.
        - **POST /:** Create a new appointment.
        - **DELETE /:** Delete an appointment.

2. **doctorRouter**

    - **Route:** /doctor
    - **Usage:** Manages doctor-related routes.
    - **Endpoints:**
        - **GET /:** Retrieve all doctors.
        - **POST /:** Create a new doctor.
        - **DELETE /:** Delete a doctor.

3. **patientRouter**

    - **Route:** /patient
    - **Usage:** Manages patient-related routes.
    - **Endpoints:**
        - **GET /:** Retrieve all patients.
        - **POST /:** Create a new patient.
        - **DELETE /:** Delete a patient.

### Controllers

1. **AppointmentController**

    - **Purpose:** Manages appointment-related operations.
    - **Methods:**
        - `createAppointment(req, res, next)`: Create a new appointment.
        - `getAppointments(req, res, next)`: Retrieve appointments.
        - `deleteAppointment(req, res, next)`: Delete an appointment.

2. **DoctorController**

    - **Purpose:** Manages doctor-related operations.
    - **Methods:**
        - `createDoctor(req, res, next)`: Create a new doctor.
        - `getDoctors(req, res, next)`: Retrieve doctors.
        - `deleteDoctor(req, res, next)`: Delete a doctor.

3. **PatientController**

    - **Purpose:** Manages patient-related operations.
    - **Methods:**
        - `createPatient(req, res, next)`: Create a new patient.
        - `getPatients(req, res, next)`: Retrieve patients.
        - `deletePatient(req, res, next)`: Delete a patient.

### Middlewares

1. **commonMiddleware**

    - **Purpose:** Provides common functionality shared across routes.

### Services

1. **AppointmentService**

    - **Purpose:** Provides business logic for appointment-related operations.
    - **Methods:**
        - `createAppointment(dto)`: Create an appointment and handle time slot conflicts.
        - `getAppointments()`: Retrieve all appointments.
        - `deleteOne(name)`: Delete an appointment.

2. **DoctorService** (Not provided in the code snippet)

    - **Purpose:** Manages doctor-related business logic.

3. **PatientService** (Not provided in the code snippet)

    - **Purpose:** Manages patient-related business logic.

## Error Handling

The code appears to handle errors using `ApiError`. Specific error messages and handling may vary depending on the full code implementation.

## License

Specify the project's license and provide any necessary information regarding usage and distribution. If you haven't included licensing information yet, consider adding it to your project.

---

For detailed implementation and usage, please refer to the full project codebase.


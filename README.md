# 🍽️ TheMealDB Explorer  
A full-stack recipe search application built using **Java Spring Boot**, **React + Vite**, **TailwindCSS**, and **Redis caching**.

This project consumes **TheMealDB public API** and provides a fast, modern UI with search, categories, random meals, and detailed recipe pages.

---

## 🚀 Tech Stack

### **Backend (Spring Boot)**
- Java 17  
- Spring Boot 3.x  
- Spring Web  
- Redis Cache (Lettuce)  
- Jackson JSON Parser  
- RestTemplate-based external API calls  

### **Frontend (React)**
- React + Vite  
- TailwindCSS  
- Axios  
- React Router DOM  

### **Cache Layer**
- **Redis 3.0+**  
Used to store API responses for faster performance.

---

## 🔌 Ports Used

| Service       | Port |
|---------------|------|
| **Backend (Spring Boot)** | `8080` |
| **Frontend (React + Vite)** | `5173` |
| **Redis Server** | `6379` |

Make sure nothing else is running on these ports.

---

## 📦 Requirements Before Running

### ✔ Install Java 17  
### ✔ Install Maven  
### ✔ Install Node.js + npm  
### ✔ Install Redis (Windows .exe or WSL)  

To test Redis:
```bash
redis-cli ping

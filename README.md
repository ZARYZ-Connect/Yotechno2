# Yotechno — Official Website

A full-stack website for **Yotechno Pvt Ltd** built with React (Vite) frontend and Django REST backend.

---

## 🏗️ Project Structure

```
Yotechno New/
├── frontend/          ← React (Vite) + Nginx
│   ├── src/
│   ├── Dockerfile
│   ├── nginx.conf
│   └── package.json
│
├── backend/           ← Django REST Framework
│   ├── yotechno/      (Django settings)
│   ├── core/          (Contact & Solutions API)
│   ├── Dockerfile
│   ├── entrypoint.sh
│   └── requirements.txt
│
├── docker-compose.yml
└── .gitignore
```

---

## 🚀 Quick Start (Docker)

### Prerequisites
- Docker Engine 24+
- Docker Compose Plugin v2

### Run with Docker Compose

```bash
# Clone the repository
git clone <your-repo-url>
cd "Yotechno New"

# Build and start containers
docker compose up -d --build

# View logs
docker compose logs -f
```

Once running:
- **Frontend**: http://localhost:8090
- **Backend API**: http://localhost:8015/api/

### Stop containers

```bash
docker compose down
```

---

## 🛠️ Local Development (without Docker)

### Backend

```bash
cd backend
python -m venv venv
venv\Scripts\activate        # Windows
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver 8000
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend dev server: http://localhost:5174

---

## 🔧 Environment Variables

### Backend (`docker-compose.yml` → `backend.environment`)

| Variable | Default | Description |
|----------|---------|-------------|
| `DJANGO_SECRET_KEY` | insecure default | Set a strong secret in production |
| `DJANGO_DEBUG` | `False` | Set to `True` for development |
| `DJANGO_ALLOWED_HOSTS` | `*` | Comma-separated list of allowed hosts |
| `CORS_ALLOWED_ORIGINS` | localhost origins | Comma-separated allowed CORS origins |
| `DB_PATH` | `/app/data/db.sqlite3` | Path to SQLite database file |

### Frontend (build args in `docker-compose.yml`)

| Variable | Default | Description |
|----------|---------|-------------|
| `VITE_API_URL` | `""` (empty — uses Nginx proxy `/api/`) | Backend API base URL |

---

## 📦 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/contact/` | Submit contact form |
| `GET` | `/api/solutions/` | List all services/solutions |

---

## 🐳 Deployment (Production Server)

```bash
# On your server
git pull origin main

# Rebuild and restart
docker compose down
docker compose up -d --build

# Check status
docker ps | grep yotechno
```

**Ports used:**
- Frontend: `8090` → served via Nginx
- Backend: `8015` → Django via Gunicorn

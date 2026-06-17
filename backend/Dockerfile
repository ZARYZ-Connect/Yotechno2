# ---- Backend Dockerfile ----
FROM python:3.11-slim

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

# Set work directory
WORKDIR /app

# Install system dependencies
RUN apt-get update && apt-get install -y \
    --no-install-recommends \
    dos2unix \
    && rm -rf /var/lib/apt/lists/*

# Install Python dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy project files
COPY . .

# Convert entrypoint to unix line endings and make executable
RUN dos2unix entrypoint.sh && chmod +x entrypoint.sh

# Create directory for static files and db
RUN mkdir -p /app/staticfiles /app/data

EXPOSE 8000

ENTRYPOINT ["/app/entrypoint.sh"]

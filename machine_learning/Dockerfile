# syntax=docker/dockerfile:1
FROM python:3.8-slim-buster

# Create app directory
WORKDIR /app

# Get the requirements
COPY requirements.txt requirements.txt

# Install requirements
RUN pip3 install -r requirements.txt

# Add source code to image
COPY . .

EXPOSE 5000

# Run flask server
CMD [ "python3", "-m" , "flask", "run", "--host=0.0.0.0"]
FROM rasa/rasa:latest-full
COPY . /app
WORKDIR /app
CMD ["run", "--enable-api", "--cors", "*"]

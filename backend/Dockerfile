# используем этот образ как базовый 
FROM python:3

# просим питон не компилировать байткод, потому что контейнер второй раз не запустится
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

# рабочая директория в контейнере 
WORKDIR /app

# скопировали зависимости, установили
COPY requirements.txt /app
RUN pip install -r requirements.txt

CMD [ "python", "manage.py", "runserver", "0.0.0.0:8000" ]


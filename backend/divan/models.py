from django.db import models

class User(models.Model):
    telegram_id = models.BigIntegerField(unique=True, primary_key=True)
    login = models.CharField(max_length=50)
    password = models.CharField(max_length=100)
    picture = models.BinaryField(null=True)
    birthday = models.DateField(null=True)
    name = models.CharField(max_length=50, null=True)
    surname = models.CharField(max_length=50, null=True)
    phone_number = models.BigIntegerField()
    default_view = models.IntegerField()


class Task(models.Model):
    task_id = models.AutoField(primary_key=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    parent_task = models.ForeignKey('self', on_delete=models.CASCADE, null=True, blank=True)
    title = models.CharField(max_length=100)
    description = models.CharField(max_length=1000, null=True)
    priority = models.IntegerField(null=True)
    is_done = models.BooleanField(default=False)
    start_date = models.DateTimeField(null=True)
    end_date = models.DateTimeField(null=True)
    #geotag = models.CharField(null=True)

    def __str__(self):
        return self.title


class File(models.Model):
    file_id = models.AutoField(primary_key=True)
    task = models.ForeignKey(Task, on_delete=models.CASCADE)
    title = models.CharField(max_length=100)
    data = models.BinaryField()  # Можно использовать FileField для загрузки файлов

    def __str__(self):
        return self.title


class Tag(models.Model):
    tag_id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=50)

    def __str__(self):
        return self.title


class TaskTagRelation(models.Model):
    task = models.ForeignKey(Task, on_delete=models.CASCADE)
    tag = models.ForeignKey(Tag, on_delete=models.CASCADE)
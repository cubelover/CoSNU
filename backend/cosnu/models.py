from django.db import models

# Create your models here.


class Lecture(models.Model):
    name = models.CharField(max_length=50)
    id = models.CharField(max_length=50)
    semester = models.CharField(max_length=50)




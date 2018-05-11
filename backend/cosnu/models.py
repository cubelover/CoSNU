from django.db import models
from django.contrib.auth.models import User

# Create your models here.


class Lecture(models.Model):
    name = models.CharField(max_length=50)
    code = models.CharField(max_length=50)
    professor = models.CharField(max_length=20)
    semester = models.CharField(max_length=50)

    def __str__(self):
        return "%s %s %s" % (self.name, self.semester, self.code)


class Author(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    lecture = models.ForeignKey(Lecture, on_delete=models.CASCADE)
    nickname = models.CharField(max_length=20)
    alias = models.CharField(max_length=20)

    def __str__(self):
        return "%s %s" % (self.user, self.lecture)


class Article(models.Model):
    title = models.CharField(max_length=100)
    author = models.ForeignKey(Author, on_delete=models.CASCADE)
    contents = models.CharField(max_length=2000)
    create_time = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
#   upvotes, downvotes, ...
#

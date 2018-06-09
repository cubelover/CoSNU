from django.db import models
from django.contrib.auth.models import User
from django.conf import settings
from django.db.models.signals import post_save
from django.dispatch import receiver
from rest_framework.authtoken.models import Token

# Create your models here.


class Lecture(models.Model):
    name = models.CharField(max_length=50)
    code = models.CharField(max_length=50)
    professor = models.CharField(max_length=20)
    semester = models.CharField(max_length=50)
    credit = models.IntegerField()

    def __str__(self):
        return "%s %s %s" % (self.name, self.semester, self.code)


class Author(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    lecture = models.ForeignKey(Lecture, on_delete=models.CASCADE)
    nickname = models.CharField(max_length=20)
    alias = models.CharField(max_length=20)

    class Meta:
        unique_together = ('user', 'lecture')

    def __str__(self):
        return "%s %s" % (self.user, self.lecture)


class Article(models.Model):
    title = models.CharField(max_length=100)
    author = models.ForeignKey(Author, on_delete=models.CASCADE)
    contents = models.CharField(max_length=2000)
    create_time = models.DateTimeField(auto_now_add=True)
    upvote = models.ManyToManyField(User, related_name='upvote_articles')
    downvote = models.ManyToManyField(User, related_name='downvote_articles')

    def __str__(self):
        return self.title


class Comment(models.Model):
    article = models.ForeignKey(Article, on_delete=models.CASCADE)
    author = models.ForeignKey(Author, on_delete=models.CASCADE)
    contents = models.CharField(max_length=2000)
    create_time = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return "%s: %s" % (self.author, self.contents)


@receiver(post_save, sender=settings.AUTH_USER_MODEL)
def create_auth_token(sender, instance=None, created=False, **kwargs):
    if created:
        Token.objects.create(user=instance)

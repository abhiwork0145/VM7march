from django.db import models

# Create your models here.

class UserTable(models.Model):
    userid = models.AutoField(primary_key=True)
    username = models.CharField(max_length=30, null=True, blank=True)
    email = models.EmailField(max_length=50, null=True, blank=True)
    password = models.CharField(max_length=20, null=True, blank=True)

    def __str__(self) :
        return self.username

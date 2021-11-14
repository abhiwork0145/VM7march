from django.db import models
from passlib.hash import pbkdf2_sha256

# Create your models here.

class UserTable(models.Model):
    userid = models.AutoField(primary_key=True)
    username = models.CharField(max_length=30, null=True, blank=True)
    email = models.EmailField(max_length=50, null=True, blank=True)
    password = models.TextField(null=True, blank=True)

    def __str__(self):
        return self.username

    def verify_password(self, raw_password):
        return pbkdf2_sha256.verify(raw_password, self.password)
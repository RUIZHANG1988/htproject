from __future__ import unicode_literals

from django.db import models

# Create your models here.
class Userprofile(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    name = models.CharField(max_length=200, blank=True, default='')
    specialty = models.CharField(max_length=100, blank=True, default='')
    emailVerified = models.BooleanField(default=False)
    phoneVerified = models.BooleanField(default=False)
    email = models.EmailField(default='')
    phone = models.CharField(max_length=100, blank=True, default='')
    area  = models.CharField(max_length=100, blank=True, default='')
    introduction = models.TextField(default = '')


    class Meta:
        ordering = ('created',)

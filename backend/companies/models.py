from django.db import models

# Create your models here.

class Company(models.Model):
  name = models.CharField(max_length=100, unique=True) # index
  address = models.CharField(max_length=300)
  employee_size = models.IntegerField(default=0)
  email = models.EmailField(max_length=254, unique=True) # index
  phone = models.CharField(max_length=100)
  website = models.URLField(max_length=200)
  created_at = models.DateTimeField(auto_now_add=True)
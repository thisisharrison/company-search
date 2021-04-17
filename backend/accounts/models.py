from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager

class UserAccountManager(BaseUserManager):
  def create_user(self, username, email, password=None):
    if username is None:
      raise ValueError('Username cannot be blank.')

    if email is None:
      raise ValueError('Email cannout be blank.')
    
    user = self.model(username=username, email=self.normalize_email(email))
    user.set_password(password)
    user.save()

    return user

  def create_superuser(self, username, email, password=None):
    if password is None:
      raise ValueError('Superuser must have password.')
    
    user = self.create_user(username, email, password)
    
    user.is_superuser = True
    user.is_staff = True
    user.save()

    return user


class UserAccount(AbstractBaseUser, PermissionsMixin):
  username = models.CharField(db_index=True, max_length=255, unique=True)
  email = models.EmailField(db_index=True, unique=True)
  is_active = models.BooleanField(default=True)    
  is_staff = models.BooleanField(default=False)

  USERNAME_FIELD = 'username'
  REQUIRED_FIELDS = ['email']

  objects = UserAccountManager()

  def __str__(self):
    return self.username
  

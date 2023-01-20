from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone

# Create your models here.
class Insure_Package(models.Model):
    package_name = models.CharField(default="no package_name", max_length=200)
    price = models.CharField(default="no price", max_length=200)
    description = models.CharField(default="no description", max_length=1000)

    def __str__(self):
        return self.package_name

class Pet(models.Model):
    type = models.IntegerField(default='no type')
    user_id = models.ForeignKey(User, on_delete = models.CASCADE, related_name = 'pets', default = 'no user_id')
    package_id = models.ForeignKey(Insure_Package, on_delete = models.CASCADE, related_name = 'pets', default='no package_id')  
    pet_name = models.CharField(default='no pet_name', max_length=200)
    species = models.CharField(default='no species', max_length=200)
    image_url = models.CharField(default='no image_url', max_length = 600) 
    start_date = models.DateTimeField(default=timezone.now)
    expire_date = models.DateTimeField()

    def __str__(self):
        return self.pet_name
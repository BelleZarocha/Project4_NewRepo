from django.contrib import admin
from . import models

# Register your models here.
@admin.register(models.Insure_Package)
class PackageAdmin(admin.ModelAdmin):
    list_display = ('id', 'package_name', 'price', 'description')
    pop_fields = {'type', 'price'}
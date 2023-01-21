from rest_framework import serializers
from pets_insure.models import Insure_Package, Pet

class PackageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Insure_Package
        fields = ('id', 'package_name', 'price', 'description')

class PetSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pet
        fields = ('id', 'type', 'package_id', 'pet_name', 'species', 'image_url', 'start_date', 'expire_date')
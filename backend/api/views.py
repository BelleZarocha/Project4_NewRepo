from rest_framework import generics
from pets_insure.models import Insure_Package, Pet
from .serializers import PackageSerializer, PetSerializer

# Create your views here.
class PackageList(generics.ListCreateAPIView):
    queryset = Insure_Package.objects.all()
    serializer_class = PackageSerializer
    pass 

class PackageDetail(generics.RetrieveAPIView):
    queryset = Insure_Package.objects.all()
    serializer_class = PackageSerializer
    pass

class PetList(generics.ListCreateAPIView):
    queryset = Pet.objects.all()
    serializer_class = PetSerializer
    pass 

class PetDetail(generics.RetrieveDestroyAPIView):
    pass
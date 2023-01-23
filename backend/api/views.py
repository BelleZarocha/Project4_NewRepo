from rest_framework import generics
from pets_insure.models import Insure_Package, Pet
from accounts.models import NewUser
from .serializers import PackageSerializer, PetSerializer
from rest_framework.permissions import IsAdminUser, DjangoModelPermissionsOrAnonReadOnly

# Create your views here.
class PackageList(generics.ListCreateAPIView):
    permission_classes = [IsAdminUser, DjangoModelPermissionsOrAnonReadOnly]
    queryset = Insure_Package.objects.all()
    serializer_class = PackageSerializer
    pass 

class PackageDetail(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [IsAdminUser]
    queryset = Insure_Package.objects.all()
    serializer_class = PackageSerializer
    pass

class PetList(generics.ListCreateAPIView):
    queryset = Pet.objects.all()
    serializer_class = PetSerializer
    pass 

class PetDetail(generics.RetrieveDestroyAPIView):
    pass

class UserList(generics.ListCreateAPIView):
    queryset = NewUser.objects.all()
    serializer_class = PetSerializer
    pass 

class UserDetail(generics.RetrieveDestroyAPIView):
    pass
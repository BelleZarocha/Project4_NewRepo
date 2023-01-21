from django.urls import path
from .views import PackageList, PackageDetail, PetList, PetDetail

app_name = 'api'

urlpatterns = [
    path('packages/<int:pk>/', PackageDetail.as_view(), name='packagedetail'),
    path('packages/', PackageList.as_view(), name='packagelist'),
    path('pets/<int:pk>/', PetDetail.as_view(), name='petdetail'),
    path('pets/', PetList.as_view(), name='petlist'),
]
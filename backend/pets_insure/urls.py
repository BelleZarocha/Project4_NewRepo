from django.urls import path
from django.views.generic import TemplateView

app_name = 'pets_insure'

urlpatterns = [
    path('', TemplateView.as_view(template_name = 'pets_insure/index.html'))
]
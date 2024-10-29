from django.urls import path

from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path('frontend', views.frontend, name='frontend'),
]

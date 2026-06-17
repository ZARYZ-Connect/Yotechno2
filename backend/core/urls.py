from django.urls import path
from .views import ContactAPIView, SolutionsAPIView

urlpatterns = [
    path('contact/', ContactAPIView.as_view(), name='contact'),
    path('solutions/', SolutionsAPIView.as_view(), name='solutions'),
]

from django.urls import path
from . import views

urlpatterns = [
  path('api/companies/', views.CompanyListCreate.as_view() ),
  path('api/companies/<int:pk>', views.company_detail)
]
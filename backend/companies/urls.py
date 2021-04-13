from django.urls import path
from . import views

urlpatterns = [
  path('api/companies/', views.CompanyList.as_view() ),
  path('api/companies/<int:pk>', views.CompanyDetail.as_view())
]
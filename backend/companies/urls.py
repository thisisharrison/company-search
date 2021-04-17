from django.urls import path
from . import views

urlpatterns = [
  path('api/companies/', views.CompanyList.as_view() ),
  path('api/companies/<int:pk>', views.CompanyDetail.as_view()),
  path('api/companies/<int:pk>/favorite', views.add_favorite),
  path('api/companies/<int:pk>/unfavorite', views.remove_favorite),
  path('api/companies/my-favorites', views.my_favourites),
]
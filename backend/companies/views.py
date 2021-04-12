from django.shortcuts import render
from rest_framework import status, generics
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Company
from .serializers import CompanySerializer

# Create your views here.

# GET and POST requests
class CompanyListCreate(generics.ListCreateAPIView):
  queryset = Company.objects.all()
  serializer_class = CompanySerializer

# SHOW, EDIT, DELETE an individual company
@api_view(['GET', 'PUT', 'DELETE'])
def company_detail(request, pk):
  print(pk)
  try:
    company = Company.objects.get(pk=pk)
  except Company.DoesNotExist:
    return Response(status=status.HTTP_404_NOT_FOUND)
  
  if request.method == 'GET':
    serializer = CompanySerializer(company)
    return Response(serializer.data)
  
  # TODO: check if request email is company email

  elif request.method == 'PUT':
    serializer = CompanySerializer(company, data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

  # TODO: check if request email is company email

  elif request.method == 'DELETE':
      company.delete()
      return Response(status=status.HTTP_204_NO_CONTENT)

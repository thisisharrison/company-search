from django.shortcuts import render
from django.http import Http404
from rest_framework import status, generics
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Company
from .serializers import CompanySerializer

# Create your views here.

# index and create
class CompanyList(APIView):
  def get(self, request, format=None):
    companies = Company.objects.all()
    serializer = CompanySerializer(companies, many=True)
    return Response(serializer.data)
  
  def post(self, request, format=None):
    serializer = CompanySerializer(data=request.data)
    if serializer.is_valid():
      serializer.save()
      return Response(serializer.data, status=status.HTTP_201_CREATED)

# show, put, delete
class CompanyDetail(APIView):
  def get_object(self, pk):
    try:
      return Company.objects.get(pk=pk)
    except Company.DoesNotExist:
      raise Http404

  def get(self, request, pk, format=None):
    company = self.get_object(pk)
    serializer = CompanySerializer(company)
    return Response(serializer.data)

  def put(self, request, pk, format=None):
    company = self.get_object(pk)
    serializer = CompanySerializer(company, data=request.data)
    if serializer.is_valid():
      serializer.save()
      return Response(serializer.data)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

  def delete(self, request, pk, format=None):
    company = self.get_object(pk)
    company.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)

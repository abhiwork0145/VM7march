from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.decorators import APIView
from rest_framework import status
from rest_framework.parsers import JSONParser
from .models.product import Product
from store.serializers import ProductSerializer
from store.models import Product

import json

class ProductList(APIView):
    def get(self, request):
        products = Product.objects.all()
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)
        
    def post(self, request):
        serializer = ProductSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status= status.HTTP_201_CREATED)
        return Response(serializer.error, status= status.HTTP_400_BAD_REQUEST)


class ProductDetails(APIView):
    def get_object(self, SKU_ID):
        try:
            return Product.objects.get(SKU_ID=SKU_ID)

        except Product.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

    def get(self, request, SKU_ID):
        product = self.get_object(SKU_ID)
        serializer = ProductSerializer(product)
        return Response(serializer.data)

    def put(self, request, SKU_ID):
        product = self.get_object(SKU_ID)
        serializer = ProductSerializer(product, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data) 
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, SKU_ID):
        product = self.get_object(SKU_ID)
        product.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
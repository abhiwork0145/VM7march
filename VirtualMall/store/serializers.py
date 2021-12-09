from django.db import models
from django.db.models import fields
from .models.product import Product
from rest_framework import serializers

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ['SKU_ID', 'Product_Name', 'Product_Category', 'Category', 'QTY', 'Price']



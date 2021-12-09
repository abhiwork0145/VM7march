from django.db import models
from .category import Category
from .product_category import Product_Category

class Product(models.Model):
    SKU_ID = models.CharField(primary_key=True, max_length=10)
    Product_Name = models.CharField(max_length=50)
    Category = models.ForeignKey(Category, on_delete=models.CASCADE, default=1)
    Product_Category = models.ForeignKey(Product_Category, on_delete=models.CASCADE, default=1)
    QTY = models.IntegerField(default=0)
    Price = models.IntegerField(default=0)
    

 
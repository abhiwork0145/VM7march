from django.db import models

class ProductInfo(models.Model):
    SKU_ID = models.CharField(primary_key=True, max_length=10)
    Product_Name = models.CharField(max_length=50)
    QTY = models.IntegerField(default=0)
    Price = models.IntegerField(default=0)
    

 
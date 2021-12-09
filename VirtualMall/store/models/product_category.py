from django.db import models

class Product_Category(models.Model):
    product_Name = models.CharField(max_length=20)

    def __str__(self):
        return self.product_Name
   
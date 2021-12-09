from django.contrib import admin
from .models.product_info import ProductInfo
from .models.product import Product
from .models.category import Category
from .models.product_category import Product_Category

class AdminProductInfo(admin.ModelAdmin):
    list_display = ['SKU_ID', 'Product_Name', 'QTY', 'Price']

class AdminProduct(admin.ModelAdmin):
    list_display = ['SKU_ID', 'Product_Name', 'Product_Category', 'Category', 'QTY', 'Price']

class AdminCategory(admin.ModelAdmin):
    list_display = ['Name']


class AdminProduct_Category(admin.ModelAdmin):
    list_display = ['product_Name']


admin.site.register(ProductInfo, AdminProductInfo )
admin.site.register(Product, AdminProduct )
admin.site.register(Category, AdminCategory)
admin.site.register(Product_Category, AdminProduct_Category)
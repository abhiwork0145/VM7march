from django.urls import path
from django.urls.resolvers import URLPattern
from .import views
from .views import ProductList, ProductDetails

urlpatterns = [
     path('show/', ProductList.as_view()),
     path('products/<int:SKU_ID>/', ProductDetails.as_view()),
]
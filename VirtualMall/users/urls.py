from django.urls import path
from .views import UserRegistration, FacebookLogin, GoogleLogin, UserRegistration, UserLogin

urlpatterns = [
    path('registration/', UserRegistration.as_view()),
    path('rest-auth/facebook/', FacebookLogin.as_view(), name='fb_login'),
    path('rest-auth/google/', GoogleLogin.as_view(), name='google_login'),
    path('registration/', UserRegistration.as_view()),
    path('login/', UserLogin.as_view())
    
]
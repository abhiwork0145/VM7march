from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.parsers import JSONParser
from users.models import UserTable
from .serializers import UserSerializer
from allauth.socialaccount.providers.facebook.views import FacebookOAuth2Adapter
from allauth.socialaccount.providers.google.views import GoogleOAuth2Adapter
from rest_auth.registration.views import SocialLoginView



class UserRegistration(APIView):

    def post(self,request, id=None):
        data = JSONParser().parse(request)
        userserializer = UserSerializer(data=data)
        try:
            userserializer.run_validators(data)
        except Exception as e:
            return Response({"Message":e.detail})
        if userserializer.is_valid():
            userserializer.save()
            return Response({"success": "Signed in succesfully"})
        return Response({"error":str(userserializer.errors)})

    def get(self,request, id=None):
        data = UserTable.objects.all()
        userserializer = UserSerializer(data, many = True)
        return Response({"data":userserializer.data})

class FacebookLogin(SocialLoginView):
    adapter_class = FacebookOAuth2Adapter

class GoogleLogin(SocialLoginView):
    adapter_class = GoogleOAuth2Adapter
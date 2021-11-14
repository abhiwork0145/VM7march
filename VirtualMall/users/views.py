from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.parsers import JSONParser
from users.models import UserTable
from .serializers import UserSerializer

# Create your views here.

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
        return Response({"error":userserializer.errors})

    def get(self,request, id=None):
        data = UserTable.objects.all()
        userserializer = UserSerializer(data, many = True)
        return Response({"data":userserializer.data})

    def delete(self, request, id=None):
        UserTable.objects.all().delete()
        return Response({"data":"data deleted"})

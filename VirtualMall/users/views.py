from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.parsers import JSONParser
from users.models import UserTable
from .serializers import UserSerializer
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.permissions import IsAuthenticated


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
        return Response({"error":str(userserializer.errors)})

    def get(self,request, id=None):
        data = UserTable.objects.all()
        userserializer = UserSerializer(data, many = True)
        return Response({"data":userserializer.data})



class UserLogin(APIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]
    
    def post(self,request):
        data = JSONParser().parse(request)
        try: 
            user = UserTable.objects.get(email = data["email"])
            if user.password == (data["password"]):
                refresh = RefreshToken.for_user(user)
                return Response({"success":True , "email":data["email"], "id":user.pk, "password":user.password,
                                'refresh': str(refresh),'access': str(refresh.access_token)})
            return Response({"error":"Wrong email or password"})
        except:
            return Response({"error":"Wrong email or password"})
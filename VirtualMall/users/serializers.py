from rest_framework import serializers
from .models import UserTable
from rest_framework.validators import UniqueTogetherValidator
import re
from passlib.hash import pbkdf2_sha256

class UserSerializer(serializers.ModelSerializer):

    def validate_password(self, value):
        if len(value) < 8:
            raise serializers.ValidationError("Ensure this field has minimum 8 characters")
        return value

    def validate_email(self, value):
        if value and UserTable.objects.filter(email__exact=value).exists():
            raise serializers.ValidationError("This field must be unique.")
        regex = r"^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$"
        if(re.match(regex, value)==False):
            raise serializers.ValidationError("Enter a valid email address.")
        if len(value)==0:
            raise serializers.ValidationError("This field must not be blank.")
        return value


    def validate_username(self,value):
        if len(value) > 32:
            raise serializers.ValidationError("Ensure this field has no more than 32 characters.")
        if len(value)==0:
            raise serializers.ValidationError("This field must not be blank.")
        if value and UserTable.objects.filter(username__exact=value).exists():
            raise serializers.ValidationError("This field must be unique.")
        return value

    def create(self, validated_data):
        enc_string = pbkdf2_sha256.hash(validated_data['password'], rounds=12000, salt_size=32)
        user = UserTable(
            email=validated_data['email'],
            username=validated_data['username'],
            password = enc_string
        )
        user.save()
        return user

    class Meta:
        model = UserTable
        fields = ('email', 'username', 'password')
        extra_kwargs = {'password': {'write_only': True}}

        validators = [
            UniqueTogetherValidator(
                queryset = UserTable.objects.all(),
                fields = ['username','email']   
            )
        ]
from rest_framework import serializers
from userprofiles.models import Userprofile


class UserprofileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Userprofile
        fields = ('id', 'name', 'specialty', 'emailVerified', 'phoneVerified', 'email','phone','area','introduction')

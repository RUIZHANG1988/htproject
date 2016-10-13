from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from userprofiles.models import Userprofile
from userprofiles.serializers import UserprofileSerializer


@api_view(['GET', 'POST'])
def userprofile_list(request, format=None):
    """
    List all snippets, or create a new userprofile.
    """
    if request.method == 'GET':
        userprofiles = Userprofile.objects.all()
        serializer = UserprofileSerializer(userprofiles, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = UserprofileSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'PUT', 'DELETE'])
def userprofile_detail(request, pk, format=None):
    """
    Retrieve, update or delete a userprofile instance.
    """
    try:
        userprofile = Userprofile.objects.get(pk=pk)
    except Userprofile.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = UserprofileSerializer(userprofile)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = UserprofileSerializer(userprofile, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        userprofile.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

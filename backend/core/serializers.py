
from doctest import testfile
from rest_framework import serializers
from .models import *
  
class GovSerializer(serializers.ModelSerializer):
    no_universities= serializers.SerializerMethodField(read_only=True)

    def get_no_universities(self, governorate):
        return governorate.universities.count()
    class Meta:
        model = Governorate
        fields = ['id','name', 'no_females', 'no_males', 'no_universities']

class UniSerializer(serializers.ModelSerializer):
    class Meta:
        model = University
        fields = ['id','name', 'lat', 'lng']
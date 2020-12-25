
# class EventSerializer(serializers.ModelSerializer):

#     class Meta:
#         model = Student 
#         fields = ('pk', 'name', 'email', 'document', 'phone', 'registrationDate')




from rest_framework import serializers
from .models import Event

class EventSerializer(serializers.ModelSerializer):

    class Meta:
        model = Event 
        fields = ('id','eventname','desc','startdate','enddate','location','imgs','status')

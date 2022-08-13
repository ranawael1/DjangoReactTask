from django.db import models
   
class Governorate(models.Model):
    name = models.CharField(max_length=100)
    no_females = models.IntegerField()
    no_males = models.IntegerField()

    def __str__(self):
        return self.name

class University(models.Model):
    name = models.CharField(max_length=100)
    governorate = models.ForeignKey(Governorate, on_delete=models.CASCADE, related_name='universities')
    lat = models.FloatField()
    lng = models.FloatField()
    
    def __str__(self):
        return self.name

# from django.db import models

# class Student(models.Model):
#     name = models.CharField("Name", max_length=240)
#     email = models.EmailField()
#     document = models.CharField("Document", max_length=20)
#     phone = models.CharField(max_length=20)
#     registrationDate = models.DateField("Registration Date", auto_now_add=True)

#     def __str__(self):
#         return self.name



from django.db import models

class Event(models.Model):
    eventname = models.CharField(max_length=100)
    desc = models.CharField(max_length=100)
    startdate = models.CharField(max_length=100)
    enddate = models.CharField(max_length=100)
    location = models.CharField(max_length=100)
    imgs = models.CharField(max_length=1000)
    status = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.eventname
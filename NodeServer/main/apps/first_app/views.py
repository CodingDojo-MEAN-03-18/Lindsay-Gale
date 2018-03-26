from django.shortcuts import render, HttpResponse, redirect

def index(request):
    response = "Hello!  Here I am... your first request!"
    return HttpResponse(response)

# Create your views here.

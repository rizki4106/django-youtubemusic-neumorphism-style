from django.urls import path
from .views import ResultView

urlpatterns = [
    path('', ResultView.as_view())
]
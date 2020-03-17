from django.shortcuts import render
from django.views import View

class IndexView(View):

    context = {}

    def get(self, request):
        self.context['title'] = "Download Music Tanpa Iklan dan Tanpa Ribet"
        return render(request, 'index.html', self.context)
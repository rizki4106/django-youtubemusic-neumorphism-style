from django.shortcuts import render
from django.views import View
import requests
# Create your views here.

class ResultView(View):

    context = {}

    def post(self, request):
        url = request.POST['url']
        addr = "https://ytube-mp3.herokuapp.com/?url=" + url
        req = requests.get(addr)
        if req.status_code == 200:
            self.context['data'] = req.json()['data'][0]
            self.context['title'] = req.json()['data'][0]['judul']
        return render(request, 'result/index.html', self.context)

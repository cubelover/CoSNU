from django.conf.urls import url
from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from cosnu import views

urlpatterns = [
#    url(r'^users/$', views.UserList.as_view())
    url(r'^user/$', views.Profile.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)

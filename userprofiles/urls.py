from django.conf.urls import url
from rest_framework.urlpatterns import format_suffix_patterns
from userprofiles import views


urlpatterns = [
    url(r'^userprofiles/$', views.userprofile_list),
    url(r'^userprofiles/(?P<pk>[0-9]+)/$', views.userprofile_detail),
]

urlpatterns = format_suffix_patterns(urlpatterns)

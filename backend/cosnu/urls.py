from django.conf.urls import url, include
from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from cosnu import views
from rest_framework.routers import SimpleRouter

router = SimpleRouter()
router.register(r'article', views.ArticleViewSet, base_name='article')

urlpatterns = [
#    url(r'^users/$', views.UserList.as_view())
    url(r'^user/$', views.UserView.as_view()),
    url(r'^user/set_password/$', views.change_password),
    url(r'^register/$', views.RegisterView.as_view()),
    url(r'^author/(?P<pk>[0-9]+)/$', views.AuthorView.as_view()),
    url(r'^author/$', views.AuthorListView.as_view()),
    url(r'^email-auth/$', views.EmailAuthView.as_view()),
    url(r'^lectures/$', views.LectureListView.as_view()),
    url(r'^lecture/(?P<pk>[0-9]+)/$', views.LectureView.as_view()),
    url(r'^lecture/(?P<lid>[0-9]+)/', include(router.urls))
#    url(r'^lecture/(?P<lid>[0-9]+)/article/(?P<aid>[0-9]+)', include(router.urls))
]

urlpatterns = format_suffix_patterns(urlpatterns)

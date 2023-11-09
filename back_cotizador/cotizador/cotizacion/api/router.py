from rest_framework.routers import DefaultRouter
from cotizacion.api.views import ProductAppApiViewSet, ClientAppApiViewSet, CotizationAppApiViewSet

router_cotizacion_apps = DefaultRouter()
router_cotizacion_apps.register(prefix='product', basename='product', viewset=ProductAppApiViewSet)
router_cotizacion_apps.register(prefix='client', basename='client', viewset=ClientAppApiViewSet)
router_cotizacion_apps.register(prefix='cotization', basename='cotization', viewset=CotizationAppApiViewSet)
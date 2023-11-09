from rest_framework.viewsets import ModelViewSet
from cotizacion.models import Product, Client, Cotization
from cotizacion.api.serializers import ProductSerializer, ClientSerializer, CotizationSerializer

class ProductAppApiViewSet(ModelViewSet):
    serializer_class = ProductSerializer
    queryset = Product.objects.all()

class ClientAppApiViewSet(ModelViewSet):
    serializer_class = ClientSerializer
    queryset = Client.objects.all()

class CotizationAppApiViewSet(ModelViewSet):
    serializer_class = CotizationSerializer
    queryset = Cotization.objects.all()
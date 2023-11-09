from rest_framework.serializers import ModelSerializer, ReadOnlyField
from cotizacion.models import Product, Client, Cotization

class ProductSerializer(ModelSerializer):
    class Meta:
        model = Product
        fields = ['product_name', 'product_price', 'product_active', 'product_image']

class ClientSerializer(ModelSerializer):
    class Meta:
        model = Client
        fields = ['client_name', 'client_email', 'client_phone']

class CotizationSerializer(ModelSerializer):
    client_name = ReadOnlyField(source='cotization_client.client_name')
    class Meta:
        model = Cotization
        fields = ['client_name', 'cotization_products', 'cotization_created_at']
from django.contrib import admin
from cotizacion.models import Client, Product, Cotization

# Register your models here.

@admin.register(Client)
class ClientAdmin(admin.ModelAdmin):
    list_display = ('client_name', 'client_email', 'client_phone')

@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ('product_name', 'product_price', 'product_active', 'product_modified_by', 'product_modified_at')

@admin.register(Cotization)
class CotizationAdmin(admin.ModelAdmin):
    list_display = ('cotization_client', 'cotization_modified_at')

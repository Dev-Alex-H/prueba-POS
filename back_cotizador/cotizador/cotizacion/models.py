from django.db import models

# Create your models here.

class Product(models.Model):
    product_id = models.AutoField(primary_key=True)
    product_code = models.CharField(max_length=20, blank=True)
    product_name = models.CharField(max_length=100, unique=True)
    product_price = models.DecimalField(max_digits=12, decimal_places=2)
    product_image = models.ImageField()
    product_active = models.BooleanField(default=False)
    product_delete = models.BooleanField(default=False)
    product_created_at = models.DateTimeField(auto_now_add=True)
    product_modified_by = models.IntegerField(null=True, blank=True)
    product_modified_at = models.DateTimeField(null=True, blank=True)

    def __str__(self):
        return self.product_name

class Client(models.Model):
    client_name = models.CharField(max_length=100)
    client_email = models.EmailField()
    client_phone = models.CharField(max_length=15)
    client_created_at = models.DateTimeField(auto_now_add=True)
    client_modified_by = models.IntegerField(null=True, blank=True)
    client_modified_at = models.DateTimeField(null=True, blank=True)

    def __str__(self):
        return self.client_name

class Cotization(models.Model):
    cotization_created_at = models.DateTimeField(auto_now_add=True)
    cotization_client = models.ForeignKey(Client, on_delete=models.CASCADE)
    cotization_products = models.ManyToManyField(Product)
    cotization_modified_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f'Cotización {self.id} - {self.cotization_client.client_name}'

# Generated by Django 4.2.7 on 2023-11-09 15:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cotizacion', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Client',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('email', models.EmailField(max_length=254)),
                ('phone', models.CharField(max_length=15)),
                ('client_created_by', models.IntegerField()),
                ('client_created_at', models.DateTimeField(auto_now_add=True)),
                ('client_modified_by', models.IntegerField(blank=True, null=True)),
                ('client_modified_at', models.DateTimeField(blank=True, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Product',
            fields=[
                ('product_id', models.AutoField(primary_key=True, serialize=False)),
                ('product_code', models.CharField(blank=True, max_length=20)),
                ('product_name', models.CharField(max_length=100, unique=True)),
                ('product_price', models.DecimalField(decimal_places=2, max_digits=12)),
                ('product_image', models.TextField(blank=True)),
                ('product_active', models.BooleanField()),
                ('product_delete', models.BooleanField(default=False)),
                ('product_created_by', models.IntegerField()),
                ('product_created_at', models.DateTimeField(auto_now_add=True)),
                ('product_modified_by', models.IntegerField(blank=True, null=True)),
                ('product_modified_at', models.DateTimeField(blank=True, null=True)),
            ],
        ),
        migrations.DeleteModel(
            name='Cotizacion',
        ),
    ]

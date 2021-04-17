# Generated by Django 3.2 on 2021-04-17 16:33

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('companies', '0002_company_favorites'),
    ]

    operations = [
        migrations.AlterField(
            model_name='company',
            name='favorites',
            field=models.ManyToManyField(null=True, to=settings.AUTH_USER_MODEL),
        ),
    ]

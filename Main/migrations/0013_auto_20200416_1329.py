# Generated by Django 3.0.4 on 2020-04-16 13:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Main', '0012_auto_20200416_1059'),
    ]

    operations = [
        migrations.AlterField(
            model_name='addproduct',
            name='image',
            field=models.ImageField(default=None, upload_to=''),
        ),
        migrations.AlterField(
            model_name='broodje_vdw',
            name='image',
            field=models.ImageField(default=None, upload_to=''),
        ),
    ]

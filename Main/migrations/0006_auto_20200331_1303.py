# Generated by Django 3.0.4 on 2020-03-31 13:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Main', '0005_addproduct_category'),
    ]

    operations = [
        migrations.AlterField(
            model_name='addproduct',
            name='category',
            field=models.CharField(choices=[('1', 'Broodje van de week'), ('2', 'Broodjes'), ('3', 'Drinken'), ('4', "Extra's")], default='2', max_length=50),
        ),
    ]

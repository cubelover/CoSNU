# Generated by Django 2.0.5 on 2018-06-09 11:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cosnu', '0005_auto_20180607_0834'),
    ]

    operations = [
        migrations.AddField(
            model_name='lecture',
            name='credit',
            field=models.IntegerField(default=3),
            preserve_default=False,
        ),
    ]

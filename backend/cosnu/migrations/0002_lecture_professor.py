# Generated by Django 2.0.5 on 2018-05-11 17:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cosnu', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='lecture',
            name='professor',
            field=models.CharField(default='aa', max_length=20),
            preserve_default=False,
        ),
    ]

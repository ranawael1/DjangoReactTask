# Generated by Django 4.1 on 2022-08-13 17:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='university',
            name='lat',
            field=models.FloatField(default=1),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='university',
            name='lng',
            field=models.FloatField(default=1),
            preserve_default=False,
        ),
    ]
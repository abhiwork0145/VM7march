# Generated by Django 3.2.9 on 2021-11-12 16:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='usertable',
            name='password',
            field=models.TextField(blank=True, null=True),
        ),
    ]
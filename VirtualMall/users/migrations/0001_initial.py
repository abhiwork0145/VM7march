# Generated by Django 3.2.9 on 2021-11-10 09:58

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='UserTable',
            fields=[
                ('userid', models.AutoField(primary_key=True, serialize=False)),
                ('username', models.CharField(blank=True, max_length=30, null=True)),
                ('email', models.EmailField(blank=True, max_length=50, null=True)),
                ('password', models.CharField(blank=True, max_length=20, null=True)),
            ],
        ),
    ]
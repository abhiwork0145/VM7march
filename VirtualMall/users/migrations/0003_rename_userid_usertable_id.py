# Generated by Django 3.2.4 on 2021-11-14 11:16

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0002_alter_usertable_password'),
    ]

    operations = [
        migrations.RenameField(
            model_name='usertable',
            old_name='userid',
            new_name='id',
        ),
    ]

# -*- coding: utf-8 -*-
# Generated by Django 1.11.4 on 2021-02-06 02:27
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('web_img_enhancement', '0006_auto_20210202_1830'),
    ]

    operations = [
        migrations.CreateModel(
            name='Handletypes',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=20)),
            ],
        ),
    ]

# -*- coding: utf-8 -*-
# Generated by Django 1.11.4 on 2021-02-09 07:10
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('web_img_enhancement', '0014_auto_20210207_1818'),
    ]

    operations = [
        migrations.AddField(
            model_name='pic',
            name='userAccount',
            field=models.CharField(default=1, max_length=30),
            preserve_default=False,
        ),
    ]

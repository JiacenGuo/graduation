# -*- coding: utf-8 -*-
# Generated by Django 1.11.4 on 2021-02-07 10:18
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('web_img_enhancement', '0013_pic_yuan_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='pic',
            name='id',
            field=models.AutoField(primary_key=True, serialize=False),
        ),
    ]
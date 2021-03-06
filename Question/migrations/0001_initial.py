# Generated by Django 3.1.4 on 2020-12-03 03:08

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Question',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('problem', models.CharField(max_length=320)),
                ('selA', models.CharField(max_length=40)),
                ('selB', models.CharField(max_length=40)),
                ('selC', models.CharField(max_length=40)),
                ('selD', models.CharField(max_length=40)),
                ('depA', models.BooleanField()),
                ('depB', models.BooleanField()),
                ('depC', models.BooleanField()),
                ('depD', models.BooleanField()),
                ('answer', models.IntegerField()),
            ],
        ),
    ]

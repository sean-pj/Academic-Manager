from django.contrib import admin
from submissions.models import Submissions

class SubmissionsAdmin(admin.ModelAdmin):
    list_display = ('__str__', 'pdf_link', 'pdf_file_url')

    def pdf_link(self, obj):
        if obj.pdf_file:
            return f'<a href="{obj.pdf_file.url}" target="_blank">View PDF</a>'
        return "No PDF"
    pdf_link.allow_tags = True

    def pdf_file_url(self, obj):
        return obj.pdf_file.url if obj.pdf_file else 'No file uploaded'


# Register your models here.
admin.site.register(Submissions, SubmissionsAdmin)
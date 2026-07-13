from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import ContactMessage
from .serializers import ContactMessageSerializer


SOLUTIONS_DATA = [
    {
        "id": 1,
        "title": "Access Control Systems",
        "icon": "🔐",
        "description": "Supply, installation, configuration, and maintenance of advanced access control solutions for businesses, offices, educational institutions, and industrial facilities.",
        "tags": ["Installation", "Configuration", "Maintenance", "Biometric", "Card Access"],
    },
    {
        "id": 2,
        "title": "CCTV Surveillance Solutions",
        "icon": "📹",
        "description": "Complete surveillance system deployment including camera installation, monitoring setup, remote access configuration, and maintenance.",
        "tags": ["Camera Installation", "Remote Access", "Monitoring", "HD/4K", "NVR/DVR"],
    },
    {
        "id": 3,
        "title": "Intrusion & Alarm Systems",
        "icon": "🚨",
        "description": "Professional installation and configuration of smart alarm and intrusion detection systems to safeguard your premises.",
        "tags": ["Alarm Systems", "Motion Sensors", "Smart Detection", "Real-time Alerts"],
    },
    {
        "id": 4,
        "title": "Time Attendance & Workforce Management",
        "icon": "🏢",
        "description": "Advanced attendance tracking solutions for organizations of all sizes with seamless software integration.",
        "tags": ["Attendance Tracking", "Payroll Integration", "Biometric", "HR Software"],
    },
    {
        "id": 5,
        "title": "Network Infrastructure & Troubleshooting",
        "icon": "🌐",
        "description": "Design, installation, optimization, and troubleshooting of wired and wireless networks to ensure uninterrupted connectivity.",
        "tags": ["Wired Networks", "Wi-Fi Solutions", "Optimization", "Troubleshooting"],
    },
]


class ContactAPIView(APIView):
    """
    POST /api/contact/ — Submit a contact form message.
    """
    def post(self, request):
        serializer = ContactMessageSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(
                {"success": True, "message": "Thank you! We'll be in touch soon."},
                status=status.HTTP_201_CREATED,
            )
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class SolutionsAPIView(APIView):
    """
    GET /api/solutions/ — Return list of Yotechno solutions.
    """
    def get(self, request):
        return Response(SOLUTIONS_DATA, status=status.HTTP_200_OK)

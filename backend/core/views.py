from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import ContactMessage
from .serializers import ContactMessageSerializer


SOLUTIONS_DATA = [
    {
        "id": 1,
        "title": "Web Development",
        "icon": "🌐",
        "description": "Scalable, modern web apps built with the latest technologies — React, Django, Node.js and more.",
        "tags": ["React", "Django", "REST API"],
    },
    {
        "id": 2,
        "title": "Mobile Applications",
        "icon": "📱",
        "description": "Cross-platform mobile apps for iOS and Android using React Native and Flutter.",
        "tags": ["React Native", "Flutter", "iOS", "Android"],
    },
    {
        "id": 3,
        "title": "Cloud Solutions",
        "icon": "☁️",
        "description": "Reliable cloud infrastructure on AWS, Azure, and GCP — from deployment to auto-scaling.",
        "tags": ["AWS", "Azure", "GCP", "Docker"],
    },
    {
        "id": 4,
        "title": "AI & Machine Learning",
        "icon": "🤖",
        "description": "Intelligent solutions — chatbots, recommendation engines, predictive analytics, and custom ML models.",
        "tags": ["Python", "TensorFlow", "OpenAI", "NLP"],
    },
    {
        "id": 5,
        "title": "UI/UX Design",
        "icon": "🎨",
        "description": "Beautiful, user-centred designs with Figma — from wireframes to polished prototypes.",
        "tags": ["Figma", "Prototyping", "User Research"],
    },
    {
        "id": 6,
        "title": "Cybersecurity",
        "icon": "🔒",
        "description": "Security audits, penetration testing, and compliance consulting to protect your digital assets.",
        "tags": ["Pentest", "Compliance", "ISO 27001"],
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

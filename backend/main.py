from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from openai import OpenAI
from dotenv import load_dotenv
import os

# Load API key from .env
load_dotenv()
api_key = os.getenv("NOVITA_API_KEY")

# Setup client
client = OpenAI(
    base_url="https://api.novita.ai/v3/openai",
    api_key=api_key
)

model = "meta-llama/llama-3.1-8b-instruct"
max_tokens = 512

# Setup FastAPI
app = FastAPI()

# Allow requests from your UI (Lovable or local browser)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Replace with your UI URL if hosted
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Define the request body
class ChatRequest(BaseModel):
    user_input: str

# Define the chat endpoint
@app.post("/chat")
def chat(request: ChatRequest):
    user_input = request.user_input

    try:
        response = client.chat.completions.create(
            model=model,
            messages=[
                {
                    "role": "system",
                    "content": "You are a warm, friendly, supportive therapist. Talk like a caring friend. Give emotional support and helpful advice.",
                },
                {
                    "role": "user",
                    "content": user_input,
                }
            ],
            max_tokens=max_tokens
        )
        reply = response.choices[0].message.content
        return {"reply": reply}

    except Exception as e:
        return {"reply": f"⚠️ Error: {str(e)}"}

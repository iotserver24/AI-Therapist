from openai import OpenAI
from dotenv import load_dotenv
import os

load_dotenv()
api_key = os.getenv("NOVITA_API_KEY")

# Setup Novita AI client
client = OpenAI(
    base_url="https://api.novita.ai/v3/openai",
    api_key=api_key
)

model = "meta-llama/llama-3.1-8b-instruct"
max_tokens = 512
stream = False

# Function to get a response from the AI therapist
def ask_therapist_novita(user_input):
    chat_completion_res = client.chat.completions.create(
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
        stream=stream,
        max_tokens=max_tokens,
    )

    if stream:
        full_reply = ""
        for chunk in chat_completion_res:
            content = chunk.choices[0].delta.content or ""
            print(content, end="")
            full_reply += content
        return full_reply
    else:
        return chat_completion_res.choices[0].message.content

# Chat loop
print("👋 Hello, I'm your AI Therapist. Talk to me. Type 'bye' to exit.\n")

while True:
    user_input = input("You: ")
    if user_input.lower() in ["bye", "exit", "quit"]:
        print("Therapist: Take care, friend. I’m always here when you need me 💛")
        break

    try:
        reply = ask_therapist_novita(user_input)
        print("Therapist:", reply)
    except Exception as e:
        print("⚠️ Something went wrong:", e)

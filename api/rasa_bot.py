from rasa.core.agent import Agent
from rasa.utils.endpoints import EndpointConfig
from fastapi import FastAPI
from pydantic import BaseModel
import uvicorn

app = FastAPI()

agent = Agent.load("models/20240629-105126-free-auslese.tar.gz")

class Message(BaseModel):
    text: str

@app.post("/webhook")
async def webhook(message: Message):
    responses = await agent.handle_text(message.text)
    return responses

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)

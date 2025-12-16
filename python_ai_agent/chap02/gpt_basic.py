from openai import OpenAI

api_key = ''

client = OpenAI(api_key=api_key)

response = client.chat.completions.create(
    model="gpt-4o",
    temperature=0.1,
    messages=[
        {"role": "system", "content": "You are a helpful assistant."},
        {"role": "user", "content": "25년도 대한민국 대통령은?"}
    ]
)

print(response)

print("-------")
print(response.choices[0].message.content)

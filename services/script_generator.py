import random


def generate_script(char1: str, char2: str, topic: str):
    templates = [
        f"{char1}: Let’s discuss {topic}. {char2}, what do you think?",
        f"{char2}: Hmm, {topic} is fascinating. Here’s an example...",
    ]
    return [{"speaker": char1, "dialogue": random.choice(templates)}]

from langchain_groq import ChatGroq
from langchain.prompts import PromptTemplate
from dotenv import load_dotenv


load_dotenv()
llm = ChatGroq(model="llama-3.3-70b-versatile")


def generate_script(character_1: str, character_2: str, topic: str):
    template = PromptTemplate.from_template(
        """
        Write an engaging educational dialogue about "{topic}" between {character_1} and {character_2}.
        They should talk as if teaching the topic to a third person who is completely new to that topic.
        Don't include the third person in the dialogue. Include emotion from these 4: listening, thinking, teaching, scolding.

        Return it in a python list[tuple] format like this:
        [("speaker1", "emotion", "msg"), ("speaker2", "emotion", "msg"),...]

        Only return a python list no extra text or formatting.
        Keep it interactive, fun, and informative but short.
    """
    )

    prompt = template.format(
        character_1=character_1, character_2=character_2, topic=topic
    )
    response = llm.invoke(prompt)

    return eval(response.content)


if __name__ == "__main__":
    res = generate_script("Sherlock Holmes", "Batman", "Newton's Laws of Motion")
    print(type(res), res[0], res)

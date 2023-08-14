# CA Chat bot

1. run `python3 -m venv repobot`

2. open terminal and run `source repobot/bin/activate`

3. `pip install -r requirements.txt` to install packages.

4. `python3 loadrepo.py` to get all PDF Documents from URLs. Add URLs in this file and delete rbi-docs folder to prevent duplicate

5. `python3 ingest_data.py` to ingest PDF data as chunks in DB.

6. `python3 bot.py` to start the conversation based on local ChromaDB with gradio UI.
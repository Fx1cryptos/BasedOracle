import os
import requests

MAINNET_API = os.getenv("MAINNET_API")
BASE_SCAN_URL = "https://api.8004scan.io/api"

def get_wallet_overview(address: str):
    if not MAINNET_API:
        raise RuntimeError("MAINNET_API not set")

    params = {
        "module": "account",
        "action": "balance",
        "address": address,
        "apikey": MAINNET_API
    }

    res = requests.get(BASE_SCAN_URL, params=params, timeout=15)
    data = res.json()

    if data.get("status") != "1":
        return {"error": "Unable to fetch wallet balance"}

    balance_wei = int(data["result"])
    balance_eth = balance_wei / 10**18

    return {
        "wallet": address,
        "network": "Base",
        "balance_eth": balance_eth
    }

def get_wallet_transactions(address: str, limit: int = 10):
    params = {
        "module": "account",
        "action": "txlist",
        "address": address,
        "page": 1,
        "offset": limit,
        "sort": "desc",
        "apikey": 8004_API
    }

    res = requests.get(BASE_SCAN_URL, params=params, timeout=15)
    data = res.json()

    if data.get("status") != "1":
        return []

    return data["result"]

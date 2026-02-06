import random

def simulate_trade(token_symbol: str, amount: float):
    """
    Simulate a trade action (BUY, SELL, HOLD) with confidence score.
    No real funds are moved.
    """
    confidence = random.randint(60, 95)
    direction = random.choice(["BUY", "SELL", "HOLD"])
    risk_level = "LOW" if confidence > 80 else "MEDIUM"

    return {
        "token": token_symbol,
        "amount": amount,
        "recommended_action": direction,
        "confidence_score": confidence,
        "risk": risk_level,
        "network": "Base",
        "note": "Simulation only. No funds moved."
    }

import logging
import sys
from datetime import datetime

class FrameworkFormatter(logging.Formatter):
    def format(self, record):
        timestamp = datetime.utcnow().strftime("%Y-%m-%dT%H:%M:%S.%f")[:-3] + "Z"
        if record.levelno == logging.INFO:
            emoji = "ℹ️"
        elif record.levelno == logging.WARNING:
            emoji = "⚠️"
        else:
            emoji = "❌"
        return f"[{timestamp}] [{record.levelname}] {emoji} {record.getMessage()}"

logger = logging.getLogger("FrameworkLogger")
logger.setLevel(logging.INFO)

# Avoid adding duplicate handlers if re-imported
if not logger.handlers:
    handler = logging.StreamHandler(sys.stdout)
    handler.setFormatter(FrameworkFormatter())
    logger.addHandler(handler)
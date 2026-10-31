#!/usr/bin/env python3
"""Launch IDForge and open it in the default browser.

Usage:
    python open.py
    python open.py --port 3100
    python open.py --prod
    python open.py --no-browser
"""

from __future__ import annotations

import argparse
import os
import shutil
import socket
import subprocess
import sys
import time
import webbrowser
from pathlib import Path

ROOT = Path(__file__).resolve().parent
DEFAULT_PORT = 3000
NEXT_BIN = ROOT / "node_modules" / "next" / "dist" / "bin" / "next"


def log(message: str) -> None:
    print(f"[IDForge] {message}", flush=True)


def find_node() -> str | None:
    return shutil.which("node")


def find_npm() -> str | None:
    candidates = ["npm.cmd", "npm"] if os.name == "nt" else ["npm"]
    for candidate in candidates:
        if shutil.which(candidate):
            return candidate
    return None


def port_is_open(port: int) -> bool:
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as sock:
        sock.settimeout(0.5)
        return sock.connect_ex(("127.0.0.1", port)) == 0


def wait_for_port(port: int, process: subprocess.Popen, timeout: float = 90.0) -> bool:
    deadline = time.time() + timeout
    while time.time() < deadline:
        if process.poll() is not None:
            return False
        if port_is_open(port):
            return True
        time.sleep(0.4)
    return False


def run_npm(npm: str, args: list[str]) -> None:
    subprocess.run([npm, *args], cwd=ROOT, check=True)


def start_server(port: int, prod: bool) -> subprocess.Popen:
    node = find_node()
    if not node:
        raise RuntimeError("No se encontró Node.js en el PATH.")
    if not NEXT_BIN.exists():
        raise RuntimeError(
            "No se encontró Next.js. Ejecuta 'npm install' antes de arrancar IDForge."
        )

    mode = "start" if prod else "dev"
    command = [node, str(NEXT_BIN), mode, "--port", str(port)]
    log(f"Arrancando IDForge en http://localhost:{port} ...")
    return subprocess.Popen(command, cwd=ROOT)


def stop_server(process: subprocess.Popen) -> None:
    if process.poll() is not None:
        return
    log("Deteniendo IDForge...")
    process.terminate()
    try:
        process.wait(timeout=5)
    except subprocess.TimeoutExpired:
        process.kill()
        process.wait(timeout=5)


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="Arranca IDForge y abre la web en el navegador."
    )
    parser.add_argument(
        "-p",
        "--port",
        type=int,
        default=int(os.environ.get("PORT", DEFAULT_PORT)),
        help=f"Puerto para el servidor (por defecto: {DEFAULT_PORT}).",
    )
    parser.add_argument(
        "--prod",
        action="store_true",
        help="Compila y arranca en modo producción.",
    )
    parser.add_argument(
        "--no-browser",
        action="store_true",
        help="No abre el navegador automáticamente.",
    )
    return parser.parse_args()


def main() -> int:
    args = parse_args()
    node = find_node()
    npm = find_npm()

    if not node or not npm:
        log("Error: necesitas Node.js 20+ y npm instalados y en el PATH.")
        return 1

    if not (ROOT / "node_modules").exists():
        log("Instalando dependencias (npm install)...")
        try:
            run_npm(npm, ["install"])
        except subprocess.CalledProcessError:
            log("Error: falló 'npm install'.")
            return 1

    if args.prod:
        log("Compilando la app (npm run build)...")
        try:
            run_npm(npm, ["run", "build"])
        except subprocess.CalledProcessError:
            log("Error: falló la compilación.")
            return 1

    url = f"http://localhost:{args.port}"

    if port_is_open(args.port):
        log(f"El puerto {args.port} ya está en uso. Abriendo {url} ...")
        if not args.no_browser:
            webbrowser.open(url)
        return 0

    process = start_server(args.port, args.prod)

    try:
        if not wait_for_port(args.port, process):
            log("Error: el servidor no respondió a tiempo.")
            return 1

        log(f"Listo: {url}")
        if not args.no_browser:
            webbrowser.open(url)
        log("Pulsa Ctrl+C para detener el servidor.")
        process.wait()
    except KeyboardInterrupt:
        log("Interrumpido por el usuario.")
    finally:
        stop_server(process)

    return 0


if __name__ == "__main__":
    raise SystemExit(main())

from rich.console import Console
from rich.table import Table

console = Console()

def get_console():
  return console

def get_table(**kwargs):
  return Table(kwargs)
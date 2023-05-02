from flask import Flask, request, render_template # Importa a biblioteca

app = Flask(__name__) # Inicializa a aplicação

@app.route('/') # Cria uma rota
def main():
  return "Hello Server"

if __name__ == '__main__':
  app.run() # Executa a aplicação
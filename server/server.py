from flask import Flask, jsonify, request, make_response # Importa a biblioteca

app = Flask(__name__) # Inicializa a aplicação
#app.config['CORS_HEADERS'] = 'Content-Type'

@app.route('/', methods=["GET", "OPTIONS"]) # Cria uma rota
def main():
  if request.method == "OPTIONS":
    response = make_response()
    response.headers.add("Access-Control-Allow-Origin", "*")
    response.headers.add("Access-Control-Allow-Headers", "*")
    response.headers.add("Access-Control-Allow-Methods", "*")
    return response
  res = jsonify({"message": "Hello Server"})
  res.headers.add("Access-Control-Allow-Origin", "*")
  return res

if __name__ == '__main__':
  app.run() # Executa a aplicação
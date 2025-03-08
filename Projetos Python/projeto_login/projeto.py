from flask import Flask, render_template, url_for, redirect, request, session, flash
from os import urandom
from werkzeug.security import generate_password_hash, check_password_hash

app = Flask(__name__)
app.config['SECRET_KEY'] = urandom(24).hex()


# exemplo@gmail.com
# http://127.0.0.1:5000/login
# http://127.0.0.1:5000/mostrar_lista
# http://127.0.0.1:5000/criar


class Usuario:
    def __init__(self, nome, email, senha):
        self.nome = nome
        self.email = email
        self.senha = senha

banco_de_dados = list()

# Mostra a pagina de login -> login.html
@app.route('/login')
def login():
    return render_template('login.html') # Arquivo HTML 1

#faz logout
@app.route('/logout')
def logout():
    session.pop('usuario_logado', None)
    return redirect(url_for('login'))

# tenta fazer login
@app.route('/autenticar', methods=['POST'])
def autenticar():
    email_inserido = request.form['email']
    senha_inserida = request.form['senha']

    for user in banco_de_dados:

        if email_inserido == user.email and check_password_hash(user.senha, senha_inserida):
            session['usuario_logado'] = user.nome

            flash(f'Usuário {user.nome} logado com sucesso!')

            return redirect(url_for('mostrar_lista'))
    
    flash('Email ou senha incorretos!')
    return redirect(url_for('login'))

# mostra os usuarios -> lista.html
@app.route('/mostrar_lista')
def mostrar_lista():
    if 'usuario_logado' not in session or session['usuario_logado'] == None:
        return redirect(url_for('login'))

    return render_template('lista.html', users=banco_de_dados) # Arquivo HTML 2

# move para a pagina de criar usuario -> criar.html
@app.route('/criar')
def criar():
    return render_template('criar.html') # Arquivo HTML 3

# cria o usuario e o armazena no banco de dados
@app.route('/criar_conta', methods=['POST'])
def criar_conta():
    if request.method == 'POST':
        nome = request.form['nome']
        email = request.form['email']

        senha = request.form['senha']
        senha_hash = generate_password_hash(senha)

        user = Usuario(nome, email, senha_hash)
        banco_de_dados.append(user)
        
        session['usuario_logado'] = user.nome

        return redirect(url_for('mostrar_lista'))


app.run(debug=True)

def menu():
    print("""\n*******MENU*******
1 - Adicionar novo contato
2 - Editar contato
3 - Pesquisar contato
4 - Lista de contatos
5 - Apagar um contato
6 - Sair
    """)

def add_contato(nome, celular, email):
    contato = [nome, celular, email]
    agenda.append(contato.copy())
    contato.clear()

def edit_contato(n):
    for contato in agenda:
        if contato[0] == n:
            opc = int(input('o que voce quer mudar? [Nome - 1], [Contato - 2], [Email - 3]'))

            if opc == 1:
                contato[0] = input('Digite o nome novo: ')
                print('Nome alterado com sucesso!')
                return
            elif opc == 2:
                contato[1] = input('Digite o novo numero de celular: ')
                print('numero de celular alterado com sucesso!')
                return
            elif opc == 3:
                contato[2] = input('Digite o email novo: ')
                print('Email alterado com sucesso!')
                return      
    print('Contato nao cadastrado!')

def pesq_contato(n):
    for contato in agenda:
        if contato[0] == n:
            nome, celular, email = contato
            print(f'Nome.....: {nome}')
            print(f'Celular..: {celular}')
            print(f'Email....: {email}')
            return
    print('Contato nao cadastrado!')
                

def lista_contato():
    for contato in agenda: 
        for item in contato:
            if item == contato[0]:
                print('-'*28)
                print(f'Nome.....: {item}')
            elif item == contato[1]:
                print(f'Celular..: {item}')
            elif item == contato[2]:
                print(f'Email....: {item}')
    print('-'*28)
    print('\n--------FIM DA AGENDA')

def apag_contato(n):
    for contato in agenda:
        if contato[0] == n:
            nome, celular, email = contato
            print(f'Nome.....: {nome}')
            print(f'Celular..: {celular}')
            print(f'Email....: {email}')

            print('Confirmar a exclusao do contato?')
            confirm = input('[S]im ou [N]ao: ')

            if confirm in "Ss":
                agenda.remove(contato)
                print('Contato excluido!')
                return
            elif confirm in 'Nn':
                print('O contato nao foi excluido!')
                return
            else:
                print('Houve uma falha ao excluir o contato.')
                return
print('Contato nao encontrado!')

agenda = list()
while True:
    menu()
    try:
        opc = int(input('Escolha uma opcao: '))
        if opc == 1:
            print('\n---------PREENCHA O NOVO CONTATO:')
            add_contato(input('Nome.....: '), input('Celular..: '), input('Email....: '))
        elif opc == 2:
            edit_contato(input('Quem voce quer editar? [nome]:'))
        elif opc == 3:
            pesq_contato(input('Digite o nome......: '))
        elif opc == 4:
            print('\n---------CONTATOS DA AGENDA:')
            lista_contato()
        elif opc == 5:
            print('\n---------EXCLUINDO (PESQUISE O CONTATO):')
            apag_contato(input('Digite o nome......: '))
        elif opc == 6:
            print('OBRIGADO POR UTILIZAR A NOSSA AGENDA :)')
            break
        else:
            print('-'*6)
            print('Opcao invalida. Tente novamente!\n')
            print('-'*6)
    except:
        print('-'*6)
        print('Ocorreu um error. Tente novamente!')
        print('-'*6)
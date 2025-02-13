package agenda;

import java.util.ArrayList;
import java.util.Scanner;

public class Main {
    public static void main(String[] args){
        Scanner scanner = new Scanner(System.in);
        Agenda agenda = new Agenda();

        while(true){
            if (agenda.contatos.toArray().length == 0){
                System.out.println("-----------------");
                System.out.println("AGENDA VAZIA, ADICIONE UM CONTATO!");
                agenda.add_contato();
            }

            System.out.println("---- AGENDA DE CONTATOS ----");
            System.out.println("----------------------------");
            System.out.println("""
                    1 - Adicionar novo contato
                    2 - Editar contato
                    3 - Pesquisar contato
                    4 - Lista de contatos
                    5 - Apagar um contato
                    6 - Sair
                    """);
            System.out.println("----------------------------");

            System.out.print("Sua opcao: ");
            int opc = scanner.nextInt();
            if (opc == 1){
                agenda.add_contato();
            } else if (opc == 2) {
                agenda.editar_contato();
            } else if (opc == 3){
                agenda.procurar_contato();
            } else if (opc == 4){
                System.out.println("----------------------------");
                agenda.mostrar_contatos();
            } else if (opc == 5){
                agenda.apagar_contatos();
            } else if (opc == 6){
                System.out.println("Obrigado por usar a agenda!");
                break;
            } else {
                System.out.println("Opcao Inválida!");
            }
        }
    }
}

class Contato {
    String nome;
    String numero;
    String email;

    public Contato(String nome, String numero, String email) {
        this.nome = nome;
        this.numero = numero;
        this.email = email;
    }
}

class Agenda {
    public ArrayList<Contato> contatos = new ArrayList<>();

    public void add_contato(){
        Scanner scanner = new Scanner(System.in);
        System.out.println("-----------------");
        System.out.println(" - NOVO CONTATO -");

        System.out.print("Nome.....: ");
        String nome = scanner.nextLine();

        System.out.print("Celular..: ");
        String numero = scanner.nextLine();

        System.out.print("Email....: ");
        String email = scanner.nextLine();

        Contato contato = new Contato(nome, numero, email);
        contatos.add(contato);

        System.out.println("Contato adicionado com sucesso!");
    }

    public void mostrar_contatos(){
        for (Contato cont : contatos){
            System.out.print("Nome.....: ");
            System.out.println(cont.nome);

            System.out.print("Celular..: ");
            System.out.println(cont.numero);

            System.out.print("Email....: ");
            System.out.println(cont.email);

            System.out.println("----------------------------");
        }
    }

    public void apagar_contatos(){
        Scanner scanner = new Scanner(System.in);
        System.out.print("Digite o nome do contato a ser removido: ");
        String nome = scanner.nextLine();

        boolean removido = contatos.removeIf(cont -> cont.nome.equals(nome));

        if (removido) {
            System.out.println("Contato removido.");
        } else {
            System.out.println("Contato não encontrado.");
        }
    }

    public void procurar_contato(){
        Scanner scanner = new Scanner(System.in);
        System.out.print("Nome do contato: ");
        String nome = scanner.nextLine();

        boolean flag = false;

        for (Contato cont : contatos){
            if (cont.nome.equals(nome)){
                flag = true;
                System.out.print("Nome.....: ");
                System.out.println(cont.nome);

                System.out.print("Celular..: ");
                System.out.println(cont.numero);

                System.out.print("Email....: ");
                System.out.println(cont.email);

                System.out.println("----------------------------");
            }
        }

        if (flag == false){
            System.out.println("Contato nao encontrado.");
        }
    }

    public void editar_contato(){
        Scanner scanner = new Scanner(System.in);
        System.out.print("Nome do contato: ");
        String nome = scanner.nextLine();

        boolean flag = false;

        for (Contato cont : contatos){
            if (cont.nome.equals(nome)){
                flag = true;

                System.out.print("o que voce quer mudar? [Nome - 1], [Contato - 2], [Email - 3]: ");
                int opc = scanner.nextInt();
                scanner.nextLine();

                if (opc == 1){
                    System.out.print("Novo nome: ");
                    String novoNome = scanner.nextLine();

                    cont.nome = novoNome;
                    System.out.println("Nome alterado com sucesso!");
                } else if (opc == 2){
                    System.out.print("Novo contato: ");
                    String novoContato = scanner.nextLine();

                    cont.numero = novoContato;
                    System.out.println("Contato alterado com sucesso!");
                } else if (opc == 3){
                    System.out.print("Novo email: ");
                    String novoEmail = scanner.nextLine();

                    cont.email = novoEmail;
                    System.out.println("Email alterado com sucesso!");
                } else {
                    System.out.println("Numero inválido.");
                }
            }
        }

        if(flag == false){
            System.out.println("Contato nao encontrado.");
        }
    }
}
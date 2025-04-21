# Desafio: Pedir ao usuário dois números inteiros e informar se o primeiro é maior, menor ou igual ao segundo.

print('Diga 2 números!')
num1 = int(input('Digite o primeiro número '))
num2 = int(input('Digite o segundo número '))

if (num1 > num2): # Se numero1 é maior que numero2 [...]
    print(f'O primeiro número ({num1}) é maior que o segundo ({num2})!')
elif (num1 < num2): # Se numero1 é menor que numero2 [...]
    print(f'O primeiro número ({num1}) é menor que o segundo ({num2})!')
else:  #Se ambos são iguais[...]
    print(f'Ambos os números são iguais! ({num1}) e ({num2})')
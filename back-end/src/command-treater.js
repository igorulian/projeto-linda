const pesquisar = ['pesquisar','pesquisa', 'pesquise', 'pesquisou','procure', 'procura', 'qual', 'quem', 'o que', 'quando', 'quanto']
const ligar = ['ligar','ligue','acender','acende', 'acenda', 'Cíntia']
const calcular = ['calcular', 'calcula', 'calcule']
const criar = ['criar', 'cria', 'crie', 'adicione', 'adicionar','adiciona','quero', 'queria']
const remover = ['remover', 'remove', 'remova', 'deletar', 'delete', 'deleta']
const tocar = ['tocar', 'toca', 'toque', 'coloca']
const iniciar = ['iniciar', 'inicie', 'inicia', 'começar', 'começa', 'começe']

const verbs = [pesquisar, ligar, calcular, criar, remover, tocar, iniciar]


const getVerb = (command) => { 
    for(let y = 0; y < verbs.length; y++){
        const verb = verbs[y]

        for(let x = 0; x < verb.length; x++){
            if(command.toLowerCase().includes(verb[x])){
                return {action: verb[0], verbSaid: verb[x]}
            }
        }
    }
    return {action: null, verbSaid: null}
}

const getTreatCommand = (command,verb) => {
    let tcommand = command
    tcommand = tcommand.toLowerCase()
    tcommand = tcommand.trim()
    return tcommand
}

const treatCommand = (command) => {
    const verb = getVerb(command)
    const treatCommand = getTreatCommand(command,verb)


    const treatedCommand = {
        action: verb.action,
        verbSaid: verb.verbSaid,
        treatCommand,
        fullCommand: command
    }

    return treatedCommand
}


export {treatCommand}
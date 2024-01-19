////////////////FUNÇÕES\\\\\\\\\\\\\
const cap_saldo = (isResgatou, nomeuser, id_usu, saldo) => {
return `
┏━━━━━━━━━━━
┃┌──────────
┃├💲 SALDO 💲
┃├──────────
┃├👤USER: ${nomeuser}
┃├🔑Chave: ${id_usu}
┃├💰Saldo: ${saldo}¥
┃└──────────
┗━━━━━━━━━━━
${!isResgatou ? `Resgate diário disponível` : " "}
`
}

const cap_resgatar = (nomeuser, id_usu, dinheiro_resgate, moneyme ) => {
return `
┏━━━━━━━━━━━
┃┌──────────
┃├💲 RESGATAR 💲
┃├──────────
┃├👤USER: ${nomeuser}
┃├🔑Chave: ${id_usu}
┃├💰Ganho: ${dinheiro_resgate}¥
┃├💲Antes do resgate: ${moneyme}¥
┃├💲Saldo Atual: ${moneyme + dinheiro_resgate}¥
┃└──────────
┗━━━━━━━━━━━
`
}

const cap_registrar = (id_usu) => {
return`
┏━━━━━━━━━━━
┃┌──────────
┃├📒REGISTRO Concluído
┃├──────────
┃├🔑Chave: ${id_usu}
┃└──────────
┗━━━━━━━━━━━
Essa é sua chave para transferências dentro do sistema de money.

Não se preocupe, quando você enviar uma mensagem, seu nome será adicionado à sua conta juntamente com o restante das suas informações
`;
}

const cap_transferir_env = (nomeuser, id_usu, dest, txt1, txt2) => {
return`
******************************
📤 Transferência Enviada 📤
******************************
🪪Remetente: ${nomeuser}
🆔Id: ${id_usu}

🪪 Destinatário: ${dest}
🆔 Id ${txt1}

💲Valor: ${txt2}¥
******************************
`
}

const cap_transferir_send = (nomeuser, id_usu, dest, txt1, txt2, money) => {
return `
📥 Transferência Recebida 📥
******************************
🪪Remetente: ${nomeuser}
🆔Id: ${id_usu}

🪪 Destinatário: ${dest}
🆔 Id ${txt1}

💲Valor: ${txt2}¥
******************************
`
}

const cap_recarregar_env = (nomeuser, txt1, txt3, P_nome, S_nome, id_usu) => {
return `
******************************
💲RECARGA MONEY💲
******************************
🪪Destinatário: ${nomeuser}
🆔Chave: ${txt1}
💲Valor: ${txt3}¥

🔰Dono: ${P_nome} ${S_nome}
🆔ID DONO: ${id_usu}
******************************
`
}

const cap_recarregar_send = (nomeuser, txt1, txt3, money, P_nome, S_nome, id_usu) => {
return `
✅RECARGA RECEBIDA✅
******************************
🪪Destinatário: ${nomeuser}
🆔Chave: ${txt1}
💲Valor: ${txt3}¥

💲Saldo anterior:${money}¥
💲Saldo atual:${money+txt3}¥

🔰Dono: ${P_nome} ${S_nome}
🆔ID DONO: ${id_usu}
******************************
`
}

const cap_multa_env = (nomeuser, txt1, txt3, P_nome, S_nome, id_usu) => {
return `
******************************
🚫REMOVER MONEY🚫
******************************
🪪Destinatário: ${nomeuser}
🆔Chave: ${txt1}
💲Valor: ${txt3}¥

🔰Dono: ${P_nome} ${S_nome}
🆔ID DONO: ${id_usu}
******************************
`
}

const cap_multa_send = (nomeuser, txt1, txt3, money, P_nome, S_nome, id_usu) => {
return `
⚠️MULTA RECEBIDA⚠️
******************************
🪪Destinatário: ${nomeuser}
🆔Chave: ${txt1}
💲Valor: ${txt3}¥

💲Saldo anterior:${money}¥
💲Saldo atual:${money-txt3}¥

🔰Dono: ${P_nome} ${S_nome}
🆔ID DONO: ${id_usu}
******************************
`

}

const cap_ver_loja = (nomepdr, valorpdr, quantidadepdr, nomedonopdr, senderlinkpdr, datamakerpdr, descpdr) => {
return `
═══════════════════════════
🛍️ VER NA LOJA
═══════════════════════════
📦 Nome: ${nomepdr}
💲 Custo: ${valorpdr} ¥
📦 Estoque: ${quantidadepdr}
💠 Criador: ${nomedonopdr}
💠 Chave: ${senderlinkpdr}
📅 Criado em: ${datamakerpdr}
═══════════════════════════

DESCRIÇÃO DO PRODUTO
ℹ️ ${descpdr}
═══════════════════════════
`
}

const cap_ver_inv = (nomepdr, valorpdr, quantidadepdr, datacompra, datamakerpdr, nomedonopdr, senderlinkpdr, descpdr) => {
return `
═══════════════════════════
📦 VER NO INVENTÁRIO
═══════════════════════════
📦 Nome: ${nomepdr}
💲 Custou: ${valorpdr} ¥
📦 Estoque: ${quantidadepdr}
📅 Comprado em: ${datacompra}
📅 Criado em: ${datamakerpdr}
💠 Criador: ${nomedonopdr}
💠 Chave: ${senderlinkpdr}
═══════════════════════════
DESCRIÇÃO DO PRODUTO 
ℹ️ ${descpdr}
═══════════════════════════
`
}

const cap_v_comprar = (nomepdr, custopdr2, moneyme2) => {
return `
═══════════════════════════
⚠️ CONFIRMAÇÃO NESCESSÁRIA
═══════════════════════════
Você realmente deseja comprar esse item ? 

🛍️Item: ${nomepdr}
💸Custo: ${custopdr2}¥

💲Saldo atual: ${moneyme2}¥
💸Apos a compra: ${moneyme2-custopdr2}¥
═══════════════════════════
`
}

const cap_v_usar = (nomepdr, quantidadepdrnumber) => {
return `
═══════════════════════════
⚠️ CONFIRMAÇÃO NESCESSÁRIA
═══════════════════════════
Você realmente deseja Executar esse item ? 

🛍️Item: ${nomepdr}
📦Estoque: ${quantidadepdrnumber}

📦Apos o uso: ${quantidadepdrnumber-1}
═══════════════════════════
`
}

const cap_comprar = (nomeuser, id_usu, time3, nomepdr, valorpdr) => {
return `
═══════════════════════════
Detalhes da compra:
═══════════════════════════
🪪 Cliente: ${nomeuser}
💠 Chave: ${id_usu}
📅 Data: ${time3}
═══════════════════════════
🛍️ Produto: ${nomepdr}
💰 Preço: ${valorpdr}¥
═══════════════════════════
`
}

const cap_usar = (nomeuser, id_usu, nomepdr, quantidadepdr) => {
return `
═══════════════════════════
✅Item executado
═══════════════════════════
🪪Usuario: ${nomeuser}
💠Chave: ${id_usu}
═══════════════════════════
ℹ️Item usado: ${nomepdr}
📦Estoque restante: ${quantidadepdr}
═══════════════════════════
`
}

const cap_f_usar = (functionpdrl) => {
return `
═══════════════════════════
${functionpdrl}
═══════════════════════════
`
}

const cap_template = (nomepdr, valorpdr, quantidadepdr, nomedonopdr, senderlinkpdr, datamakerpdr, descpdr) => {
return `
═══════════════════════════
🖊️ Criação de Produtos
═══════════════════════════
📦 Nome: ${nomepdr}
💲 Custo: ${valorpdr} ¥
📦 Estoque: ${quantidadepdr}
💠 Criador: ${nomedonopdr}
💠 Chave: ${senderlinkpdr}
📅 Criado em: ${datamakerpdr}
═══════════════════════════

DESCRIÇÃO DO PRODUTO
ℹ️ ${descpdr}
═══════════════════════════
`
}

const cap_template_p = (functionpdrl) => {
return `
═══════════════════════════
▶️ Execução do seu item
═══════════════════════════
${functionpdrl}
═══════════════════════════
`
}

const cap_salvarpdr = (nomepdr, valorpdr2, quantidadepdr2, custopdr) => {
return `
═══════════════════════════
🆕NOVO ITEM NA LOJA
═══════════════════════════
🖊️Nome:${nomepdr}
💲Valor:${valorpdr2}¥
📦Estoque:${quantidadepdr2}


💸Custo de criação:${custopdr}
═══════════════════════════

`
}

const cap_salvarpdr_save = (nomepdr, valorpdr2, quantidadepdr2, custopdr) => {
return `
═══════════════════════════
✅SALVO COM SUCESSO
═══════════════════════════
🖊️Nome:${nomepdr}
💲Valor:${valorpdr2}¥
📦Estoque:${quantidadepdr2}


💸Custo de criação:${custopdr}
═══════════════════════════
`
}
////////////////INFOS\\\\\\\\\\\\\\
//Info do banco e loja 
const infobankloja = (prefixo, usu, id, dinheiro_resgate) => {
return `
******************************
🏦BANCO E LOJA
******************************
ℹ️ Para usar qualquer comando do bankloja você deve se registrar no bot , ao tentar usar qualquer comando você receberá um botão para fazer registro

🏦 Para usar o menu do bankloja você pode acessar pelo comando ${prefixo}start e usar os botões, ou usar o ${prefixo}bankloja

🛍 ️Loja - Ai você pode encontrar os produtos que tanto usuários quanto o dono do bot criam, use os botões para visualizar o produto

⚠️ Aviso - Ao clicar no botão comprar, a compra será feita de maneira instantânea , então tome cuidado quando visualizar um produto

📦 Inventário - Os produtos que você comprar seram armazenados no inventário para que você possa utilizar mais tarde, esses produtos do inventário nunca atualizam , ou expiram

⚠️ Aviso - Ao clicar no botão usar, o produto sera executado de maneira instantânea, então tome cuidado ao visualizar um produto do inventário

ℹ️ A execução dos produtos envia uma mensagem no pv de quem comprou, essa mensagem é setada pelo fabricante, que pode colocar por exemplo um app na loja , e na função o link de download desse app

🪙 Carteira - isso é um dinheiro fictício ultilizado para compras e transferências no sistema do próprio bot

******************************
💸COMO GANHAR SALDO?
******************************
⚠️ Aviso - O saldo do bot é fictício e não pode ser convertido em R$ apesar de possuir uma loja própria, então nem tentem sacar

💲 Resgate diário - Se estiver disponível quando você abrir o menu do bankloja ou verificar seu saldo irá aparecer o botão de resgatar, essa opção dará ${dinheiro_resgate} ¥ uma vez ao dia , resetando a meia noite do horário de Brasília
******************************

`
}

//info de como criar um item para a loja
const lojamaker = (prefixo, usu, id) => {
return `
******************************
🆕 CRIAÇÃO DE PRODUTOS
******************************
ℹ️ Primeiro você deve ter um template de produto, após isso siga esse tutorial

⚠️ Essa configuração deve ser feita no pv do bot para evitar envio de links em grupos

🖊️ Nome - Para setar o nome do seu Produto use o ${prefixo}SetPdr name|Novo Nome

📄 Descrição - Para setar a descrição use ${prefixo}SetPdr info|Nova Descrição

💲 Preço _ Para setar o custo do seu produto use ${prefixo}SetPdr valor|100

📦 Estoque - Para setar o quanto terá disponível na loja use ${prefixo}SetPdr quantidade|10

🖼️ Foto - Para setar a imagem do seu produto use ${prefixo}SetPdr img|Link_Direto_Da_Imagem

📤 Função _ Para setar a mensagem que seu produto ira enviar no pv do usuário quando utilizar , use ${prefixo}SetPdr function|Sua Mensagem
******************************
🖼️CRIAR LINK DIRETO DA IMAGEM🖼️

🔗 Você pode usar qualquer um desses serviços que estarão nos botões
******************************

`
}

module.exports = {
infobankloja , 
lojamaker ,
cap_saldo,
cap_resgatar,
cap_registrar,
cap_recarregar_env,
cap_recarregar_send,
cap_multa_env,
cap_multa_send,
cap_ver_inv,
cap_ver_loja,
cap_v_comprar,
cap_comprar,
cap_v_usar,
cap_usar,
cap_f_usar,
cap_template,
cap_template_p,
cap_salvarpdr,
cap_salvarpdr_save,
cap_transferir_env,
cap_transferir_send
}
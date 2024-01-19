
/////////////////Menus\\\\\\\\\\\\\\\\\\\\\\

//menu normal do ale 1.0
const menu = (prefixo, usu, id) => {
return `
`;
}

//Figurinhas
const figurinhas = (prefixo, usu, id) =>{
return `
******************************
💟 Figurinhas 💟
******************************

${prefixo}FiguVideo (marcar-video)
${prefixo}Attp (texto)
******************************
`
}

//Downloads
const downloads = (prefixo, usu, id) => {
return `
******************************
📥 DOWNLOADS 📥
******************************

${prefixo}Play (nome ou link do Youtube)
${prefixo}Instagram (reels, videos)
${prefixo}twitter (link do vídeo)
${prefixo}facebook (link do vídeo)
${prefixo}tiktok (link do vídeo)
******************************
📁Arquivos📁

${prefixo}Mediafire (link)
******************************
`
}

//menu de administração de grupo
const menuadm = (prefixo, nome_usu, id_usu) => {
return `
******************************
🛡️MENU DE ADMINISTRAÇÃO🛡️
******************************
⚔️SEGURANÇA⚔️

${prefixo}Delete (apagar-mensagem)
${prefixo}AntiLink (ativar-desativar)
${prefixo}AntiImagens (ativar-desativar)
${prefixo}AntiVideos (ativar-desativar)
${prefixo}AntiAudios (ativar-desativar)
${prefixo}AntiDocumentos (ativar-desativar)
${prefixo}So_Adm (ativar-desativar)
${prefixo}AutoBan (ativar-desativar)

${prefixo}AddListaNegra (marcar msg)
${prefixo}TirardaListaNegra (marcar msg)
${prefixo}MostrarListaNegra
******************************
🛴ENTRETERIMENTO🛴

${prefixo}Simi (ativar-desativar)
******************************
`
}

//Menu do dono do bot
const menudono = (prefixo, nome_usu, id_usu) => {
return `
******************************
🔰MENU DO DONO🔰
******************************
⚙️Config Do Bot⚙️

${prefixo}BotOn (desativar bot)
${prefixo}AntiPv1 (envia mensagem)
${prefixo}LegendaAntipv (Nova Legenda)
${prefixo}AntiPv2 (ignora)
******************************
🔰 DONOS 🔰

${prefixo}AddDono  (marcar mensagem)
${prefixo}RemoveDono (marcar mensagem)
${prefixo}Donos (lista)
******************************
⏲️ANTI-SPAM⏲️

${prefixo}LegendaAntiSpam (nova-legenda)
${prefixo}TempoAntiSpam (em segundos)
******************************
🚫AUTO BAN GLOBAL🚫

${prefixo}AddListaNegraG (marcar mensagem)
${prefixo}TirarDaListaNegraG (marcar mensagem)
${prefixo}MostrarListaNegraG
******************************
🛍️BANCO E LOJA🛍️

${prefixo}Dinheiro_Resgate (valor)
******************************
` 
}

/////////////////INFOS\\\\\\\\\\\\\\\\\\\\\
const info_antispam = (prefixo, usu, id , tempo) => {
return `
******************************
⏲️ANTI-SPAM⏲️
******************************
ℹ️O Anti-Spam de comandos serve para evitar que usuários floodem o bot , para ganhar dinheiro, ou xp

✅Você pode configurar o tempo e a legenda dessa função como desejar,  e usar esses segmentos para adicionar informações puxadas do bot

#tempo# = tempo configurado
#pfx# = prefixo do bot

exemplo:

${prefixo}LegendaAntiSpam Espere #tempo# segundos entre um comando e outro

⚠️caso o usuário enviar 2 ou mais comandos em menos tempo que você programou , o bot ira retornar a seguinte mensagem

"Espere ${tempo} segundos entre um comando e outro"

ℹ️Para configurar o tempo é mais fácil, o comando deve ser seguido de um número, que representa por quanto segundos o antispam ira bloquear os comandos

${prefixo}TempoAntiSpam ${tempo}
******************************

`
}

const info_antipv = (prefixo, usu, id) => {
return `
******************************
🚫ANTI-PVS🚫
******************************
ℹ️O bot possui 2 antipvs que funcionam da seguinte maneira

📄${prefixo}AntiPv1 - Envia uma mensagem pre configurada pelo dono quando o usuário enviar uma mensagem no pv

🚫${prefixo}AntiPv2 - Apenas ignora o pv do usuário, assim não realizando nenhuma ação

ℹ️Para configurar a legenda do AntiPv1 você pode usar o seguinte Comando

${prefixo}LegendaAntipv Sua legenda

✅você pode usar os seguintes segmentos para deixar sua legenda mais completa

#pfx# = Prefixo do bot
******************************
`
}

const info_blacklist = (prefixo, usu, id) => {
return `
******************************
🚫AUTO-BANS🚫
******************************
ℹ️O bot possui 2 auto-bans 

⚔️O Lista Negra , que é uma configuração para grupos e pode ser ativado e desativado

🛡️E o Lista Negra Global que é uma função do dono do bot, que funciona em todos os grupos que o bot for adm

✅Em ambos , se um usuário que estiver nessa lista entrar em um grupo sera banido automaticamente
******************************
🚫Lista Negra De Grupos🚫

⚙️Comando para Ativar/Desativar
${prefixo}AutoBan

😃ℹ️Para adicionar ou remover um usuário a lista negra você pode escrever o comando com o id do usuário, ou marca/responder uma mensagem desse usuário com o comando

${prefixo}AddListaNegra 0000

${prefixo}TirardaListaNegra 0000

ℹ️Para ver a lista de ids nessa lista
${prefixo}MostrarListaNegra
******************************
🚫Lista Negra Global🚫

⚠️Essa não pode ser desativada , quando um usuário for adicionado a ela , sera removido ao entrar em qualquer grupo que o bot for administrador

ℹ️Para adicionar ou remover usuários, é exatamente igual a lista negra de grupos

${prefixo}AddListaNegraG 0000

${prefixo}TirardaListaNegraG 0000

ℹ️Para ver a lista de ids nessa lista
${prefixo}MostrarListaNegraG
******************************
`
}

module.exports = {
menu,
downloads,
menuadm,
menudono,
info_antispam,
info_antipv,
info_blacklist,
figurinhas
};

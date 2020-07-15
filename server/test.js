var se = new Date()

console.log(new Intl.DateTimeFormat('fr-FR', {
  hour: '2-digit',
  minute: '2-digit',
}).format(se))

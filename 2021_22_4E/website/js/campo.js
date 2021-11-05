// defisco un oggetto con i parametri di configurazione del gioco
// è un oggetto JavaScript con 3 attributi 
var components = {
    num_row : 12,
    num_cols : 12,
    num_bombs : 50
}
function create_table(){
    let row, td, i, j;
    // creo la tabella
    let my_table=document.createElement('table');
    // creo le righe e le colonne
    for (i=0; i<components.num_row;i++){
        // creo una nuova riga
        row = document.createElement('tr');
        for (j=0; j<components.num_cols; j++){
            // creo un nuovo TD (colonna)
            td = document.createElement('td');
            // aggiungo la colonna alla riga corrente
            row.appendChild(td);
        }
        // aggiungo la riga alla tabella 
        my_table.appendChild(row);
    }
    // restituisco l'oggetto "table" creato con i suoi figli 
    return my_table;
}
function start_game(){
    /*  vado a puntare all'elemento DIV in cui
        scriverò la tabella (papa' del nuovo elemento)
    */
    let div_campo = document.getElementById('campo');

    // appendo al div la tabella creata dalla funzione 
    div_campo.appendChild(create_table());
}

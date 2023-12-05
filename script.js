let saldo = 10000000;

function masukanPin(){
    if(password === "111223"){
        alert("PIN yang Anda masukkan benar,Hallo!");
        return true;
    }else{
        alert("PIN yang Anda masukkan salah,coba lagi");
        return false;
    }
}

function setor(){
    let password = prompt("Masukan PIN ATM Anda");
    if(password == 111223) {
        let jumlahSetor = parseInt(prompt("Silahkan Masukkan Uang yang akan di Setor"));
        if(isNaN(jumlahSetor) || jumlahSetor <=0){
            alert("Silahkan Masukkan Uang yang akan di Setor");
            return;
        }
            else{
                let Norek = prompt("Masukan No.Rekening:");
                alert("Setor Tunai Sebesar " + jumlahSetor + " No.Rekening : " + Norek);
                
                let jumlah = saldo += jumlahSetor;
                alert("saldo anda saat ini " + jumlah);
            }
    }else{
        alert("Anda salah memasukkan PIN, COBA LAGI!");
        setor();
    }
}

function masukanPin(){
    let password = prompt("Masukan PIN ATM Anda");
    if(password === "111223"){
        alert("PIN yang Anda masukkan benar,Hallo!");
        return true;
    }else{
        alert("PIN yang Anda masukkan salah,coba lagi");
        return false;
    }
}

function penarikan(){
    let password = prompt("Masukan PIN ATM Anda");
    if(password == 111223) {
        let jumlahPenarikan = parseInt(prompt("Masukan jumlah Penarikkan Tunai"));
        if(isNaN(jumlahPenarikan)||jumlahPenarikan <=0){
            jumlahPenarikan = parseInt(prompt("Masukan jumlah Penarikkkan Tunai"));
        }
        else if (jumlahPenarikan > saldo){
            alert("jumlah penarikan yang Anda inginkan terlalu banyak");
        }else{
            saldo -= jumlahPenarikan;
            alert("saldo anda saat ini" + saldo);
        }
    }else{
        alert("Masukkan pin yang benar!");
        penarikan();
    }
}
function pilihan() {
    while (true) {
        let option = prompt("pilih yang anda inginkan\n1. Setor Tunai\n2. Tarik Tunai\n");
        switch (option) {
            case "1":
                setor();
                break;
                case "2":
                    penarikan();
                    break;
        }
    }
}

if(masukanPin){
        pilihan();
     }
    
    

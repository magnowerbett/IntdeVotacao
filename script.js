document.addEventListener("DOMContentLoaded", function() {
    const voteButton = document.getElementById("voteButton");
    const resultMessage = document.getElementById("resultMessage");
    const candidate1Count = document.getElementById("candidate1Count");
    const candidate2Count = document.getElementById("candidate2Count");
    const candidate3Count = document.getElementById("candidate3Count");
    const candidate4Count = document.getElementById("candidate4Count");
    const candidate5Count = document.getElementById("candidate5Count");
    const candidateNenhumCount = document.getElementById("candidateNenhumCount");

    let votes = {
        candidato1: 0,
        candidato2: 0,
        candidato3: 0,
        candidato4: 0,
        candidato5: 0,
        candidatoNenhum: 0
    };

    voteButton.addEventListener("click", function() {
        const selectedCandidate = document.querySelector('input[name="candidate"]:checked');

        if (selectedCandidate) {
            const candidateName = selectedCandidate.value;
            votes[candidateName]++;

            updateVoteCounts();
            resultMessage.textContent = `VocĂȘ votou em ${candidateName}. Obrigado pelo seu voto!`;
        } else {
            resultMessage.textContent = "Por favor, escolha um candidato antes de votar.";
        }
    });

    function updateVoteCounts() {
        candidate1Count.textContent = votes.candidato1;
        candidate2Count.textContent = votes.candidato2;
        candidate3Count.textContent = votes.candidato3;
        candidate4Count.textContent = votes.candidato4;
        candidate5Count.textContent = votes.candidato5;
        candidateNenhumCount.textContent = votes.candidatoNenhum;
    }
});
